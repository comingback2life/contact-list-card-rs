import axios from "axios";
const APIEndPoint = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsersFromApi = () => {
  try{
    const result = await axios.get(APIEndPoint)
    console.log(result);
  }catch(error){
    console.log(error);
  }
};
