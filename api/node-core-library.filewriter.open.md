[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [FileWriter](./node-core-library.filewriter.md) &gt; [open](./node-core-library.filewriter.open.md)

# FileWriter.open method

Opens a new file handle to the file at the specified path and given mode. Behind the scenes it uses \`fs.openSync()\`. The behaviour of this function is platform specific. See: https://nodejs.org/docs/latest-v8.x/api/fs.html\#fs\_fs\_open\_path\_flags\_mode\_callback

**Signature:**
```javascript
static open(path: string, flags?: IFileWriterFlags): FileWriter;
```
**Returns:** `FileWriter`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `string` | The absolute or relative path to the file handle that should be opened. |
|  `flags` | `IFileWriterFlags` | The flags for opening the handle |

