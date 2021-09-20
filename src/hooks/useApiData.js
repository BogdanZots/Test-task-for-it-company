import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageCountAC } from "../redux/mainPageReducer";
import { setAllUsersAC } from "../redux/mainPageReducer";
import { baseUrl } from "../consts/consts";
import { setUsersToSortAC } from "../redux/mainPageReducer";

export const useApiData = () => {
  const dispatch = useDispatch();
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      try {
        setIsLoading(true);
        console.log('use aip data')
        const response = await fetch(baseUrl);
        const results = await response.json();
        if (response.status !== 200) {
          throw new Error("Error");
        }
        console.log('USE API DATA CALLED')
        dispatch(setUsersToSortAC(results.slice(0,20)))
        dispatch(setAllUsersAC(results));
        dispatch(setPageCountAC(results.length));
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getApiData();
  }, []);
  return {
    isLoading,
    isError,
  };
};
