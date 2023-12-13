import React from "react";

export default function Label({labelProps, children}:any){
    const {className, htmlFor} = labelProps;
    return (<>
        <label className={className} htmlFor={htmlFor}>{children}</label>
    </>)
}
