import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../redux/authAction";
import { AppDispatch } from "../../redux/store";

export const useRefreshToken = () => {
    const dispatch = useDispatch<AppDispatch>();
    const date = useSelector((state: any) => state.auth.expiration);
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

    useEffect(() => {
        if (isAuthenticated) {
            const expDate = new Date(date * 1000);
            const currentTime = new Date(Date.now());
            let timeToRefresh = (expDate.getTime() - currentTime.getTime()) - 10000;

            if (timeToRefresh < 0) {
                timeToRefresh = 0;
            }

            const intervalID = setTimeout(() => {
                dispatch(refreshToken());

            }, timeToRefresh);

            return () => clearTimeout(intervalID);
        }
    }, [dispatch, date, isAuthenticated]);  //  will re-run if date changes too
};

