import axios, { type AxiosResponse } from "axios";

async function login(email: string, password: string) {
  const runtimeConfig = useRuntimeConfig();
  const host = runtimeConfig.public.API_BASE_URL;
  try {
    const response: AxiosResponse = await axios(`${host}/auth/login`, {
      method: "POST",
      data: { email, password },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function requestOTP(email: string) {
  const runtimeConfig = useRuntimeConfig();
  const host = runtimeConfig.public.API_BASE_URL;

  try {
    const response: AxiosResponse = await axios(`${host}/auth/generate-otp`, {
      method: "POST",
      data: { email },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function verifyOTP(email: string, otp: string) {
  const runtimeConfig = useRuntimeConfig();
  const host = runtimeConfig.public.API_BASE_URL;
  try {
    const response: AxiosResponse = await axios(`${host}/auth/verify-otp`, {
      method: "POST",
      data: { email, otp },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export { login, requestOTP, verifyOTP };
