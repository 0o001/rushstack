[Home](./index) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [VersionPolicyConfiguration](./rush-lib.versionpolicyconfiguration.md) &gt; [bump](./rush-lib.versionpolicyconfiguration.bump.md)

# VersionPolicyConfiguration.bump method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Bumps up versions for the specified version policy or all version policies

**Signature:**
```javascript
bump(versionPolicyName?: string, bumpType?: BumpType, identifier?: string, shouldCommit?: boolean): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `versionPolicyName` | `string` | version policy name |
|  `bumpType` | `BumpType` | bump type to override what policy has defined. |
|  `identifier` | `string` | prerelease identifier to override what policy has defined. |
|  `shouldCommit` | `boolean` | should save to disk |

