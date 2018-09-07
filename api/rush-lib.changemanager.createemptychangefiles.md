[Home](./index) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [ChangeManager](./rush-lib.changemanager.md) &gt; [createEmptyChangeFiles](./rush-lib.changemanager.createemptychangefiles.md)

# ChangeManager.createEmptyChangeFiles method

Creates a change file that has a 'none' type.

**Signature:**
```javascript
static createEmptyChangeFiles(rushConfiguration: RushConfiguration, projectName: string, emailAddress: string): string | undefined;
```
**Returns:** `string | undefined`

the path to the file that was created, or undefined if no file was written

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `rushConfiguration` | `RushConfiguration` | The rush configuration we are working with |
|  `projectName` | `string` | The name of the project for which to create a change file |
|  `emailAddress` | `string` | The email address which should be associated with this change |

