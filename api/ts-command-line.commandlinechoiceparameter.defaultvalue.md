[Home](./index) &gt; [@microsoft/ts-command-line](./ts-command-line.md) &gt; [CommandLineChoiceParameter](./ts-command-line.commandlinechoiceparameter.md) &gt; [defaultValue](./ts-command-line.commandlinechoiceparameter.defaultvalue.md)

# CommandLineChoiceParameter.defaultValue property

The default value which will be used if the parameter is omitted from the command line.

**Signature:**
```javascript
defaultValue: string | undefined
```

## Remarks

If a default value is specified, then [IBaseCommandLineDefinition.required](./ts-command-line.ibasecommandlinedefinition.required.md) must not be true. Instead, a custom error message should be used to report cases where a default value was not available.
