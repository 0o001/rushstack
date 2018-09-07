[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [FileSystem](./node-core-library.filesystem.md) &gt; [formatPosixModeBits](./node-core-library.filesystem.formatposixmodebits.md)

# FileSystem.formatPosixModeBits method

Returns a 10-character string representation of a PosixModeBits value similar to what would be displayed by a command such as "ls -l" on a POSIX-like operating system.

**Signature:**
```javascript
static formatPosixModeBits(modeBits: PosixModeBits): string;
```
**Returns:** `string`

## Remarks

For example, \`PosixModeBits.AllRead \| PosixModeBits.AllWrite\` would be formatted as "-rw-rw-rw-".

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `modeBits` | `PosixModeBits` | POSIX-style file mode bits specified using the[PosixModeBits](./node-core-library.posixmodebits.md) enum |

