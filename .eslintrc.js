module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
      alias: {
        map: [
          ['src', './src/'],
          ['myAssets', './src/assets'],
          ['myBlogAssets', './src/assets/blog'],
          ['myProjectsAssets', './src/assets/projects'],
          ['myComponents', './src/components'],
          ['myBlogComponents', './src/components/blog'],
          ['myProjectsComponents', './src/components/projects'],
          ['myPages', './src/pages'],
          ['myAboutPage', './src/pages/about'],
          ['myBlogPage', './src/pages/blog'],
          ['myContactPage', './src/pages/contact'],
          ['myHomePage', './src/pages/home'],
          ['myProjectsPage', './src/pages/projects'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
  },
};
