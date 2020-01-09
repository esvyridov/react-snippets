const fileMap = {
  javascript: {
    index: {
      input: 'index.js.template',
      output: 'index.js',
    },
    css: {
      input: '[CompName].module.css',
      output: '[CompName].module.css',
    },
    component: {
      input: '[CompName].jsx.template',
      output: '[CompName].jsx',
    },
  },
  typescript: {
    index: {
      input: 'index.ts.template',
      output: 'index.ts',
    },
    css: {
      input: '[CompName].module.css',
      output: '[CompName].module.css',
    },
    component: {
      input: '[CompName].tsx.template',
      output: '[CompName].tsx',
    },
  },
};

module.exports = fileMap;
