<template>
  <div class="content">
    <h1>Forgot your password</h1>
    <div class="instruction-text">
      Enter your email address and we will send you an OTP to reset your
      password.
    </div>
    <div class="form-content">
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-envelope"></i>
          </InputGroupAddon>
          <InputText v-model="email" placeholder="Email" />
        </InputGroup>
      </div>
    </div>
    <div class="button-group">
      <Button
        class="button"
        label="Reset Password"
        :loading="isLoading"
        :disabled="!email"
        @click="handleResetPassword"
        rounded
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "../stores/data/store";

const userStore = useUserStore();

const email = ref();
const isLoading = ref(false);

async function handleResetPassword() {
  isLoading.value = true;
  await userStore.getOTP(email.value);
  navigateTo("/otp");
  isLoading.value = false;
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

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.button {
  width: 100%;
}

.form-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 15px 0 10px 0;
}

.field {
  width: 100%;
  margin-bottom: 10px;
}

.instruction-text {
  color: #222;
  margin-bottom: 10px;
}
</style>
