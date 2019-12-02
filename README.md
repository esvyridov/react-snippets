# React Snippets

Collection of most common blocks of code which will help you to write your React code faster and React module generator.

## Features

This snippets extension includes only React specific code.

## Requirements

Do not forget to turn on support for tab-completion. Enable it with "editor.tabCompletion": "on", type a snippet prefix, and press Tab to insert a snippet.

## Extension

### React Module Generator 

Right Click On File Explorer -> Generate TS / JS React Module -> Enter Component Name. 

Generated Component Folder Structures:

#### Typescript


```
[name]                   # Component Folder
├── index.ts             # index module
├── [name].tsx           # Component
└── [name].module.css    # CSS Module
```

#### Javascript

Component Folder Structure:

```
[name]                   # Component Folder
├── index.js             # index module
├── [name].jsx           # Component
└── [name].module.css    # CSS Module
```

## Snippets

### Typescript

| Name | Snippet | Description |
| ---- |:-------:| ----------- |
| **I**mport **R**eact | `ir` | Import React dependency |
| **I**mport **S**tyle **M**odule | `ism` | Import CSS Module based of folder name |
| **C**reate **F**unctional **C**omponent | `cfc` | Create empty Functional Component with export |
| **C**reate **F**unctional **C**omponent **W**ith **T**ypings | `cfcwt` | Create empty Functional Component with interface and export |
| **A**dd use**S**tate **H**ook | `ash` | Add useState hook |
| **A**dd use**E**ffect **H**ook | `aeh` | Add useEffect hook |

### Javascript

| Name | Snippet | Description |
| ---- |:-------:| ----------- |
| **I**mport **R**eact | `ir` | Import React dependency |
| **I**mport **S**tyle **M**odule | `ism` | Import CSS Module based of folder name |
| **C**reate **F**unctional **C**omponent | `cfc` | Create empty Functional Component with export |
| **A**dd use**S**tate **H**ook | `ash` | Add useState hook |
| **A**dd use**E**ffect **H**ook | `aeh` | Add useEffect hook |


## Release Notes

### 0.0.1

Initial release of React Snippets.