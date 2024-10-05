import { FAIL, SUCCESS } from "../constants/constantPage";

export const carReducer = (state = { carList: [] }, action) => {
    switch (action.type) {
      case SUCCESS:
        return {
          carList: action.payload,
        };
      case FAIL:
        return {
          carList: action.payload,
        };
      default:
        return state;
    }
  };
  