[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [IPackageJsonLookupParameters](./node-core-library.ipackagejsonlookupparameters.md)

# IPackageJsonLookupParameters interface

Constructor parameters for [PackageJsonLookup](./node-core-library.packagejsonlookup.md)

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`loadExtraFields`](./node-core-library.ipackagejsonlookupparameters.loadextrafields.md) | `boolean` | Certain package.json fields such as "contributors" can be very large, and may significantly increase the memory footprint for the PackageJsonLookup cache. By default, PackageJsonLookup only loads a subset of standard commonly used fields names. Set loadExtraFields=true to always return all fields. |

