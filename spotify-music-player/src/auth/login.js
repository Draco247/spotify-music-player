import React from "react";
import { loginEndpoint } from "../spotify";
import { BsSpotify } from "react-icons/bs";

export default function Login() {
    console.log(loginEndpoint)
    return (
        <div className="bg-slate-950 min-h-screen flex justify-center items-center">
            <div className="bg-slate-50 rounded-md p-5 text-slate-950">
                <a href={loginEndpoint} className="flex items-center">
                    <BsSpotify className="mr-2 w-20 h-20 text-green-600 bg-slate-950 rounded-full border-4 border-slate-950" /> 
                    <p className="font-bold">LOGIN</p>
                </a>
            </div>
        </div>
    );
}
