import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
var valid= true;
export const accountSlice = createSlice({
  name: "acc",
  initialState: {
    account: JSON.parse(localStorage.getItem("account")) || [],
    value: "",
  },
  reducers: {
    addAcc: (state, action) => {

        if (valid) {
          state.account = [...state.account, action.payload];
          localStorage.setItem("account", JSON.stringify(state.account));
        }
      
    },

    checkData: (state, action) => {
      state.account.forEach((acc) => {
        var BreakException = {};
        if (acc.email === action.payload.email) {
          valid = false;
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email Sudah Terdaftar",
          });
          throw BreakException;
        } else {
          valid = true;
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registrasi Berhasil",
          });
        }
      });
    },

    loginAcc: (state, action) => {
      state.account.forEach((acc) => {
        var BreakException = {};
        if (
          acc.email === action.payload.email &&
          acc.password === action.payload.password
        ) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Anda Berhasil Login",
          });
          throw BreakException;
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Username atau Password Salah",
          });
        }
      });
      localStorage.setItem("account", JSON.stringify(state.account));
    },
  },
});

export const { addAcc, loginAcc, checkData } = accountSlice.actions;
export default accountSlice.reducer;
