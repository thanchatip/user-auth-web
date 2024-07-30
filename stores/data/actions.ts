import { login, requestOTP } from "~/server/auth";
import { useUserStore } from "./store";

async function getOTP(email: string) {
  const userStore = useUserStore();
  const response = await requestOTP(email);

  if (response?.status === 201) {
    userStore.otp = response.data.otp;
    userStore.email = email;
    console.log(userStore.otp);
  } else {
    throw new Error("Failed to generate OTP");
  }
}

async function userLogin(email: string, password: string) {
  const userStore = useUserStore();
  const response = await login(email, password);

  if (response?.status === 201) {
    userStore.email = email;
    return response;
  } else {
    throw new Error("Failed to login");
  }
}

export default { getOTP, userLogin };
