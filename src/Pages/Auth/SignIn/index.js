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
} from './SignInElements'
import { ImGooglePlus } from 'react-icons/im'
import { RiLinkedinFill } from 'react-icons/ri'
import { FaFacebookF } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

const SignIn = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState()
  const [errorMsg, setErrorMsg] = useState("")
  

  const handleUserData = (e) => {
    let Name = e.target.name;
    let Value = e.target.value;

    setUserData({ ...userData, [Name]: Value })


  }


  const HandleSignin = async () => {
    axios.post("http://localhost:8080/api/v1/users/signin", userData)
      .then((res) => {
        if (res.status === 200) {
          setErrorMsg("logged in successfully")
          console.log(res)
          Cookies.set("accessToken", res.data.accessToken )
          Cookies.set("uId", res.data.uId )
          setTimeout(()=>{
          navigate('/')

          },5000)
        } else {
          setErrorMsg(res.message)
        }
      })
  }

  return (
    <Main>
      <FormCont>
        <FormHead>
          Log in to Amazify
        </FormHead>
        <AuthIconsCont>
          <IconsCont>
            <ImGooglePlus />
          </IconsCont>
          <IconsCont>
            <RiLinkedinFill />
          </IconsCont>
          <IconsCont>
            <FaFacebookF />
          </IconsCont>

        </AuthIconsCont>
        <Head6>
          Or use your email for registration
        </Head6>
        <InputsCont>
          <Inputs type="email" name='email' placeholder='email' onChange={handleUserData}></Inputs>
          <Inputs type="Password" name='password' placeholder='password' onChange={handleUserData}></Inputs>
        </InputsCont>
        <h4 style={{color : "green"}}>{errorMsg}</h4>
        <>
          <FormSubmit onClick={HandleSignin}>Sign In</FormSubmit>
          <Head6>
            Don't have an account?
            <SwitchP to="/SignUp"> Sign up</SwitchP>
          </Head6>
        </>

      </FormCont>
    </Main>
  )
}

export default SignIn;