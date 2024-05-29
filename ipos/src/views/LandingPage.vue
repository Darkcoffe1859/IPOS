<template>
  <div>
    <v-app-bar flat style="padding: 0px 100px; height: 80px;" class="d-flex align-center">
      <v-toolbar-title class="pet title">IPet</v-toolbar-title>
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-btn class="text-none" :to="{ name: 'home' }">Home</v-btn>
        <v-btn class="text-none" :to="{ name: 'about' }">About</v-btn>
        <v-btn class="text-none" :to="{ name: 'privacy' }">Privacy</v-btn>
        <v-btn class="text-none" :to="{ name: 'items' }">Items</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn rounded class="dark-red-button text-none" style="color: white; margin-left: 10px;" size="large" width="130px">Sign In</v-btn>
      <v-img src="path/to/your/image.jpg" max-height="50" max-width="50" contain style="margin-left: 20px;"></v-img>
    </v-app-bar>
    <v-main>
      <v-container style="padding: 27px 0px; gap: 38px;">
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <h1>
                <span style="color: black;">Everything pets in one place</span>
                <br/>
                <span style="color: red;">No Hazzle</span>
              </h1>
              <p>
                Aqui, você encontrará respostas para todas as suas dúvidas, desde a escolha da melhor ração até dicas essenciais para garantir o bem-estar do seu companheiro peludo.
              </p>
              <v-btn rounded class="dark-red-button text-none" :to="{ name: 'signIn' }" width="200px" size="large" style="margin-top: 20px;">Sign In</v-btn>        
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
h1 {
  font-size: 69px;
  font-family: Alata;
  line-height: 1.2;
}

p {
  font-size: 32px;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  margin-bottom: 20px;
}

.pet {
  text-transform: none;
}

.text-none {
  text-transform: none;
}

.dark-red-button {
  background-color: #8B0000;
  color: white;
}

.title {
  font-size: 30px;
  color: red;
}

</style>
