const path = require('path')

module.exports = {
  title: 'Component Library Demo',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'https://github.com/CRBroughton/component-lib-demo',
    sidebar: [
      {
        text: 'Introduction',
        children: [
          { text: 'What is a Component Library?', link: '/' },
          { text: 'Getting Started', link: '/guide/' },
        ],
      }, {
        text: 'Components',
        children: [
          { text: 'VButton', link: '/components/vbutton' },
          { text: 'VInput', link: '/components/vinput' },
        ],
      }
    ],
  },
  vite: {
    resolve: {
      alias: {
        'craigs-component-lib': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    }
  }
}
