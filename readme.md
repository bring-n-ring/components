# bring-n-ring (ionic)components

A small set of component partially built upon ionic components for bring-n-ring app and website

## dev

with [storybook](https://storybook.js.org/)

```
npm i && npm start
```

## Components

Some components are simply styled version of ionic components, they keep teh prefix `Ion`

Other components are custom build.

## Requirements

### theming

Include `./base.css` at the beginning of you ionic app to ensure component styles are correctly applied.
Custom components can also be customized by editing base custom properties

### fonts

You can include fonts with `./fonts.css` but it would be preferred to add them with `<link>` tag

## TODO

Add rollupp to bundle components and extract css
