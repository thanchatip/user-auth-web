import { requestOTP } from "~/server/auth";
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

export default { getOTP };
