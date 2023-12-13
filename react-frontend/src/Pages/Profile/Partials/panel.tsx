import React from "react"


export default function Panel({ children }: any) {

    return (<>
        <div className="p-6 border border-gray-200 rounded-xl">
            {children}
        </div>
    </>)
}
