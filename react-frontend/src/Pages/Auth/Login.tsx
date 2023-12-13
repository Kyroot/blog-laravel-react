import React, { useRef, useState } from "react";
import Label from "../Profile/Partials/Form/label";
import Field from "../Profile/Partials/field";
import Input from "../Profile/Partials/Form/input";
import HeaderAndFooter from "../../Components/HeaderAndFooter";
import Panel from "../Profile/Partials/panel";
import Button from "../Profile/Partials/Form/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setRole } from "../../redux/postSlicer";


const Login = () => {

    const passRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    interface RegisterResponse{

        user:{
            username:string
            role:string
        }
        authorization:{
            token: string
            type:string
        }
    }

    const handleFormResponse = async (formData: FormData) => {

        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            }
        })

        try{

            

           if (response.ok) {
                const jsonResponse = await response.json() as RegisterResponse;
                const jsonToken = jsonResponse.authorization.token
                const role = jsonResponse.user.role
                sessionStorage.setItem('api_token', jsonToken);
                dispatch(setToken(jsonToken))
                dispatch(setRole(role))
                navigate('/')
                
            }else{
                if(response.status === 401){
                    const errResponse = await response.json();
                    const errorMessage = errResponse.message
                    setError(errorMessage);
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();

        if (usernameRef.current) {
            formData.append('username', (usernameRef.current as HTMLInputElement).value);
        }
        if (passRef.current) {
            formData.append('password', (passRef.current as HTMLInputElement).value);
        }
        handleFormResponse(formData);

    }

    const labelPropsArray = [
        {
            className: "block mb-2 uppercase font-bold text-xs text-gray-700",
            text: "Username",
            htmlFor: "username"
        },
        {
            className: "block mb-2 uppercase font-bold text-xs text-gray-700",
            text: "Password",
            htmlFor: "password"
        },
    ]

    const inputPropsArray = [
        {
            className: "border border-gray-200 p-2 rounded w-full",
            id: "username",
            name: "username",
            ref: usernameRef,
            required: true
        },
        {
            className: "border border-gray-200 p-2 rounded w-full",
            id: "password",
            name: "password",
            ref: passRef,
            required: true
        },
    ]

    const buttonAttributes = {
        value: 'save',
        type: "submit",
        className: "bg-blue-500 text-white px-5 py-1 rounded-xl font-semibold text-sm hover:bg-blue-600"
    };

    return (<>
        <HeaderAndFooter>
            <section className="px-6 py-8">
                <main className="max-w-lg mx-auto mt-10">
                    <Panel>
                        <h1 className="text-center font-bold text-xl mb-10">Login</h1>
                        <form id="form" onSubmit={handleFormSubmission}>
                            {labelPropsArray.map((label, index) => (
                                <React.Fragment key={`label-${index}`}>
                                    <Field>
                                        <Label labelProps={label}>{label.text}</Label>
                                        <Input key={`input-${index}`} {...inputPropsArray[index]}></Input>
                                    </ Field>
                                </React.Fragment>
                            ))}
                            <div className="error-message text-red-600 mt-3">{error}</div>
                            <Field>
                                <Button buttonAttributes={buttonAttributes}>Submit</Button>
                            </Field>
                        </form>
                    </Panel>
                </main>
            </section>
        </HeaderAndFooter>
    </>)

}

export default Login;