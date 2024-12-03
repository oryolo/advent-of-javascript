import React, { useState } from "react";
import ClosedEyeIcon from "../icons/ClosedEyeIcon";
import EyeIcon from "../icons/EyeIcon";
import LockIcon from "../icons/LockIcon";

interface Props {
  password: string;
  onChange: (v: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = (props: Props) => {
  const [hiddenPassword, updatePasswordState] = useState(true)

  const changeShowInput = () => updatePasswordState(!hiddenPassword)

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <span style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0

        }}>
          <div style={{display: 'flex'}}>
            <LockIcon color={hiddenPassword ?  '#040273' : '#26C9C3'}/>
            <div style={{ width: "1px", height: "24px", backgroundColor: "white", marginLeft: '5px'  }}></div>
          </div>
        </span>
      <input style={{
        width: "100%",
        padding: "10px 10px 10px 40px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: hiddenPassword ? '#26C9C3' : '#040273',
        color: !hiddenPassword && 'white',
      }}
        value={props.password} type={hiddenPassword ? 'password' : 'text'} name="password" id="password" onChange={props.onChange} />
      <button
        onClick={changeShowInput}
        style={{
          position: "absolute",
          right: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >{hiddenPassword ? <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "#040273",
      }}><EyeIcon /></span> :
        <span><ClosedEyeIcon /></span>
        }</button>
    </div>
  )
}

export default PasswordInput;
