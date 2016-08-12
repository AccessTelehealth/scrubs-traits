# Traits for scrubs

## Adding traits
- Add your trait to appropriate file, include any pseudo selectors.
- If you made a new file, add the import to `index.js` file.
- Create a new version of the built stylesheet with the default scrubs-theme:
```bash
npm install
npm run build
```

## Using the standalone stylesheet
You can use the built stylesheet and fonts in the dist folder and including the `index.css` file you built to your project.

## CSS Modules
You can also use the traits individually with CSS Modules in post-css or webpack. This allows explicit declaration of styles as well as the ability to namespace with local names.

- First install the traits:
``` bash
npm install dr-me/traits
```
- Add the theme file you'll be using as a resolve alias in your configuration (see webpack.config.js as an example):
```javascript
alias: {
  theme: 'scrubs-theme',
}
```
- Compose from the traits in your project:
```css
.Component {
  composes: mb2 from 'scrubs-traits/margin.css';
}
```
