<template>
  <div>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Save Order #34522</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeForm">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field v-model="form.name" label="Customer Name"></v-text-field>
          <v-text-field v-model="form.address" label="Description"></v-text-field>
          <v-btn color="red" @click="cancel">Cancel</v-btn>
          <v-btn color="primary" @click="saveOrder">Save</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SaveOrder',
  data() {
    return {
      form: {
        name: '',
        address: '',
      },
    };
  },
  methods: {
    saveOrder() {
      console.log('Saving order...');
      console.log('Customer Name:', this.form.name);
      console.log('Description:', this.form.address);
      this.resetForm();
    },
    closeForm() {
      console.log('Closing form...');
    },
    resetForm() {
      this.form.name = '';
      this.form.address = '';
    },
  },
};
</script>

<style scoped>
</style>
              
