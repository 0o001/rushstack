[Home](./index) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [RushConfiguration](./rush-lib.rushconfiguration.md)

# RushConfiguration class

This represents the Rush configuration for a repository, based on the "rush.json" configuration file.

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`approvedPackagesPolicy`](./rush-lib.rushconfiguration.approvedpackagespolicy.md) |  | `ApprovedPackagesPolicy` | The "approvedPackagesPolicy" settings. |
|  [`changesFolder`](./rush-lib.rushconfiguration.changesfolder.md) |  | `string` | The folder that contains all change files. |
|  [`committedShrinkwrapFilename`](./rush-lib.rushconfiguration.committedshrinkwrapfilename.md) |  | `string` | The full path of the shrinkwrap file that is tracked by Git. (The "rush install" command uses a temporary copy, whose path is tempShrinkwrapFilename.) |
|  [`commonFolder`](./rush-lib.rushconfiguration.commonfolder.md) |  | `string` | The fully resolved path for the "common" folder where Rush will store settings that affect all Rush projects. This is always a subfolder of the folder containing "rush.json". Example: "C:\\MyRepo\\common" |
|  [`commonRushConfigFolder`](./rush-lib.rushconfiguration.commonrushconfigfolder.md) |  | `string` | The folder where Rush's additional config files are stored. This folder is always a subfolder called "config\\rush" inside the common folder. (The "common\\config" folder is reserved for configuration files used by other tools.) To avoid confusion or mistakes, Rush will report an error if this this folder contains any unrecognized files.<p/>Example: "C:\\MyRepo\\common\\config\\rush" |
|  [`commonScriptsFolder`](./rush-lib.rushconfiguration.commonscriptsfolder.md) |  | `string` | The folder where automation scripts are stored. This is always a subfolder called "scripts" under the common folder. Example: "C:\\MyRepo\\common\\scripts" |
|  [`commonTempFolder`](./rush-lib.rushconfiguration.commontempfolder.md) |  | `string` | The folder where temporary files will be stored. This is always a subfolder called "temp" under the common folder. Example: "C:\\MyRepo\\common\\temp" |
|  [`commonVersions`](./rush-lib.rushconfiguration.commonversions.md) |  | `CommonVersionsConfiguration` | Settings from the common-versions.json config file. |
|  [`eventHooks`](./rush-lib.rushconfiguration.eventhooks.md) |  | `EventHooks` | The rush hooks. It allows customized scripts to run at the specified point. |
|  [`gitAllowedEmailRegExps`](./rush-lib.rushconfiguration.gitallowedemailregexps.md) |  | `string[]` | \[Part of the "gitPolicy" feature.\] A list of regular expressions describing allowable email patterns for Git commits. They are case-insensitive anchored JavaScript RegExps. Example: ".\*@example.com" This array will never be undefined. |
|  [`gitSampleEmail`](./rush-lib.rushconfiguration.gitsampleemail.md) |  | `string` | \[Part of the "gitPolicy" feature.\] An example valid email address that conforms to one of the allowedEmailRegExps. Example: "foxtrot@example.com" This will never be undefined, and will always be nonempty if gitAllowedEmailRegExps is used. |
|  [`hotfixChangeEnabled`](./rush-lib.rushconfiguration.hotfixchangeenabled.md) |  | `boolean` | \[Part of the "hotfixChange" feature.\] Enables creating hotfix changes |
|  [`npmCacheFolder`](./rush-lib.rushconfiguration.npmcachefolder.md) |  | `string` | The local folder that will store the NPM package cache. Rush does not rely on the npm's default global cache folder, because npm's caching implementation does not reliably handle multiple processes. (For example, if a build box is running "rush install" simultaneously for two different working folders, it may fail randomly.)<p/>Example: "C:\\MyRepo\\common\\temp\\npm-cache" |
|  [`npmTmpFolder`](./rush-lib.rushconfiguration.npmtmpfolder.md) |  | `string` | The local folder where npm's temporary files will be written during installation. Rush does not rely on the global default folder, because it may be on a different hard disk.<p/>Example: "C:\\MyRepo\\common\\temp\\npm-tmp" |
|  [`packageManager`](./rush-lib.rushconfiguration.packagemanager.md) |  | `PackageManager` | The name of the package manager being used to install dependencies |
|  [`packageManagerToolFilename`](./rush-lib.rushconfiguration.packagemanagertoolfilename.md) |  | `string` | The absolute path to the locally installed NPM tool. If "rush install" has not been run, then this file may not exist yet. Example: "C:\\MyRepo\\common\\temp\\npm-local\\node\_modules.bin\\npm" |
|  [`packageManagerToolVersion`](./rush-lib.rushconfiguration.packagemanagertoolversion.md) |  | `string` | The version of the locally installed NPM tool. (Example: "1.2.3") |
|  [`pnpmOptions`](./rush-lib.rushconfiguration.pnpmoptions.md) |  | `PnpmOptionsConfiguration` | Options that are only used when the PNPM package manager is selected. |
|  [`pnpmStoreFolder`](./rush-lib.rushconfiguration.pnpmstorefolder.md) |  | `string` | The local folder where PNPM stores a global installation for every installed package<p/>Example: "C:\\MyRepo\\common\\temp\\pnpm-store" |
|  [`projectFolderMaxDepth`](./rush-lib.rushconfiguration.projectfoldermaxdepth.md) |  | `number` | The maximum allowable folder depth for the projectFolder field in the rush.json file. This setting provides a way for repository maintainers to discourage nesting of project folders that makes the directory tree more difficult to navigate. The default value is 2, which implements on a standard convention of <categoryFolder>/<projectFolder>/package.json. |
|  [`projectFolderMinDepth`](./rush-lib.rushconfiguration.projectfoldermindepth.md) |  | `number` | The minimum allowable folder depth for the projectFolder field in the rush.json file. This setting provides a way for repository maintainers to discourage nesting of project folders that makes the directory tree more difficult to navigate. The default value is 2, which implements a standard 2-level hierarchy of <categoryFolder>/<projectFolder>/package.json. |
|  [`projects`](./rush-lib.rushconfiguration.projects.md) |  | `RushConfigurationProject[]` |  |
|  [`projectsByName`](./rush-lib.rushconfiguration.projectsbyname.md) |  | `Map<string, RushConfigurationProject>` |  |
|  [`repositoryUrl`](./rush-lib.rushconfiguration.repositoryurl.md) |  | `string` | The remote url of the repository. It helps 'Rush change' finds the right remote to compare against. |
|  [`rushJsonFile`](./rush-lib.rushconfiguration.rushjsonfile.md) |  | `string` | The Rush configuration file |
|  [`rushJsonFolder`](./rush-lib.rushconfiguration.rushjsonfolder.md) |  | `string` | The folder that contains rush.json for this project. |
|  [`rushLinkJsonFilename`](./rush-lib.rushconfiguration.rushlinkjsonfilename.md) |  | `string` | The filename of the build dependency data file. By default this is called 'rush-link.json' resides in the Rush common folder. Its data structure is defined by IRushLinkJson.<p/>Example: "C:\\MyRepo\\common\\temp\\rush-link.json" |
|  [`rushUserFolder`](./rush-lib.rushconfiguration.rushuserfolder.md) |  | `string` | The absolute path to Rush's storage in the home directory for the current user. On Windows, it would be something like "C:\\Users\\YourName.rush". |
|  [`shrinkwrapFilePhrase`](./rush-lib.rushconfiguration.shrinkwrapfilephrase.md) |  | `string` | Returns an English phrase such as "shrinkwrap file" that can be used in logging messages to refer to the shrinkwrap file using appropriate terminology for the currently selected package manager. |
|  [`telemetryEnabled`](./rush-lib.rushconfiguration.telemetryenabled.md) |  | `boolean` | Indicates whether telemetry collection is enabled for Rush runs. |
|  [`tempShrinkwrapFilename`](./rush-lib.rushconfiguration.tempshrinkwrapfilename.md) |  | `string` | The full path of the temporary shrinkwrap file that is used during "rush install". This file may get rewritten by the package manager during installation. |
|  [`tempShrinkwrapPreinstallFilename`](./rush-lib.rushconfiguration.tempshrinkwrappreinstallfilename.md) |  | `string` | The full path of a backup copy of tempShrinkwrapFilename. This backup copy is made before installation begins, and can be compared to determine how the package manager modified tempShrinkwrapFilename. |
|  [`versionPolicyConfiguration`](./rush-lib.rushconfiguration.versionpolicyconfiguration.md) |  | `VersionPolicyConfiguration` |  |
|  [`yarnCacheFolder`](./rush-lib.rushconfiguration.yarncachefolder.md) |  | `string` | The local folder that will store the Yarn package cache.<p/>Example: "C:\\MyRepo\\common\\temp\\yarn-cache" |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`findProjectByShorthandName(shorthandProjectName)`](./rush-lib.rushconfiguration.findprojectbyshorthandname.md) |  | `RushConfigurationProject | undefined` | This is used e.g. by command-line interfaces such as "rush build --to example". If "example" is not a project name, then it also looks for a scoped name like "@something/example". If exactly one project matches this heuristic, it is returned. Otherwise, undefined is returned. |
|  [`findProjectByTempName(tempProjectName)`](./rush-lib.rushconfiguration.findprojectbytempname.md) |  | `RushConfigurationProject | undefined` | Looks up a project by its RushConfigurationProject.tempProjectName field. |
|  [`getProjectByName(projectName)`](./rush-lib.rushconfiguration.getprojectbyname.md) |  | `RushConfigurationProject | undefined` | Looks up a project in the projectsByName map. If the project is not found, then undefined is returned. |
|  [`loadFromConfigurationFile(rushJsonFilename)`](./rush-lib.rushconfiguration.loadfromconfigurationfile.md) |  | `RushConfiguration` | Loads the configuration data from an Rush.json configuration file and returns an RushConfiguration object. |
|  [`loadFromDefaultLocation()`](./rush-lib.rushconfiguration.loadfromdefaultlocation.md) |  | `RushConfiguration` |  |
|  [`tryFindRushJsonLocation(verbose)`](./rush-lib.rushconfiguration.tryfindrushjsonlocation.md) |  | `string | undefined` | Find the rush.json location and return the path, or undefined if a rush.json can't be found. |

