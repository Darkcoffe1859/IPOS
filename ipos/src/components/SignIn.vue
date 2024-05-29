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
          <v-text-field v-model="password" label="Password" type="password" append-inner-icon="mdi-lock" required></v-text-field>
          <div class="forgot-password">
            <a href="#">Forget Password?</a>
          </div>
          <v-btn type="submit" class="dark-red-button vbtn" height="56px" width="100%">Sign In</v-btn>
        </v-form>
        <div class="sign-up-link">
          <span>Don't have an account? </span>
          <a href="#" class="red-text">Sign Up</a>
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
      password: ''
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
  font-family: Manrope;
}

.content h1 {
  font-size: 3rem;
  margin: 0;
}

.content p {
  font-size: 1.5rem;
  margin: 0;
}

.sign-in-form {
  max-width: 500px;
  width: 100%;
  padding: 20px;
}

.sign-in-form h1 {
  margin-bottom: 20px;
}

.sign-in-form p {
  margin-bottom: 10px;
}

.forgot-password {
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 322px;
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

.sign-up-link {
  margin-top: 20px;
  text-align: center;
}

.sign-up-link a {
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
}
</style>

