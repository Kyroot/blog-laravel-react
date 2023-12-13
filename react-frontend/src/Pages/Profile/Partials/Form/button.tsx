import React from "react";


export default function Button({ buttonAttributes, children }: any) {

    return (<>
        <button {...buttonAttributes}>{children}</button>
    </>)
}
