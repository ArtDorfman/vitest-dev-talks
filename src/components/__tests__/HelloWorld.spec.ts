import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('Submit')
  })

  it('clicks on submit button', () => {
    const form = wrapper.find('form')
    const spyOnForm = vi.spyOn(form, 'trigger')

    form.trigger('click')

    expect(spyOnForm).toHaveBeenCalledOnce()
  })

  it('renders the input value', () => {
    const input = wrapper.find('input')
    expect(input.text()).toContain('')

    input.setValue('a.dorfman@softonix.org')
    expect(input.element.value).toEqual('a.dorfman@softonix.org')
  })

  it('should match a valid email address', () => {
    expect(emailRegex.test('a.dorfman@softonix.org')).toBeTruthy();
  });

  it('should not match an invalid email address', () => {
    expect(emailRegex.test('a.dorfman@softonix')).toBeFalsy();
  });
})
