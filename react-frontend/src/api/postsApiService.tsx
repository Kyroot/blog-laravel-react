// import axios from "axios";
// import { useEffect, useState } from "react";

// type DataTypes = {
//     current_page: number,
//     data: any[],
//     first_page_url: string,
//     last_page: string,
//     last_page_url: string,
//     links: [],
//     path: string,
// }

// type PostQueryResponse = {
//     data: DataTypes,
//     isLoading: boolean,
// }

// const useQuery = (query: string): PostQueryResponse => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [results, setResults] = useState<DataTypes>({
//         current_page: 0,
//         data: [],
//         first_page_url: "",
//         last_page: "",
//         last_page_url: "",
//         links: [],
//         path: "",
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsLoading(true);
//             try {
//                 const response = await axios.get(`${query}`);
//                 setResults(response.data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error(error);
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, [query]);

//     return { data: results, isLoading };
// };

// export default useQuery;
