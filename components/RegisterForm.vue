<template>
  <div class="content">
    <h1>Create new account</h1>
    <div class="form-content">
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText v-model="name" placeholder="Name" />
        </InputGroup>
      </div>
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-envelope"></i>
          </InputGroupAddon>
          <InputText v-model="email" placeholder="Email" />
        </InputGroup>
      </div>
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="password"
            :feedback="false"
            toggleMask
            placeholder="Password"
          />
        </InputGroup>
      </div>
    </div>
    <div class="button-box">
      <Button
        class="button"
        label="Register"
        :disabled="isDisabled"
        @click="handleClickRegister"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { register } from "~/server/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const isLoading = ref(false);

const isDisabled = computed(
  () => !name.value || !email.value || !password.value
);

async function handleClickRegister() {
  if (name.value && email.value && password.value) {
    isLoading.value = true;

    const response = await register(name.value, email.value, password.value);

    isLoading.value = false;

    if (response?.status === 201) {
      console.log("Registration successful");
      navigateTo("/success");
    } else {
      console.error("Registration failed:", response?.statusText);
    }
  } else {
    console.error("Registration failed: Missing fields");
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
  align-items: flex-start;
  justify-content: flex-start;
  margin: 15px 0 10px 0;
}

.field {
  margin-bottom: 10px;
}
</style>
