[Home](./index) &gt; [@microsoft/ts-command-line](./ts-command-line.md) &gt; [CommandLineParameterProvider](./ts-command-line.commandlineparameterprovider.md) &gt; [defineStringListParameter](./ts-command-line.commandlineparameterprovider.definestringlistparameter.md)

# CommandLineParameterProvider.defineStringListParameter method

Defines a command-line parameter whose value is one or more text strings.

**Signature:**
```javascript
protected defineStringListParameter(definition: ICommandLineStringListDefinition): CommandLineStringListParameter;
```
**Returns:** `CommandLineStringListParameter`

## Remarks

Example: example-tool --add file1.txt --add file2.txt --add file3.txt

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `definition` | `ICommandLineStringListDefinition` |  |

