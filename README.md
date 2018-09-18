# IndiRact


## Setup workflow

#### Initial folders

```

    > public
      > scripts
        + app.js

    > src
      - app.js

```

> linking to cdn gives u access to globals: React,ReactDOM

#### terminal

- npm init
- installed live-server (g)
  + `live-server` to run server
- installed babel-cli (g)
- babel-preset-react@6.24.1 
- babel-preset-env@1.5.2

> src/app.js --> contains `jsx`
> public/app.js ----> auto-generated file w/babel transformations

##### babel In order to compile JSX and ES6 code config

- path to code to compile
  + `src/app.js`
- path to output file
  + `--out-file=public/scripts/app.js`
- presets
  + `--presets=env,react --watch`


<kbd>here:</kbd>

```
      > babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

<br/>

- in a separate tab:
  + `live-server public`


<kbd>and</kbd>

```
     > live-server public
```



git remote add origin https://github.com/stefan22/indiRact.git
