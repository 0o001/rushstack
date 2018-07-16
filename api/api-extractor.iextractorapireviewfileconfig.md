[Home](./index) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IExtractorApiReviewFileConfig](./api-extractor.iextractorapireviewfileconfig.md)

# IExtractorApiReviewFileConfig interface

Configures how the API review files (\*.api.ts) will be generated.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`apiReviewFolder`](./api-extractor.iextractorapireviewfileconfig.apireviewfolder.md) | `string` | The file path of the folder containing API review file, relative to the project folder. This is part of an API review workflow: During a build, the API Extractor will output an API file, e.g. "my-project/temp/my-project.api.ts". It will then compare this file against the last reviewed file, e.g. "../api-review/my-project.api.ts" (assuming that apiReviewFolder is "../api-review"). If the files are different, the build will fail with an error message that instructs the developer to update the approved file, and then commit it to Git. When they create a Pull Request, a branch policy will look for changes under "api-review/\*" and require signoff from the appropriate reviewers.<p/>The default value is "./etc".<p/>Example: "config" (for a standalone project) Example: "../../common/api-review" (for a Git repository with Rush) |
|  [`enabled`](./api-extractor.iextractorapireviewfileconfig.enabled.md) | `boolean` | Whether to generate review files at all. The default is true. |
|  [`tempFolder`](./api-extractor.iextractorapireviewfileconfig.tempfolder.md) | `string` | The \*.api.ts report is saved into this folder. During a production build (i.e. when IExtractorRuntimeOptions.productionBuild=true) the temporary file will be compared with the file in apiReviewFolder; if there are differences, and error will be reported. During a non-production build, the temporary file will be automatically copied to the apiReviewFolder.<p/>The default value is "./temp". |

