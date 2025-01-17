import { configureStore } from "@reduxjs/toolkit";
import products from "../store/ProductsSlice";
import users from "../store/UserSlice";
import category from "../store/CategorySlice";
import orders from "../store/OrderSlice";
import auth from "../store/AuthSlice";
export default configureStore({
  reducer: {
    products,
    users,
    category,
    orders,
    auth
  },
});

