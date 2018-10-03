[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [Path](./node-core-library.path.md) &gt; [isUnder](./node-core-library.path.isunder.md)

# Path.isUnder method

Returns true if "childPath" is located inside the "parentFolderPath" folder or one of its child folders. Note that "parentFolderPath" is not considered to be under itself. The "childPath" can refer to any type of file system object.

**Signature:**
```javascript
static isUnder(childPath: string, parentFolderPath: string): boolean;
```
**Returns:** `boolean`

## Remarks

The indicated file/folder objects are not required to actually exist on disk. For example, "parentFolderPath" is interpreted as a folder name even if it refers to a file. If the paths are relative, they will first be resolved using path.resolve().

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `childPath` | `string` |  |
|  `parentFolderPath` | `string` |  |

