[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [FileSystem](./node-core-library.filesystem.md) &gt; [changePosixModeBits](./node-core-library.filesystem.changeposixmodebits.md)

# FileSystem.changePosixModeBits method

Changes the permissions (i.e. file mode bits) for a filesystem object. Behind the scenes it uses `fs.chmodSync()`<!-- -->.

**Signature:**
```javascript
static changePosixModeBits(path: string, mode: PosixModeBits): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `string` | The absolute or relative path to the object that should be updated. |
|  `mode` | `PosixModeBits` |  |

