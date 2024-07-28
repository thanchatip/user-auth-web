<template>
  <div class="content">
    <h1>Change Password</h1>
    <div class="form-content">
      <div class="field">
        <InputGroup>
          <InputGroupAddon>
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <InputText placeholder="Old Password" />
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
            v-model="value"
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
        icon="pi pi-user-plus"
        label="Register"
        @click="handleClickRegister"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const value = ref();

function handleClickRegister() {}
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
