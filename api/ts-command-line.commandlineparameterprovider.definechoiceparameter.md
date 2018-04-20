[Home](./index) &gt; [@microsoft/ts-command-line](./ts-command-line.md) &gt; [CommandLineParameterProvider](./ts-command-line.commandlineparameterprovider.md) &gt; [defineChoiceParameter](./ts-command-line.commandlineparameterprovider.definechoiceparameter.md)

# CommandLineParameterProvider.defineChoiceParameter method

Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum).

**Signature:**
```javascript
defineChoiceParameter(definition: ICommandLineChoiceDefinition): CommandLineChoiceParameter;
```
**Returns:** `CommandLineChoiceParameter`

## Remarks

Example: example-tool --log-level warn

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `definition` | `ICommandLineChoiceDefinition` |  |

