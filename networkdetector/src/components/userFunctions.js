import axios from "axios";

export const Login = user =>{
    // console.log(user)
    
    return axios
    .post("/api/users/login",{
        email:user.email,
        password:user.password
    })
    .then(res =>{
        return res.data
    })
    .catch(err=>{
       return err.response.data
    })
}

export const Logout = () =>{
    return axios
        .get("/api/users/logout")
        .then(res=>{
            return res.data
        })
        .catch(err=>{
            return err
        })
}