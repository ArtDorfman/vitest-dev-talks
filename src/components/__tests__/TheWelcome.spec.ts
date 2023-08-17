import { describe, expect, it, vi } from "vitest"
import { mount } from "@vue/test-utils"
import TheWelcome from "../TheWelcome.vue"

describe("TheWelcome", () => {
  it('Mounts properly', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toContain("Documentation")

    const svg = wrapper.find("svg")
    expect(svg).toBeTruthy()

    const a = wrapper.find("a")
    const spyOnA = vi.spyOn(a, "trigger")

    a.trigger("click")
    expect(spyOnA).toHaveBeenCalledOnce()
  })
})
