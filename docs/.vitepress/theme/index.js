import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import MyLib from 'craigs-component-lib'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MyLib)
    app.component('DemoContainer', DemoContainer)
  }
}
