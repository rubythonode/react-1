# React Project Template

React Server-side Rendering Project template.

- You can use Server-side render and Local test at a time.
- Make just view with components, then build itself.

## Setting up

1. Get resources from repository.

```
$ git clone git@github.com:wooyaggo/react.git
```

2. Install modules.

Then you need to install [pm2](http://pm2.keymetrics.io/) for global.

```
$ cd react
$ npm install
$ npm install pm2 -g
```

3. Run project with npm.


```
$ npm start
```

4. You can see through [http://localhost:8000](http://localhost:8000) or local html file direct.

## Create New View

1. Create a jsx file in `jsx/`

2. Make view with components. All components must be inside `jsx/components/`.

3. Restart application. But if you don't create a new view, you don't need to restart. Webpack and Node.js already watching the folders.

```
$ npm start
```