import { defineStore } from "pinia";
import actions from "./actions";
import { type UserState } from "./interfaces";

export const useUserStore = defineStore("auth", {
  state: (): UserState => {
    return {
      otp: "",
      email: "",
    };
  },
  actions,
});
