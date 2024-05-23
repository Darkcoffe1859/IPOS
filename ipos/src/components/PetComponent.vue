<template>
  <v-container>
    <v-row>
      <v-col v-for="(pet, index) in pets" :key="index" cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="pet.image" :alt="pet.name"></v-img>
          <v-card-title>{{ pet.name }}</v-card-title>
          <v-card-subtitle>#{{ pet.price }}</v-card-subtitle>
          <v-card-text v-if="pet.discount">
            Discount: {{ pet.discount }}% Off
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PetComponent',
  data() {
    return {
      pets: [
        { name: 'Australian Pitbull', price: '200,000', image: require('@/assets/image/pet1.jpg'), discount: 20 },
        { name: 'German Shepherd', price: '180,000', image: require('@/assets/image/pet2.jpg'), discount: 15 },
        { name: 'Golden Retriever', price: '220,000', image: require('@/assets/image/pet3.jpg'), discount: 10 },
        { name: 'Bulldog', price: '250,000', image: require('@/assets/image/pet4.jpg'), discount: 25 },
        { name: 'Labrador', price: '240,000', image: require('@/assets/image/pet5.jpg'), discount: 30 },
      ],
    };
  },
};
</script>

<style scoped>
</style>

