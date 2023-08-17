import { describe, it, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '../AboutView.vue'

describe('Testing Router links in the Header', () => {
  const mountedHeader = mount(AboutView)

  it('it mounts properly', () => {
    expect(mountedHeader).toBeTruthy()
  })
})
