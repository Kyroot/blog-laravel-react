import React from "react";
import Page from "./Page";

export default function Pagination({ props }: any) {

    return (
        <>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700 leading-5">
                        {`Showing ${props.from} to ${props.to} of ${props.total} results`}
                    </p>
                </div>
                <div>
                    {props.links.map((link: any, index: any) => (
                         <Page key={index} props={link} />
                    ))}
                </div>
            </div>
        </>
    )
}
