import React, { useState } from 'react'
import LoginContext from './LoginContext.js'
function LoginContextProvider({children}) {
    const[userStatus, setUserStatus] = useState(false);
  return (
    <LoginContext.Provider value={{userStatus, setUserStatus}}>
    {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider