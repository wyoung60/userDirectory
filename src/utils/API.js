//Import axios
import axios from "axios";

//Export a method named userData that calls to randomuser api.
export default {
  userData: function () {
    return axios.get("https://randomuser.me/api/?results=50");
  },
};
