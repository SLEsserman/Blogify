import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const Context = createContext({
  user: null,
})

const AuthContext = ({ children }) => {
  const [state, setState] = useState({ user: null })
  useEffect(() => {
    const getUser = async () => {
      try {
        axios.get("http://localhost:3000/profile").then((res) => {
          console.log("res", res)
        })
      } catch (err) {}
    }
    getUser()
  }, [])

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default AuthContext
