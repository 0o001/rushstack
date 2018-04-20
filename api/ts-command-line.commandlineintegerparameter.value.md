[Home](./index) &gt; [@microsoft/ts-command-line](./ts-command-line.md) &gt; [CommandLineIntegerParameter](./ts-command-line.commandlineintegerparameter.md) &gt; [value](./ts-command-line.commandlineintegerparameter.value.md)

# CommandLineIntegerParameter.value property

Returns the argument value for an integer parameter that was parsed from the command line.

**Signature:**
```javascript
value: number | undefined
```

## Remarks

The return value will be undefined if the command-line has not been parsed yet, or if the parameter was omitted and has no default value.
