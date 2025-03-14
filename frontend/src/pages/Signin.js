import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import SignupButton from "../SignupPage/SignupButton";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Signin = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        email: "",
        password: "",
    });
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }
        catch (error) {
            alert("Error while signing in");
        }
    }
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("div", { className: "h-screen w-screen bg-black text-white flex justify-center items-center px-6", children: _jsxs("div", { className: "w-full max-w-md border border-white p-6 rounded-md", children: [_jsx("h2", { className: "text-3xl font-semibold text-center mb-2", children: "Login to your account" }), _jsxs("div", { className: "text-lg text-center pb-4", children: [_jsx("span", { className: "text-gray-400", children: "New here? " }), _jsx(Link, { to: "/signup", className: "text-blue-400", children: "Sign up" })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(InputBox, { type: "text", heading: "Email-Id", placeholder: "Enter your email-id", onChange: (e) => setPostInputs((c) => ({
                                        ...c,
                                        email: e.target.value,
                                    })) }), _jsx(InputBox, { type: "password", heading: "Password", placeholder: "Enter password", onChange: (e) => setPostInputs((c) => ({
                                        ...c,
                                        password: e.target.value,
                                    })) })] }), _jsx("div", { className: "mt-6 flex justify-center", children: _jsx(SignupButton, { onClick: sendRequest, text: "SIGN IN" }) })] }) })] }));
};
export default Signin;
