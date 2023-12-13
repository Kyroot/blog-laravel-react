import { useDispatch } from "react-redux";
import { setToken } from "../../../../redux/postSlicer";

const useNewTabSession = () => {
    const dispatch = useDispatch()
    const sessionStorageToken = sessionStorage.length


    if (!sessionStorageToken) {
        localStorage.setItem('getSessionStorage', String(Date.now()));
    }

    window.addEventListener('storage', (event) => {

        if (event.key === "getSessionStorage") {
            // Some tab asked for the sessionStorage -> send it
            localStorage.setItem("sessionStorage", JSON.stringify(sessionStorage))
            localStorage.removeItem("sessionStorage")
        }else if (event.key === "sessionStorage" && !sessionStorageToken) {
            if (event.newValue) {
                const data = JSON.parse(event.newValue)
                for (let key in data) {
                    sessionStorage.setItem(key, data[key])
                    if(key === 'api_token'){
                        dispatch(setToken(data[key]))
                    }
                }
            }
        }
    })

}


export default useNewTabSession