import React, { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../api/axios";
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import { useLoginMutation } from '../store/authApiSlice';

const initialstage = {
    password: "",
    email: "",
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login,isLoading] = useLoginMutation()
    const [user, setUser] = useState(
        useMemo(() => (initialstage), [])
    );

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }, [user]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { password, email } = user;
    //     if (password.length > 5 && email) {
    //          axios.post('/login', user)
    //                 .then(response => {
    //                     console.log('Login successful:', response.data);
    //                 })
    //                 .catch(error => {
    //                     console.error('Login failed:', error);
    //                 });
    //             console.log(user)
    //             setUser(initialstage)
    //     } else { console.log("all fields are required and password must be atleast 6 car") }
    //     // axios.post("/register",)
    // };
    const handleSubmit = async(e) => {
        e.preventDefault();
        const { password, email } = user;
        if (password.length > 5 && email) {
             try {
                const userData = await login({email,password}).unwrap()
                console.log(userData)
                dispatch(setCredentials({...userData,user}))
                setUser(initialstage)
                //navigate("/login/profile")
             } catch (error) {
                console.log("error in setting credentials")
                throw new Error(error)
             }
        } else { console.log("all fields are required and password must be atleast 6 car") }
        // axios.post("/register",)
    };
    const containt = <form onSubmit={handleSubmit} className='flex h-5/6 flex-col p-3 gap-4 bg-indigo-100 w-[90%] rounded-md m-auto justify-center items-center '>
    <h3 className='font-serif font-bold text-lg '>Sign In</h3>
        <div className='flex  flex-col gap-4  w-full'>
        <div className='flex justify-between  w-full'>
            <label htmlFor='email'>Email</label>
            <input
                onChange={handleChange}
                name='email' value={user.email}
                type='email'
                className='outline-none border border-solid border-stone-600'
                
            />
        </div>
        <div className='flex justify-between w-full'>
            <label htmlFor='password'>Password</label>
            <input
                onChange={handleChange}
                name='password' value={user.password}
                type='password'
                className='outline-none border border-solid border-stone-600'
                autoComplete="off"
            />
        </div>
        
        <button className='bg-red-400 border-none overflow-hidden rounded-lg '>login</button>
        </div>
    <span className='font-serif font-bold text-lg '>click here for <Link to="/register" ><span className='text-blue-500'>Register</span></Link> </span>
    </form>
  return (
    <div className='max-w-lg  h-full m-auto flex justify-center items-center '>
        
        {containt}
            {/* {isLoading ? <p className='font-bold text-xl '> Loading</p>: containt} */}
            
        </div>
  )
}

export default Login;