// import React, { FormEvent, useState } from "react";
// import Form from "./Form";
// import useQuery from "@/api/getPosts";
// import GridLayout from "@/Layouts/GridLayout";

// export default function Search() {
//     const [query, setQuery] = useState("");
//     const { data, isLoading } = useQuery(`/search?search=${query}`);

//     const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
//       ev.preventDefault();
//       // Do something with the data
//         // console.log(data)
//     };

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setQuery(event.target.value);
//     };

//     return (
//       <>
//         <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
//           <Form onSubmit={onSubmit}>
//             <input
//               type="text"
//               name="search"
//               placeholder="Find something"
//               value={query}
//               className="bg-transparent border-transparent placeholder-black font-semibold text-sm"
//               onChange={handleChange}
//             />
//           </Form>
//         </div>

//       </>

//     );
//   }



