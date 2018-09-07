[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [IParsedPackageName](./node-core-library.iparsedpackagename.md) &gt; [scope](./node-core-library.iparsedpackagename.scope.md)

# IParsedPackageName.scope property

The parsed NPM scope, or an empty string if there was no scope. The scope value will always include the at-sign.

**Signature:**
```javascript
scope: string
```

## Remarks

For example, if the parsed input was "@scope/example", then scope would be "@scope".
