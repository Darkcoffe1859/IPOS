<template>
  <div>
    <h1>Order List</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - #{{ item.price.toFixed(2) }}
      </li>
    </ul>
    <v-btn color="primary" @click="goToDeliveryInfo">
      <v-icon style="color: red">mdi-plus</v-icon>
      Add delivery address
    </v-btn>
  </div>
  <div>
    <p>VAT: #{{ vat.toFixed(2) }}</p>
    <p>Subtotal: #{{ subtotal.toFixed(2) }}</p>
  </div>
  <div>
    <v-btn color="primary" style="background-color: black;">Save</v-btn>
    <v-btn color="primary" style="background-color: darkred;">Pay Now</v-btn>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data() {
    return {
      cartItems: [
        { id: 1, name: 'Item 1', price: 100 },
        { id: 2, name: 'Item 2', price: 200 },
      ],
      vat: 20,
      subtotal: 300,
    };
  },
  methods: {
    goToDeliveryInfo() {
      this.$router.push({ name: 'DeliveryInformation' });
    },
  },
};
</script>

<style scoped>
</style>

