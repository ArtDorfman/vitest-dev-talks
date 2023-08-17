import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useCounterStore } from '../counter'

describe('The counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('The counter', () => { // we can use test() instead of it()
    let i = 0
    const counter = useCounterStore()
    
    // Increment counter by 4
    for (let i = 0; i < 4; i++) {
      counter.increment()
    }

    expect(counter.count).toBe(4)
    expect(counter.doubleCount).toBe(8)
  })
})
