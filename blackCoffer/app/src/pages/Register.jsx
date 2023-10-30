import React, { useCallback, useMemo, useState } from 'react';
import {useNavigate,Link} from "react-router-dom"
import axios from "../api/axios";
const initialstage = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    con_password: ""
};
const Register = () => {
    const [user, setUser] = useState(
        useMemo(() => (initialstage), [])
    );
    const navigate = useNavigate()
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, password, email, con_password } = user;
        if (first_name && last_name && password.length > 5 && email && con_password) {
            if (password === con_password) {
                axios.post('/register', user)
                    .then(response => {
                        console.log('Registration successful:', response.data);
                    })
                    .catch(error => {
                        console.error('Registration failed:', error);
                    });
                console.log(user)
                setUser(initialstage)

            } else { console.log("no password match") }
        } else { console.log("all fields are required and password must be atleast 6 car") }
        // axios.post("/register",)
    };
    return (
        <div className='max-w-lg  h-full m-auto flex justify-center items-center '>
            <form onSubmit={handleSubmit} className='flex h-5/6 flex-col p-3 gap-4 bg-indigo-100 w-[90%] rounded-md m-auto justify-center items-center  '>
            <h2 className='font-serif font-bold text-lg '> Registration form</h2>
            <div className='flex  flex-col gap-4  w-full'>
                <div className='flex justify-between w-full'>
                    <label htmlFor='first_name'>First Name</label>
                    <input
                        onChange={handleChange}
                        name='first_name' value={user.first_name}
                        type='text'
                        className='outline-none border border-solid border-stone-600'
                        autoComplete="off"
                    />
                </div>
                <div className='flex justify-between w-full'>
                    <label htmlFor='last_name'>Last Name</label>
                    <input
                        onChange={handleChange}
                        name='last_name' value={user.last_name}
                        type='text'
                        className='outline-none border border-solid border-stone-600'
                        autoComplete="off"
                    />
                </div>
                <div className='flex justify-between w-full'>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        name='email' value={user.email}
                        type='email'
                        className='outline-none border border-solid border-stone-600'
                        autoComplete="off"
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
                <div className='flex justify-between w-full'>
                    <label htmlFor='con_password'>Confirm Password</label>
                    <input
                        onChange={handleChange}
                        name='con_password' value={user.con_password}
                        type='password'
                        className='outline-none border border-solid border-stone-600'
                        autoComplete="off"
                    />
                </div>
                <button className='bg-red-400 border-none overflow-hidden rounded-lg '>register</button>
                </div>
            <span className='font-serif font-bold text-lg '>click here for <Link to="/login"><span className='text-blue-500'>login</span></Link> </span>
            </form>
        </div>
    )
}

export default Register