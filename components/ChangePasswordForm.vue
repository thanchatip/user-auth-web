<template>
  <div class="content">
    <h1>Change Password</h1>
    <div class="form-content">
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="oldPassword"
            :feedback="false"
            toggleMask
            placeholder="Old Password"
          />
        </InputGroup>
      </div>
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="newPassword"
            :feedback="false"
            toggleMask
            placeholder="New Password"
          />
        </InputGroup>
      </div>
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="confirmPassword"
            :feedback="false"
            toggleMask
            placeholder="Confirm New Password"
          />
        </InputGroup>
      </div>
    </div>
    <div class="button-group">
      <Button
        class="button"
        label="Change Password"
        :disabled="isDisabled"
        @click="handleClickChangePassword"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { changePassword } from "~/server/auth";
import { useUserStore } from "../stores/data";
const userStore = useUserStore();

const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const isDisabled = computed(
  () =>
    oldPassword.value === "" ||
    newPassword.value === "" ||
    confirmPassword.value === "" ||
    newPassword.value !== confirmPassword.value
);

async function handleClickChangePassword() {
  const response = await changePassword(
    userStore.email,
    oldPassword.value,
    newPassword.value
  );
  if (response?.status === 201) {
    navigateTo("/success");
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
