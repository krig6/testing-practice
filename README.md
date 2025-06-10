# Webpack Template

Welcome to the Webpack Template! 🎉 This template provides a solid foundation for starting a modern JavaScript project with Webpack, including development and production setups.

## Features

- Development and Production Builds: Separate configurations for development (webpack.dev.js) and production (webpack.prod.js).
- CSS and Asset Handling: Pre-configured loaders for CSS and image files.
- HTML Generation: Automatically generates an HTML file with dynamic script inclusion using HtmlWebpackPlugin.
- Hot Module Replacement: Enables fast, live updates during development.
- Optimized Output: Uses content hashing for cache busting in production builds.

## Getting Started

Follow these steps to create a new project using this template:

### 1. Use this Template

Click the "**Use this template**" button on the repository page to create a new repository based on this template.

Alternatively, you can create a new repository and set this template as the upstream:

```bash
git clone <template-repository-url>
cd <repository-name>
git remote remove origin
git remote add origin git@github.com:<gitub-username>/<new-repository-name>.git
git push -u origin main
```

### 2. Install Dependencies

Install the necessary packages with npm:

```bash
npm install
```

### 3. Start the Development Server

Launch the development server with hot reloading enabled:

```bash
npm run dev
```

This will start the server at http://localhost:3000 by default.

### 4. Build for Production

Generate an optimized production build:

```bash
npm run build
```

This will generate the production-ready files in the dist directory.

### 5. Deploy to GitHub Pages

To deploy your project to GitHub Pages, use:

```
npm run deploy
```

This script will deploy the contents of the dist directory to the gh-pages branch of your repository, making it available at https://&lt;username&gt;.github.io/&lt;repository-name&gt;.

Note: Replace &lt;username&gt; with your GitHub username and &lt;repository-name&gt; with the name of your repository.

## Project Structure

```
.
├── dist/             # Compiled output files
├── src/              # Source files
│   ├── assets/       # Images, fonts, and other assets
│   ├── javascript/   # JavaScript modules and scripts
│   ├── styles/       # CSS and styling files
│   ├── index.js      # Main JavaScript entry point
│   └── template.html # HTML template file
├── .eslintrc.json    # ESLint configuration for code linting
├── .gitignore        # Specifies files to ignore in version control
├── .prettierrc.json  # Prettier configuration for code formatting
├── README.md         # Project documentation
├── package.json      # Project metadata and dependencies
├── webpack.common.js # Common Webpack configuration
├── webpack.dev.js    # Webpack configuration for development
└── webpack.prod.js   # Webpack configuration for production
```

## Customization

Feel free to modify the configuration files and project structure to fit your specific needs. Whether you're adding new loaders, plugins, or custom scripts, this template is designed to be flexible and easy to extend.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page if you want to contribute.
