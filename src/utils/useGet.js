import { useState, useEffect } from "react";
import {STRAPI} from '../api/api'
const useGet = ({ url, initialState = [] }) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [isFetching, setFeching] = useState(true);
  useEffect(() => {
    const get = async () => {
      try {
        const { data } = await STRAPI.get(`${url}`);
        setData(data);
        setFeching(false);
      } catch (e) {
        setFeching(false);
        setError(true);
      }
    };
    get();
  }, [url]);
  return [data, isFetching, error, setData];
};
export default useGet;