[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [JsonFile](./node-core-library.jsonfile.md) &gt; [updateString](./node-core-library.jsonfile.updatestring.md)

# JsonFile.updateString method

Serializes the specified JSON object to a string buffer.

**Signature:**
```javascript
static updateString(previousJson: string, newJsonObject: Object, options?: IJsonFileStringifyOptions): string;
```
**Returns:** `string`

a JSON string, with newlines, and indented with two spaces

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `previousJson` | `string` |  |
|  `newJsonObject` | `Object` |  |
|  `options` | `IJsonFileStringifyOptions` | other settings that control serialization |

