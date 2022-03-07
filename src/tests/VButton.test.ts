import { mount } from '@vue/test-utils'
import type { StyleValue } from 'vue'
import VButton from '../components/VButton.vue'

type Style = Record<string, StyleValue>

type Size = 'small' | 'medium' | 'large'

interface Props {
  primary?: boolean
  warning?: boolean
  class?: string
  style?: Style
  size?: Size
  text?: string
}

const bootstrap = (props: Props) => {
  return mount(VButton, {
    props: props as Object,
    // Without 'as any' or better, 'as Object',
    // can cause vue-tsc to fail as it is expecting an Object
  })
}

describe('Button Component', () => {
  test('Shows the text from the text prop', () => {
    const text = 'Hello, World!'

    const wrapper = bootstrap({ text })

    expect(wrapper.text()).toContain(text)
  })
  test('Displays as a Primary button', () => {
    const wrapper = bootstrap({ primary: true })

    expect(wrapper.find('button').classes()).toContain('primary')
  })
  test('Displays as a Warning button', () => {
    const wrapper = bootstrap({ warning: true })

    expect(wrapper.find('button').classes()).toContain('warning')
  })
  test('Adds additional classes to button', () => {
    const wrapper = bootstrap({ class: 'test-class' })

    expect(wrapper.find('button').classes()).toContain('test-class')
  })
  test('Default button size is medium', () => {
    const wrapper = bootstrap({})

    expect(wrapper.find('button').classes()).toContain('button-medium')
  })
  test('Sets the button to small', () => {
    const wrapper = bootstrap({ size: 'small' })

    expect(wrapper.find('button').classes()).toContain('button-small')
  })
  test('Sets the button to large', () => {
    const wrapper = bootstrap({ size: 'large' })

    expect(wrapper.find('button').classes()).toContain('button-large')
  })
  test('Sets the inline style to a black background', () => {
    const inlineStyle = { style: { 'background': 'black', 'text-decoration': 'underline' } }
    const wrapper = bootstrap(inlineStyle)

    expect(wrapper.find('button').attributes().style).toBe('background: black; text-decoration: underline;')
  })
})
