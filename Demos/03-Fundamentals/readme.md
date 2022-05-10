# Angular Fundamentals

[Angular Template Syntax](https://angular.io/guide/template-syntax)

[HTML Attributes Reference](https://www.w3schools.com/tags/ref_attributes.asp)

[HTML Events Referenc](https://www.w3schools.com/tags/ref_eventattributes.asp)

[Attribute Directives](https://angular.io/guide/attribute-directives)

[Pipes](https://angular.io/guide/pipes)

## Configure Creation of Unit Test Files - \*.spec.ts

Method 1:

You can disable spec generation at the time of creating things using Angular-cli by adding "--no-spec"

```
ng generate component my-component --no-spec
```

Method 2:

Permanently disable in `angular.json` file. You can edit the schematics for your project.

```
"schematics": {
    "@schematics/angular:component": {
      "styleext": "scss",
      "spec": false
    },
    "@schematics/angular:class": {
      "spec": false
    },
    "@schematics/angular:directive": {
      "spec": false
    },
    "@schematics/angular:guard": {
      "spec": false
    },
    "@schematics/angular:module": {
      "spec": false
    },
    "@schematics/angular:pipe": {
      "spec": false
    },
    "@schematics/angular:service": {
      "spec": false
    }
  }, ...
```
