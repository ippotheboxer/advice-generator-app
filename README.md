# Advice Generator App

![desktop-preview](https://github.com/user-attachments/assets/a8914355-4667-441f-acd2-e6b8585dc753)


This is a project from [Frontend Mentor](https://www.frontendmentor.io). The challenge was to build an advice generator app using the [Advice Slip API](https://api.adviceslip.com). Original Challenge [here](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

### Links

- [Solution URL](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)
- [Live Site URL](https://ippotheboxer.github.io/advice-generator-app)

## My process

I created the design using a mobile-first approach. I added all the colours into the tailwind.config.js to make them easier to access in the code. There is only one component since it's quite a small project. There is an API folder with the GET request, exorted as a function to use in the AdviceContainer. There is a UseEffect to get random advice generated when the page is loaded, or refreshed. The dice button also triggers the function for getting new advice.

### Built with

- [Vite](https://vite.dev/) - Build tool
- [React](https://reactjs.org/) - Frontend framework
- [Typescript](https://www.typescriptlang.org/) - Javascript with types
- [Tailwind-css](https://tailwindcss.com/) - Tailwind CSS

### Useful resources

- [React-gh-pages tutorial](https://github.com/gitname/react-gh-pages) - This helped me with hosting to github pages. Very cleary written tutorial.
- [Issue](https://github.com/tschaub/gh-pages/issues/485) - I got this exact issue when trying to host, so this helped me to do it successfully.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
