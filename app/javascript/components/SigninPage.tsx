import React, { useState } from "react"
import PasswordInput from "./PasswordInput";


const SigninPage = () => {
  const [passwordVal, setPasswordVal] = useState('')

  const handlePasswordChange = (v: React.ChangeEvent<HTMLInputElement>) => setPasswordVal(v.target.value)

  return (
    <React.Fragment>
      <PasswordInput password={passwordVal} onChange={handlePasswordChange} />
    </React.Fragment>
  )
}

export default SigninPage;
