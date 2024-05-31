<template>
  <div class="sign-in-page">
    <div class="left-side">
      <div class="image-wrapper">
        <v-img src="@/assets/leftcontent.png" alt="my image" class="left-content background-image"></v-img>
        <v-img src="@/assets/whatsapp.png" alt="image" class="whatsapp-image"></v-img>
        <div class="content">
          <h1>IPET</h1>
          <p>A one stop shop for all things pet</p>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="sign-in-form">
        <h1>Sign In</h1>
        <p>With your admin credentials</p>
        <v-form @submit.prevent="signIn">
          <div class="text-subtitle-1">User Id</div>
          <v-text-field v-model="userId" label="User ID" append-inner-icon="mdi-email" required></v-text-field>
          <div class="text-subtitle-1">Organization Id</div>
          <v-text-field v-model="orgId" label="Company Id" append-inner-icon="mdi-email" required></v-text-field>
          <div class="text-subtitle-1">Password</div>
          <v-text-field
      v-model="password"
      :append-inner-icon="showPassword ? 'mdi-lock' : 'mdi-lock-off'"
      :type="showPassword ? 'text' : 'password'"
      hint="At least 8 characters"
      label="Password"
      name="password"
      counter
      @click:append="showPassword = !showPassword"
    ></v-text-field>
          <div class="forgot-password">
            <a href="#">Forget Password?</a>
          </div>
          <v-btn type="submit" class="dark-red-button vbtn" height="56px" width="100%">Sign In</v-btn>
        </v-form>
        <div class="sign-up-link">
          <span>Don't have an account? </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      userId: '',
      orgId: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
    signIn() {
      console.log('Signing in with User ID:', this.userId, 'Organization ID:', this.orgId, 'and password:', this.password);
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Manrope';
  src: url('@/fonts/static/Manrope-VariableFont_wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('@/fonts/static/Montserrat-VariableFont_wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.sign-in-page {
  display: flex;
  height: 100vh;
}

.left-side {
  flex: 1;
  position: relative;
}

.right-side {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.whatsapp-image {
  position: absolute;
  bottom: 60px;
  right: 780px;
  width: 50px;
  height: 50px;
}

.content {
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  text-align: left;
  z-index: 2;
  margin-top: 50px;
}

.content h1 {
  font-size: 45px;
  margin: 0;
  line-height: 54px;
  font-family: 'Good Times';
}

.content p {
  font-size: 18px;
  margin: 0;
  font-family: 'Manrope';
  line-height: 28.8px;
}

.sign-in-form {
  max-width: 700px;
  width: 200%;
  padding: 20px;

}

.sign-in-form h1 {
  font-family: 'Manrope';
  font-size: 40px;
  line-height: 64px;
}

.sign-in-form p {
  font-family: 'Manrope';
  font-size: 18px;
  line-height: 28.8px;
  margin-bottom: 20px;
}

.forgot-password {
  margin-bottom: 40px;
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 19.12px;
  text-align: right;
}

.forgot-password a {
  color: red;
  text-decoration: none;
  display: block;
}

.red-text {
  color: red;
  text-decoration: none;
}

.dark-red-button {
  background-color: #8B0000 !important;
  color: white !important;
  font-size: 1.25rem;
  text-transform: none;
}

.vbtn {
  size: x-large;
  font-family: 'Montserrat';
}

.password-text-field {
  width: 462px;
  height: 60px;
  margin-top: 26px;
  padding: 12px 0 0 0;
  gap: 0;
  border-radius: 6px 0 0 0;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  font-family: 'Manrope';
}

.sign-up-link {
  margin-top: 20px;
  text-align: center;
  font-family: 'Manrope';
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

</style>
