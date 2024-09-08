# Notes about My development

## Folder Structure
I have organized the project following a feature-based structure. This pattern groups related files together, making the codebase more modular and easier to maintain. Here is an overview of the structure:

- `src/components`: Contains reusable UI components.
- `src/pages`: Contains page-level components.
- `src/styles`: Contains global and component-specific styles.
- `src/component/[componentName]/styles/[componentName].module.css`: Contains component-specific CSS modules for styling individual components. This ensures that styles are scoped locally to the component, preventing conflicts with other styles.
- `src/assets`: Contains static assets like images and fonts.


## Responsive Design
I have followed the figma design with real working example from the video ypu have recorded. I ensured the project follows a mobile-first approach, making it responsive across various devices. This was achieved by using CSS media queries to adjust the layout and styles based on the screen size. For example, in the `src/components/Navbar/styles/Navbar.module.css` file, I added media queries to handle different screen widths.

## Cross-Browser Compatibility
To ensure cross-browser compatibility, I included polyfills for older browsers in the `index.html` file:

## Improved Layout and Styling
I used modern CSS techniques to enhance the layout and styling of the application. For instance, in the `src/styles.css` file, I applied a grid layout to center the content.

## Animation Enhancements
I incorporated animations using the `framer-motion` library to provide a smooth user experience. This can be seen in the `src/components/AnimatedContent/AnimatedImage.tsx` file.

## TypeScript Support
I have continued to TypeScript support to the project to ensure type safety and improve code quality.

## Browserslist Configuration
I configured the `browserslist` field in the `package.json` file to specify the target browsers for the project. This ensures that the generated code is compatible with the specified browsers, providing a consistent user experience. 



# HubX Frontend Assignment

Please implement the given design with responsive, mobile-first approach and cross-browser support and try to follow it as closely as possible. The functionality described in the Figma file needs to be implemented for this assignment to be completed successfully. Make sure to format and lint your code before submitting it.

## Design

Figma design URL:

```
https://www.figma.com/file/fqq3IGqxAiIUEItAWHZ54W/Frontend-Case-(HubX)?type=design&node-id=896%3A263&mode=design&t=7TvYeaXudwa3TGy5-1
```

Example implementation videos:

```
https://drive.google.com/drive/folders/1kkicvHG7UMc-MY9npv_fy4gW1cZF3QiO?usp=drive_link
```

## Start development server

```sh
npm run dev
```

## Lint the code

```sh
npm run lint
```

## Format the code

```sh
npm run format
```

