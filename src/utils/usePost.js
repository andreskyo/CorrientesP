import { useState } from "react";
import {OAUTH} from "../api/api";

const usePost = () => {
  const [postData, updateData] = useState({
    pending: false,
    data: null,
    error: null,
    isSuccessfull: false,
  });
  const post = async (url, { datajson }) => {
    updateData({
      pending: true,
      data: null,
      error: null,
      isSuccessfull: false,
    });
    console.log(datajson);
    await OAUTH.post(`${url}`, datajson)
      .then((res) => {
        console.log("post: " + res.status);
        updateData({
          pending: false,
          data: res.data,
          error: null,
          isSuccessfull: true,
          status:res.status
        });
      })
      .catch((error) => {
        console.log(error.message);
        updateData({
          data: null,
          pending: false,
          error: error.message,
          isSuccessfull: false,
					status:500
        });
      });
  };
  return { ...postData, post };
};
export default usePost;