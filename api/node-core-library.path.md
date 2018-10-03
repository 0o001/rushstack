[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [Path](./node-core-library.path.md)

# Path class

Common operations for manipulating file and directory paths.

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`isUnder(childPath, parentFolderPath)`](./node-core-library.path.isunder.md) |  | `boolean` | Returns true if "childPath" is located inside the "parentFolderPath" folder or one of its child folders. Note that "parentFolderPath" is not considered to be under itself. The "childPath" can refer to any type of file system object. |
|  [`isUnderOrEqual(childPath, parentFolderPath)`](./node-core-library.path.isunderorequal.md) |  | `boolean` | Returns true if "childPath" is equal to "parentFolderPath", or if it is inside that folder or one of its children. The "childPath" can refer to any type of file system object. |

## Remarks

This API is intended to eventually be a complete replacement for the NodeJS "path" API.
