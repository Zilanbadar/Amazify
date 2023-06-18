import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'

const useForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
      email: "", password: ""
    });
    const [statusMsg, setStatusMsg] = useState("");


    let name,value;

    const handleInputs = (e) => {
        console.log(user);
        name = e.target.name ;
        value = e.target.value;

        setUser({ ...user, [name]:value});
    }

    const loginUser = async(e)=>{
        e.preventDefault();
    
        const {email, password} = user;

        if(!email || !password ) {
          setStatusMsg("All fields are required!");
        }else { 
        axios.post("https://demedious-job-finder.herokuapp.com/api/v1/users/signin",{
          email,
          password
        })
        .then(data =>{
          const {accessToken, refreshToken} = data.data;

          Cookies.set("accessToken", accessToken);
          Cookies.set("refreshToken", refreshToken);


        if(data.status === 400 || data.status === 401){
          setStatusMsg("invalid email or password")
        }else if(data.status === 404){
          setStatusMsg("user not found!")
        }else if(data.status === 200 && Cookies.get("accessToken")){
          setStatusMsg("Login Successfully")          
          setTimeout(()=>{
            navigate("/");
          },1000)
        }
        console.log(data)
        })

      }
    }

    return {handleInputs, loginUser, statusMsg}

}

export default useForm;