<template>
  <div>
    <v-app-bar flat style=" height: 104px; margin-top: 50px;" class="d-flex align-center">
      <v-toolbar-title class="title">IPet</v-toolbar-title>
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-btn class="text-none vbtn" :to="{ name: 'home' }">Home</v-btn>
        <v-btn class="text-none vbtn" :to="{ name: 'about' }">About</v-btn>
        <v-btn class="text-none vbtn" :to="{ name: 'privacy' }">Privacy</v-btn>
        <v-btn class="text-none vbtn" :to="{ name: 'items' }">Items</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn rounded class="dark-red-button text-none" style="color: white; font: Open Sans; size: 26px; line-height: 28px; align: center;" size="x-large" width="150px;">Sign In</v-btn>
      <v-img src="path/to/your/image.jpg" max-height="50" max-width="50" contain style="margin-left: 20px;"></v-img>
    </v-app-bar>
    <v-main>
      <v-container style="padding: 27px 0px; gap: 38px; margin-top: 50px;">
        <v-row>
          <v-col cols="12" md="6" class="pa-0 ma-0">
            <div>
              <h1 class="title-text">
                <span style="color: black;">Everything pets in one<br/>place</span>
                <span style="color: #8B0000; padding-right: 2px;"> No Hazzle</span>
              </h1>
              <p class="description-text">
                Aqui, você encontrará respostas para todas as suas dúvidas, desde a escolha da melhor ração até dicas essenciais para garantir o bem-estar do seu companheiro peludo.
              </p>
              <v-btn rounded class="dark-red-button text-none sign-in-btn" :to="{ name: 'signIn' }" width="250px" size="x-large" style="font: Open Sans; size: 26px; line-height: 28px; align: center;">Sign In</v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="@/assets/ilustration.png" alt="my image" class="landing-image" style="border: 1px; width: 576.86px; height: 574.97px; max-width: 50;"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@font-face {
  font-family: 'Alata';
  src: url('@/fonts/static/Alata-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Paytone One';
  src: url('@/fonts/static/PaytoneOne-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('@/fonts/static/Manrope-VariableFont_wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-size: 60px;
  font-family: 'Alata';
  line-height: 95.22px;
  margin-top: 30px; /* Adjusted */
  margin-bottom: 0;
}

p {
  font-size: 21px;
  font-family: 'Open Sans', sans-serif;
  line-height: 28.6px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.title-text {
  margin: 0;
  margin-top: 30px; /* Added */
}

.description-text {
  margin: 0;
  margin-top: 20px; /* Added */
}

.sign-in-btn {
  margin-top: 30px; /* Added */
}

.text-none {
  text-transform: none;
}

.dark-red-button {
  background-color: #8B0000;
  color: white;
}

.title {
  font-size: 60px;
  color: #8B0000;
  text-transform: none;
  line-height: 83.76px;
  font-family: 'Paytone One';
}

.vbtn {
  font-family: 'Manrope';
  size: 20px;
  line-height: 28px;
}
</style>

