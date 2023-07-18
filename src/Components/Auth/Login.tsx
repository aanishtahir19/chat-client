//  similar to register page create a login page with email and password in react and tailwind with api call to login. login status is stored in parent useState and is being passed as prop
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({auth, setAuth}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginData = await fetch(`${process.env.REACT_APP_NAME}api/login`, {
                method: "POST",
                body: JSON.stringify({
                    Email:email,
                    Password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(loginData.ok){
                const loginDataJson = await loginData.json()
                setAuth(loginDataJson[0])
                navigate("/join")
            }else{
                throw new Error("Could not login")
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
                    Login
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
                <button
                    className="
                        bg-blue-500 text-white px-4 py-3 rounded-lg w-full
                        font-semibold text-lg mb-4
                    "
                    onClick={handleSubmit}
                >
                    Login
                </button>
                <div className="text-center">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-500">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default Login


