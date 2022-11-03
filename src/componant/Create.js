import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate , Link} from "react-router-dom"

function Create() {
  const navigate = useNavigate();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  // const [email, setEmail] = useState();
  // const [passowrd, setPassowrd] = useState();
  let url = "https://6362424d66f75177ea2a99c0.mockapi.io/toDo"

  const postData = () => {
    axios.post(url, {
      fName,
      lName,
      // email,
      // passowrd
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem("fName" ,res.data.fName)
      localStorage.setItem("lName" ,res.data.lName)
      localStorage.setItem("id" ,res.data.id)
      navigate("/Read")

    })

  }


  return (
    <div>
      <input placeholder='FirstName' onChange={e => { setFName(e.target.value) }}></input>
      <input placeholder='LasttName' onChange={e => { setLName(e.target.value) }}></input>
      {/* <input placeholder='Email' onChange={e => { setEmail(e.target.value) }}></input>
      <input placeholder='Password' onChange={e => { setPassowrd(e.target.value) }}></input> */}
      <Link to ='Updata'><button onClick={postData}>Log In</button></Link>
    </div>
  )
}

export default Create





