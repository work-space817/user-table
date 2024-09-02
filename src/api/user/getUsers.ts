import axios from "axios";
import { IGetUsers } from "./types";

const API = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API}`);
    return response.data as IGetUsers[];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
