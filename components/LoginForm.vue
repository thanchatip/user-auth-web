<template>
  <div class="content">
    <h1>Log in to your account</h1>
    <div class="form-content">
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-envelope"></i>
          </InputGroupAddon>
          <InputText placeholder="Email" />
        </InputGroup>
      </div>
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="value"
            :feedback="false"
            toggleMask
            placeholder="Password"
          />
        </InputGroup>
      </div>
    </div>
    <div class="forgot-choice">
      <span class="forgot-text" @click="handleClickForgotPassword">
        Forgot Password ?
      </span>
    </div>
    <div class="button-group">
      <Button class="button" icon="pi pi-sign-in" label="Log-in" rounded />
    </div>
    <Divider align="center"> or </Divider>
    <div class="register-choice">
      Not a member yet ?
      <span class="register-text" @click="handleClickRegister">
        Register now
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const value = ref();

function handleClickRegister() {
  navigateTo("/register");
}

function handleClickForgotPassword() {
  navigateTo("/forgot-password");
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

.register-text,
.forgot-text {
  color: var(--p-primary-color);
  cursor: pointer;
  text-decoration: underline;
}

.forgot-choice {
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
}
</style>
