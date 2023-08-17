import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import Header from '../Header.vue'

describe('Testing Router links in the Header', () => {
  const mountedHeader = mount(Header, { global: { plugins: [router] } })

  it('it mounts properly', () => {
    expect(mountedHeader).toBeTruthy()
    expect(mountedHeader.text()).toContain('Home')
    expect(mountedHeader.text()).toContain('About')
  })

  it('click the links', () => {
    const push = vi.spyOn(router, 'push')
    mountedHeader.find('a[id="link"]').trigger('click')
    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/')

    // mountedHeader.find('a[type="button"]').trigger('click')

    /* Different variants of how to select the link.
    In Cypress best practice is to use data-testid.
    I aggree with that, so here I also add data-testid attribute */
    mountedHeader.find('a[data-testid="push-to-about"]').trigger('click')

    expect(push).toHaveBeenCalledTimes(2)
    expect(push).toHaveBeenCalledWith('/about')
  })

  it('Header snapshot', () => {
    /* We can use snapshots to compare the HTML output of the component with the previous one.  */
    expect(mountedHeader.html()).toMatchSnapshot()
  })
})
