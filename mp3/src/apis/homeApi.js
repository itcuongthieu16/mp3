// Lay Api
import axios from "../axios";

// resolve: Ham khi thanh cong
// reject: Ham khi thay bai
export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/home",
        method: "get",
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
