import axios from "../Api/axios.js";

const token = JSON.parse(localStorage.getItem("token"));

export const saveToArray = async () =>
  await axios.get("api/todos", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const loadTiles = async (func) => {
  await saveToArray().then((res) => func(res.data[0].todoListIds));
};

// export const loadTiles = async (value, func) => {
//   await saveToArray(value).then((res) => func(res.data[0].todoListIds));
// };