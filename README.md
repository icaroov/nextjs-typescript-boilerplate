<p align="center">
  <img src="https://res.cloudinary.com/ddi5agea1/image/upload/v1612315130/NextJs_qshtdn.png" alt="NextJs Logo" />
</p>

<h1 align="center">Next.js ⚡ Boilerplate</h1>

<div align="center">
  
[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/icaroov/nextjs-typescript-boilerplate)

An [**Next.js**](https://github.com/zeit/next.js/) start kit to scalable web applications, designed with simplicity for learning and real-world applicability.

</div>

## What is inside?

This project uses lot of stuff as:

- 💙 [TypeScript](https://www.typescriptlang.org/)
- 🏴 [NextJS](https://nextjs.org/)
- 💅 [Styled Components](https://styled-components.com/)
- 🐐 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- 🃏  [Jest](https://jestjs.io/)
- 📔 [Storybook](https://storybook.js.org/)
- 📏 [Eslint](https://eslint.org/)
- 💖 [Prettier](https://prettier.io/)
- 🐶 [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.ts`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Structure overview
```
├── .jest
|    └── setup.ts
├── .storybook
|     └── main.js
|     └── preview.js
├── .vscode
├── generators
|   └── templates
|   └── plopfile.js
├── public
├── src
│   ├── components
│   │   └── Main
|   |       └── index.tsx
|   |       └── styles.ts
|   |       └── stories.tsx
|   |       └── test.tsx
|   ├── pages
│   |   └── _app.tsx
│   |   └── _document.tsx
│   |   └── index.tsx
│   ├── styles
│   |   └── global.ts
│   ├── types
│   │   └── jest-styled-components.d.ts
|
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── LICENSE.md
├── README.md
├── jest.config.js
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## License 

The [MIT License]() (MIT)
