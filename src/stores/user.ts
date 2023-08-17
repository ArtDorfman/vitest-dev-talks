import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface IUserData {
  email: string
  name: string
}

export const useUserStore = defineStore('user', () => {
  const userData = reactive({
    email: '',
    name:''
  })

  function insertData(userInput: IUserData) {
    const { email, name } = userInput
    
    userData.email = email
    userData.name = name
  }

  return { userData, insertData }
})
