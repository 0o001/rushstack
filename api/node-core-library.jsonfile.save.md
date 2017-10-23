[Home](./index) &gt; [@microsoft/node-core-library](node-core-library.md) &gt; [JsonFile](node-core-library.jsonfile.md) &gt; [save](node-core-library.jsonfile.save.md)

# JsonFile.save method

Saves the file to disk. Returns false if nothing was written due to options.onlyIfChanged.

**Signature:**
```javascript
public static save(jsonObject: Object, jsonFilename: string, options: IJsonFileSaveOptions = {}): boolean;
```
**Returns:** `boolean`

false if ISaveJsonFileOptions.onlyIfChanged didn't save anything; true otherwise

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `jsonObject` | `Object` | the object to be saved |
|  `jsonFilename` | `string` | the file path to write |
|  `options` | `IJsonFileSaveOptions` | other settings that control how the file is saved |

