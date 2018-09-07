[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [IExecutableSpawnSyncOptions](./node-core-library.iexecutablespawnsyncoptions.md)

# IExecutableSpawnSyncOptions interface

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Options for Executable.execute().

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`input`](./node-core-library.iexecutablespawnsyncoptions.input.md) | `string` | The content to be passed to the child process's stdin.<p/>NOTE: If specified, this content replaces any IExecutableSpawnSyncOptions.stdio\[0\] mapping for stdin. |
|  [`maxBuffer`](./node-core-library.iexecutablespawnsyncoptions.maxbuffer.md) | `number` | The largest amount of bytes allowed on stdout or stderr for this synchonous operation. If exceeded, the child process will be terminated. The default is 200 \* 1024. |
|  [`stdio`](./node-core-library.iexecutablespawnsyncoptions.stdio.md) | `ExecutableStdioMapping` | The stdio mappings for the child process.<p/>NOTE: If IExecutableSpawnSyncOptions.input is provided, it will take precedence over the stdin mapping (stdio\[0\]). |
|  [`timeoutMs`](./node-core-library.iexecutablespawnsyncoptions.timeoutms.md) | `number` | The maximum time the process is allowed to run before it will be terminated. |

