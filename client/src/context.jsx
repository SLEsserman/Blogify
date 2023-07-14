import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const Context = createContext({
  user: null,
})

axios.defaults.withCredentials = true

const AuthContext = ({ children }) => {
  const [state, setState] = useState({ user: null })
  useEffect(() => {
    const getUser = async () => {
      try {
        fetch("http://localhost:3000/profile", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((resObj) => {
            setState({ user: resObj.user })
          })
      } catch (err) {
        console.log("err", err)
      }
    }
    getUser()
  }, [])

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export default AuthContext
