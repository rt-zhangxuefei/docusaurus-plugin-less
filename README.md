# docusaurus2-plugin-less

Provides support for LESS to Docusaurus v2.

# Installation

```sh
npm i docusaurus2-plugin-less --save-dev
```

# How to use

1. Include the plugin in your `docusaurus.config.js` file.

```diff
// docusaurus.config.js
module.exports = {
  ...
+ plugins: ['docusaurus2-plugin-less'],
  ...
}
```

2. Write and import your stylesheets in LESS as normal for both `global styles` and `CSS modules`.

## Global styles

Assuming you are using `@docusaurus/preset-classic` (or `@docusaurus/theme-classic`), you can set the `customCss` property to point to yous LESS file:

```javascript
// docusaurus.config.js
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        ...
        theme: {
          customCss: require.resolve('./src/css/custom.less'),
        },
        ...
      },
    ],
  ],
};
```

## LESS modules

To style your components using modules, name your stylesheet files with the .module.less suffix (e.g. welcome.module.less). Webpack will load such files as CSS modules and you have to reference the class names from the imported CSS module (as opposed to using plain strings). This is similar to the convention used in Create React App.

```less
/* styles.module.less */
.main {
  padding: 12px;

  article {
    color: #ccc;
  }
}
```

```javascript
import styles from './styles.module.less'

function MyComponent() {
  return (
    <main className={styles.main}>
      <article>who am i</article>
    </main>
  )
}
```
