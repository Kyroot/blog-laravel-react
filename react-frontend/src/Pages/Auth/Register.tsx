import React, { useRef, useState } from "react";
import Field from "../Profile/Partials/field";
import Label from "../Profile/Partials/Form/label";
import Input from "../Profile/Partials/Form/input";
import HeaderAndFooter from "../../Components/HeaderAndFooter";
import Panel from "../Profile/Partials/panel";
import Button from "../Profile/Partials/Form/button";
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {

    const nameRef = useRef<HTMLInputElement | null>(null)
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passRef = useRef<HTMLInputElement | null>(null)
    let [error, setError] = useState('');
    const navigate = useNavigate();

    interface RegisterResponse {
        message: string; 
    }

    const handleFormResponse = async (formData: FormData) => {

        const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json',
            },
        })

        try {

            if (response.ok) {

                const jsonResponse = await response.json() as RegisterResponse;
                navigate('/');

            } else {

                if (response.status === 422) {

                    response.json().then((data) => {
                        const { errors, message } = data;

                        console.log(errors, message);
                    })
                }
            }

            if(response.status === 400){
                const errResponse = await response.json();
                setError(errResponse.message);
            }

        } catch (error) {

            console.log(error);
        
        }
    }

    const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const formData = new FormData();

        if (nameRef.current) {
            formData.append('name', (nameRef.current as HTMLInputElement).value);
        }

        if (usernameRef.current) {
            formData.append('username', (usernameRef.current as HTMLInputElement).value);
        }

        if (emailRef.current) {
            formData.append('email', (emailRef.current as HTMLInputElement).value);
        }

        if (passRef.current) {
            formData.append('password', (passRef.current as HTMLInputElement).value);
        }

        handleFormResponse(formData);
    }

    const labelPropsArray = [
        {
            className: "block mb-2 uppercase font-bold text-xs text-gray-700",
            text: "Name",
            htmlFor: "name"
        },
        {
            className: "block mb-2 uppercase font-bold text-xs text-gray-700",
            text: "USERNAME",
            htmlFor: "username"
        },
        {
            className: "block mb-2 uppercase font-bold text-xs text-gray-700",
            text: "EMAIl",
            htmlFor: "email"
        },
        {
            className: "block mb-2 uppercase font-bold text-xs text-gray-700",
            text: "PASSWORD",
            htmlFor: "password"
        },
    ]

    const inputPropsArray = [
        {
            className: "border border-gray-200 p-2 rounded w-full",
            id: "name",
            name: "name",
            ref: nameRef,
            required: true
        },
        {
            className: "border border-gray-200 p-2 rounded w-full",
            id: "username",
            name: "username",
            ref: usernameRef,
            required: true
        },
        {
            className: "border border-gray-200 p-2 rounded w-full",
            id: "email",
            name: "email",
            type: 'email',
            ref: emailRef,
            required: true
        },
        {
            className: "border border-gray-200 p-2 rounded w-full",
            id: "password",
            name: "password",
            type: 'password',
            ref: passRef,
            required: true
        }
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
                        <h1 className="text-center font-bold text-xl mb-10">Register!</h1>
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
