<template>
  <v-container>
    <v-row>
      <v-col v-for="(equipment, index) in equipments" :key="index" col-sm="12">
        <v-card>
          <v-img :src="equipment.image" :alt="equipment.name"></v-img>
          <v-card-title>{{ equipment.name }}</v-card-title>
          <v-card-subtitle>\${{ equipment.price }}</v-card-subtitle>
          <v-card-text v-if="equipment.discount">
            Discount: {{ equipment.discount }}% Off
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import equipment1 from '@/assets/image/equipment1.jpg';
import equipment2 from '@/assets/image/equipment2.jpg';
import equipment3 from '@/assets/image/equipment3.jpg';
import equipment4 from '@/assets/image/equipment4.jpg';
import equipment5 from '@/assets/image/equipment5.jpg';

export default {
  name: 'EquipmentComponent',
  data() {
    return {
      equipments: [
        { name: 'Dog cage', price: '200,000', image: equipment1, discount: 20 },
        { name: 'Dog Reflective Leash', price: '200,000', image: equipment2, discount: 20 },
        { name: 'Dog Feeding Bowl', price: '200,000', image: equipment3, discount: 20 },
        { name: 'Cat/Dog Feeding Bowl', price: '200,000', image: equipment4, discount: 20 },
        { name: 'Dog Reflective Leash', price: '200,000', image: equipment5, discount: 20 }
      ]
    }
  }
}
</script>

<style scoped>
</style>

