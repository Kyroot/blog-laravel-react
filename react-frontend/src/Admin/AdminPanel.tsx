import React from "react";
import HeaderAndFooter from "../Components/HeaderAndFooter";
import { useGetPostsQuery } from "../redux/postAPIservice";
import Button from "../Pages/Profile/Partials/Form/button";
import Field from "../Pages/Profile/Partials/field";
import InputField from "../Pages/Profile/Partials/Form/input";
import Label from "../Pages/Profile/Partials/Form/label";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {

    const navigate = useNavigate();

    const userRole = useSelector((store:RootState)=>store.auth.role)

    const buttonAttributes = [
        {
        value: 'save',
        type: "submit",
        className: "bg-blue-500 text-white px-5 py-1 w-24 rounded-xl font-semibold text-sm hover:bg-blue-600"
        }
    ]
    const labelProps = [
        {
        className: "block mb-2 uppercase font-bold text-xs text-gray-700",
        htmlFor: 'title'
        }
    ]
    // if(userRole == 'admin'){
    return (<>
        <HeaderAndFooter >
            <div className="flex w-3/5 justify-center m-auto border flex-col">
                <div>Admin Panel</div>
                <form action="POST">
                    <Label labelProps={labelProps}>Title</Label>
                    <InputField></InputField>
                    <Field>
                        <Button buttonAttributes={buttonAttributes[0]}>Save</Button>
                    </Field>
                </form>
            </div>
        </HeaderAndFooter>
    </>)
    // }
    // else{
    //     return(<>
    //     {navigate('/')}
    //     </>)
    // }
}