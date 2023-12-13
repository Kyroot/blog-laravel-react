import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../../../redux/postSlicer";

const AppInitializer = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        
        const token = sessionStorage.getItem('api_token')

        if(token){
            dispatch(setToken(token));
        }

    },[dispatch])
    return null;
}

export default AppInitializer;