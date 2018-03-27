[Home](./index) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IExtractorDtsRollupConfig](./api-extractor.iextractordtsrollupconfig.md)

# IExtractorDtsRollupConfig interface

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Configures how the \*.d.ts rollup files will be generated.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`enabled`](./api-extractor.iextractordtsrollupconfig.enabled.md) | `boolean` | Whether to generate rollup \*.d.ts files. The default is false. |
|  [`mainDtsRollupPath`](./api-extractor.iextractordtsrollupconfig.maindtsrolluppath.md) | `string` | Specifies the relative path for the \*.d.ts rollup file to be generated for the package's main entry point. The default value is an empty string, which causes the path to be automatically inferred from the "typings" field of the project's package.json file. |
|  [`publishFolder`](./api-extractor.iextractordtsrollupconfig.publishfolder.md) | `string` | This setting is only used if "trimming" is false. It indicates the folder where "npm publish" will be run. The default value is "./dist". |
|  [`publishFolderForBeta`](./api-extractor.iextractordtsrollupconfig.publishfolderforbeta.md) | `string` | This setting is only used if "trimming" is true. It indicates the folder where "npm publish" will be run for a beta release. The default value is "./dist/beta". |
|  [`publishFolderForInternal`](./api-extractor.iextractordtsrollupconfig.publishfolderforinternal.md) | `string` | This setting is only used if "trimming" is true. It indicates the folder where "npm publish" will be run for an internal release. The default value is "./dist/internal". |
|  [`publishFolderForPublic`](./api-extractor.iextractordtsrollupconfig.publishfolderforpublic.md) | `string` | This setting is only used if "trimming" is true. It indicates the folder where "npm publish" will be run for a public release. The default value is "./dist/public". |
|  [`trimming`](./api-extractor.iextractordtsrollupconfig.trimming.md) | `boolean` | If "trimming" is false (the default), then a single \*.d.ts rollup file will be generated in the "publishFolder". If "trimming" is true, then three separate \*.d.ts rollups will be generated in "publishFolderForInternal", "publishFolderForBeta", and "publishFolderForPublic". |

## Remarks

API Extractor can generate a consolidated \*.d.ts file that contains all the exported typings for the package entry point. It can also trim @alpha, \\@beta, and \\@internal definitions according to the release type.
