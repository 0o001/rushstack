[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [FileSystem](./node-core-library.filesystem.md) &gt; [getRealPath](./node-core-library.filesystem.getrealpath.md)

# FileSystem.getRealPath method

Follows a link to its destination and returns the absolute path to the final target of the link. Behind the scenes it uses \`fs.realpathSync()\`.

**Signature:**
```javascript
static getRealPath(linkPath: string): string;
```
**Returns:** `string`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `linkPath` | `string` | The path to the link. |

