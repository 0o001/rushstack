// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import * as path from 'path';
import { JsonFile, Executable, FileSystem } from '@microsoft/node-core-library';
import { Extractor, ExtractorConfig, CompilerState, ExtractorResult } from '@microsoft/api-extractor';

function executeCommand(command: string, args: string[]): void {
  console.log(`---> ${command} ${args.join(' ')}`);

  // Redirect STDERR --> STDOUT since we don't want this warning to break the Rush build:
  // 'You have changed the public API signature for this project'
  //
  // TODO: Remove this after the 'Create an empty file' workaround below is removed
  const result = Executable.spawnSync(command, args, { stdio: [ 0, 1, 1 ] });

  if (result.error) {
    throw result.error.toString();
  }

  if (result.status !== 0) {
    throw new Error('The process returned a nonzero exit code');
  }
}

export function runScenarios(buildConfigPath: string): void {
  const buildConfig = JsonFile.load(buildConfigPath);

  const apiExtractorBinary = 'node_modules/.bin/api-extractor';

  const entryPoints: string[] = [];

  // TODO: Eliminate this workaround
  // See GitHub issue https://github.com/Microsoft/web-build-tools/issues/1017
  for (const scenarioFolderName of buildConfig.scenarioFolderNames) {
    const entryPoint: string = `./lib/${scenarioFolderName}/index.d.ts`;
    entryPoints.push(path.resolve(entryPoint));

    const apiExtractorJson = {
      '$schema': 'https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json',

      'mainEntryPointFile': entryPoint,

      'apiReport': {
        'enabled': true,
        'reportFolder': `./etc/test-outputs/${scenarioFolderName}`,
        'tempFolder': './temp'
      },

      'dtsRollup': {
        'enabled': true,

        'untrimmedFilePath': `./etc/test-outputs/${scenarioFolderName}/rollup.d.ts`
      },

      'docModel': {
        'enabled': true,
        'apiJsonFilePath': `./etc/test-outputs/${scenarioFolderName}/<unscopedPackageName>.api.json`
      },

      'messages': {
        'extractorMessageReporting': {
          // For test purposes, write these warnings into .api.md
          // TODO: Capture the full list of warnings in the tracked test output file
          'ae-cyclic-inherit-doc': {
            'logLevel': 'warning',
            'addToApiReviewFile': true
          },
          'ae-unresolved-link': {
            'logLevel': 'warning',
            'addToApiReviewFile': true
          }
        }
      },

      'testMode': true
    };

    const apiExtractorJsonPath: string = `./temp/configs/api-extractor-${scenarioFolderName}.json`;

    JsonFile.save(apiExtractorJson, apiExtractorJsonPath, { ensureFolderExists: true });

    // Create an empty file to force API Extractor to create a missing output file
    // TODO: Add an api-extractor option to force creation of a missing .api.md file
    // See GitHub issue https://github.com/Microsoft/web-build-tools/issues/1018
    FileSystem.writeFile(`./etc/test-outputs/${scenarioFolderName}/api-extractor-scenarios.api.md`, '',
      { ensureFolderExists: true });
  }

  let compilerState: CompilerState | undefined = undefined;

  for (const scenarioFolderName of buildConfig.scenarioFolderNames) {
    const apiExtractorJsonPath: string = `./temp/configs/api-extractor-${scenarioFolderName}.json`;

    // Run the API Extractor command-line
    const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

    if (!compilerState) {
      compilerState = CompilerState.create(extractorConfig, {
        additionalEntryPoints: entryPoints
      });
    }

    Extractor.invoke(extractorConfig, { localBuild: true, compilerState });
  }

}
