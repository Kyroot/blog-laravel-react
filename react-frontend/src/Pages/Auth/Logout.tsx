import React, { useEffect } from "react";
import { useLogoutMutation } from "../../redux/postAPIservice";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const [logout, { data, error, isLoading }] = useLogoutMutation();
    useEffect(()=>{
        navigate('/');
    });
    
    if (isLoading) {
        return (<>
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        </>)
    }
    sessionStorage.removeItem('api_token');

    

    return null;
}