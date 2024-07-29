<template>
  <div class="content">
    <h1>Enter OTP</h1>
    <div class="form-content">
      <InputOtp
        v-model="otp"
        integerOnly
        :length="6"
        @update:modelValue="handleInputOTP"
      />
    </div>
    <div class="button-box">
      <Button class="button" severity="secondary" label="Resend Code" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { verifyOTP } from "../server/auth";
import { useUserStore } from "../stores/data/store";

const userStore = useUserStore();
const otp = ref();

async function handleInputOTP() {
  if (otp.value.length === 6) {
    console.log("otp", otp.value);
    await verifyOTP(userStore.email, otp.value);
  }
}
</script>

<style lang="scss" setup>
.content {
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 450px;
  background: #ffff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.button-box {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
}

.button {
  width: 100%;
}

.form-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 30px 0;
}

.field {
  margin-bottom: 10px;
}
</style>
