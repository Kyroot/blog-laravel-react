import React, { useEffect, useState } from "react";
import Input from "./Form/input";

export default function Form() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("");

    const onSubmit = (ev:any) => {
        ev.preventDefault();
        if(category){
            window.location.search = "category=" + category +'&'+ "search=" + query
        }else{
            window.location.search = "?search=" + query
        }
    };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

          setQuery(event.target.value);
        };

        const props = {
            type:'text',
            name:"search",
            placeholder:"Search",
            onChange: handleChange,
            value: query,
            className:"bg-transparent border-transparent placeholder-black font-semibold text-sm py-1"
        }

            useEffect(()=>{
                const searchParams = new URLSearchParams(window.location.search)
                const getCategory = searchParams.get("category")
                const newCategoryQuery = getCategory
                setCategory(newCategoryQuery || "")
            },[])

    return (
        <>
         <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">

            <form method="GET" onSubmit={onSubmit}>
            <Input {...props}/>
            </form>
            </div>
        </>
    )
}
