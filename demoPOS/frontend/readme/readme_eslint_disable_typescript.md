# Disable eslint error in typescript such as unused...

- open tsconfig.json
- set all Linting options to false to turn off all lint verification

```
/* Linting */
    "strict": true, => false
    "noUnusedLocals": true, => false
    "noUnusedParameters": true, => false
    "noFallthroughCasesInSwitch": true, => false
```

# Auto fix most problems

- .\node_modules\.bin\eslint.cmd --fix . -https://stackoverflow.com/questions/39997022/show-all-warnings-and-errors-in-visual-studio-code

# auto import

```
"editor.codeActionsOnSave": {
    "source.organizeImports": true
  },

```
