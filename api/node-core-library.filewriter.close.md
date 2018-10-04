[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [FileWriter](./node-core-library.filewriter.md) &gt; [close](./node-core-library.filewriter.close.md)

# FileWriter.close method

Closes the file handle permanently. No operations can be made on this file handle after calling this. Behind the scenes it uses `fs.closeSync()` and releases the file descriptor to be re-used.

**Signature:**
```javascript
close(): void;
```
**Returns:** `void`

