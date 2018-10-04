[Home](./index) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [RushConfiguration](./rush-lib.rushconfiguration.md) &gt; [committedShrinkwrapFilename](./rush-lib.rushconfiguration.committedshrinkwrapfilename.md)

# RushConfiguration.committedShrinkwrapFilename property

The full path of the shrinkwrap file that is tracked by Git. (The "rush install" command uses a temporary copy, whose path is tempShrinkwrapFilename.)

**Signature:**
```javascript
committedShrinkwrapFilename: string
```

## Remarks

This property merely reports the filename; the file itself may not actually exist. Example: `C:\MyRepo\common\npm-shrinkwrap.json` or `C:\MyRepo\common\shrinkwrap.yaml`
