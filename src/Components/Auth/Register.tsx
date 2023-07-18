// create a simple register page with Email, Username and Password in React with api call to register the user and store auth state in parent component state and update it with prop actions

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Server from '../../constants'


const Register = ({auth, setAuth}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // set a post request to process.env.REACT_APP_NAME + api/register with email, username and password
            const registerData = await fetch(`${Server}api/register`, {
                method: "POST",
                body: JSON.stringify({
                    Email:email,
                    Password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(registerData.ok){
                navigate("/login")
            }else{
                throw new Error("Could not register")
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="
            flex flex-col justify-center items-center
            h-screen bg-gray-100
        ">
            <div className="
                bg-white w-96 rounded-lg shadow-xl
                flex flex-col justify-center items-center
                py-8 px-10
            ">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Register
                </h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="
                        w-full border border-gray-300 rounded-lg
                        px-3 py-2 mb-4
                    "

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="
                        w-full border border-gray-300 rounded-lg
                        px-3 py-2 mb-4
                    "

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit} className="
                    bg-blue-500 text-white py-2 px-4 rounded-lg
                    hover:bg-blue-600 transition-all
                ">
                    Register
                </button>
                <p className="mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:text-blue-600">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
