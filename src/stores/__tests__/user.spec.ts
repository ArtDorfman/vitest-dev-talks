import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { useUserStore } from '../user'

describe('The user store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('has the user values', () => {
    const email = ref('a.dorfman@softonix.org')
    const name = ref('Artur Dorfman')
    
    const userStore = useUserStore()

    userStore.insertData({
      email: email.value,
      name: name.value
    })
    
    expect(userStore.userData.email).toBe('a.dorfman@softonix.org')
    expect(userStore.userData.name).toBe('Artur Dorfman')
  })
})
