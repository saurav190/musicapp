import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

export const userLogin = (reqObj) => async (dispatch) => {
  try {
    const response = await axios.post("/api/users/login", reqObj);
    localStorage.setItem("usermusic", JSON.stringify(response.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    localStorage.removeItem("usermusic");
  } catch (error) {
    console.log(error);

    <Snackbar open={error} autoHideDuration={5000}>
      <MuiAlert elevation={6} variant="filled" severity="error">
        No user found!
      </MuiAlert>
    </Snackbar>;
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  try {
    const response = await axios.post("/api/users/register", reqObj);
  } catch (error) {
    console.log(error);
  }
};
