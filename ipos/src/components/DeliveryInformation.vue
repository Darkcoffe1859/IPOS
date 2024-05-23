<template>
  <div>
    <h1>Delivery Information</h1>
    <v-form>
      <v-text-field v-model="form.delivery" label="Select Venue Type"> Delivery Type</v-text-field>
      <v-text-field v-model="form.name" label=" Name"> Recipient Name</v-text-field>
      <v-text-field v-model="form.number" label="Phone">Phone Number</v-text-field>
      <v-text-field v-model="form.code" label="Postal Code"> Postal Code</v-text-field>
      <v-text-field v-model="form.location" label="Local Government"> Local Government</v-text-field>
      <v-text-field v-model="form.address" label="Address">Delivery Address</v-text-field>
      <v-btn color="red" @click="clear">Cancel</v-btn>
      <v-btn color="primary" @click="save">Add</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'DeliveryInformation',
  data() {
    return {
      form: {
        delivery: '',
        name: '',
        number: '',
        code: '',
        location: '',
        address: '',
      },
    };
  },
  methods: {
    clear() {
      this.form = {
        delivery: '',
        name: '',
        number: '',
        code: '',
        location: '',
        address: '',
      };
    },
    save() {
    },
  },
};
</script>

<style scoped>
</style>

