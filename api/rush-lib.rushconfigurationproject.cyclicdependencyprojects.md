[Home](./index) &gt; [@microsoft/rush-lib](rush-lib.md) &gt; [RushConfigurationProject](rush-lib.rushconfigurationproject.md) &gt; [cyclicDependencyProjects](rush-lib.rushconfigurationproject.cyclicdependencyprojects.md)

# RushConfigurationProject.cyclicDependencyProjects property

A list of local projects that appear as devDependencies for this project, but cannot be locally linked because it would create a cyclic dependency; instead, the last published version will be installed in the Common folder.

These are package names that would be found by RushConfiguration.getProjectByName().

**Signature:**
```javascript
cyclicDependencyProjects: Set<string>
```
