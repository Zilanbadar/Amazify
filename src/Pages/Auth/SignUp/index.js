import React, { useState } from 'react'
import {
  Main,
  FormCont,
  FormHead,
  AuthIconsCont,
  IconsCont,
  Head6,
  InputsCont,
  Inputs,
  FormSubmit,
  SwitchP
} from './SignUpElements'
import {ImGooglePlus} from 'react-icons/im'
import {RiLinkedinFill} from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState()

  const handleUserData = (e) => {
    let Name = e.target.name;
    let Value = e.target.value;

    setUserData({...userData,[Name]:Value})


  }

  const HandleUser = async() =>{
    axios.post("http://localhost:8080/api/v1/users/signup",{
      username :userData.username,
      email : userData.email,
      password : userData.password

    })
    .then((res)=>{
      if(res.status === 200){
        console.log("registered successfully")
        navigate('/signin')
      }else{
        console.log(res)
      }
    })
  }

  return (
    <Main>
      <FormCont>
        <FormHead>
        Register for Amazify
        </FormHead>
        <AuthIconsCont>
          <IconsCont>
            <ImGooglePlus/>
          </IconsCont>
          <IconsCont>
            <RiLinkedinFill/>
          </IconsCont>
          <IconsCont>
            <FaFacebookF/>
          </IconsCont>

        </AuthIconsCont>
          <Head6>
            Or use your email for registration
          </Head6>
        <InputsCont>
          <Inputs type="text" name='username' placeholder='username' onChange={handleUserData} autoFocus></Inputs>
          <Inputs type="email" name='email' placeholder='email' onChange={handleUserData}></Inputs>
          <Inputs type="Password" name='password' placeholder='password' onChange={handleUserData}></Inputs>
          <Inputs type="Password" name='confirm password' placeholder='confirm password'></Inputs>
        </InputsCont>
        <>
          <FormSubmit onClick={HandleUser}>Sign Up</FormSubmit>
          <Head6>
            Already having an account? 
            <SwitchP to="/SignIn"> Log in</SwitchP>
          </Head6>
        </>

      </FormCont>
    </Main>
  )
}

export default SignUp;