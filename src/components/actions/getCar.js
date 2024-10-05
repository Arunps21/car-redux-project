import axios from "axios";
import { FAIL, SUCCESS } from "../constants/constantPage";

export const getCar = async (dispatch) => {
  try {
    let { data } = await axios.get("/cars.json");
    console.log(data.cars);
    dispatch({
      payload: SUCCESS,
      type: FAIL,
    });
  } catch (err) {
    dispatch({
      payload: SUCCESS,
      type: FAIL,
    });
  }
};
