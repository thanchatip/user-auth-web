<template>
  <div class="content">
    <h1>Welcome {{ userStore.email }} !</h1>
    <div class="button-group">
      <Button
        class="button"
        label="Change Password"
        @click="handleChangePassword"
        rounded
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "../stores/data";
const userStore = useUserStore();

function handleChangePassword() {
  navigateTo("/change-password");
}
</script>

<style lang="scss" setup>
.content {
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 400px;
  width: 450px;
  background: #ffff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.icon {
  font-size: 100px;
  color: #4caf50;
}
</style>
