import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageCountAC } from "../redux/mainPageReducer";
import { setAllUsersAC } from "../redux/mainPageReducer";
import { baseUrl } from "../consts/consts";

export const useApiData = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getApiData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(baseUrl);
        const results = await response.json();
        if (response.status !== 200) {
          throw new Error("Error");
        }
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
