<template>
  <v-app>
    <v-list>
      <v-list-title>Customer Details</v-list-title>
      <v-list-subtitle>Select Customer</v-list-subtitle>
    </v-list>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="searchQuery"
            label="Search Customer"
            prepend-inner-icon="mdi-magnify"
            @keyup.enter="searchCustomer"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn @click="searchCustomer" color="red dark">
            <v-icon left>mdi-magnify</v-icon>
            Search
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-list>
            <v-list-item v-for="customer in filteredCustomers" :key="customer.id">
              <v-list-item-content>
                <v-list-item-title>{{ customer.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ customer.phone }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <v-divider vertical></v-divider>

    <v-list>
    <v-list-item>
      <v-list-title>Pay Now</v-list-title>
      <v-list-subtitle>3 Payment method available</v-list-subtitle>
    <v-list-item-action>
      <v-btn @click="togglePaymentStatus(customer)" :class="paymentStatusClass(customer)">
        {{ paymentStatusText(customer) }}
      </v-btn>
      </v-list-item-action>
      </v-list-item>
      </v-list>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-btn @click="navigateToEvents" class="instant-transition">
            Go to Events
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
      <v-snackbar v-model="showSnacker">
      {{ NB: Receipt will only be printed for PAID transactions }}
     </v-snackbar>
<v-spacer></v-spacer>

    <v-col>
    <v-btn rounded block>Cancel</v-btn>
    <v-btn rounded block>Submit</v-btn>
    </v-col>

    <v-footer-app>
    <span>Payment Processed by: {{ paymentProcessor }}</span>
    </v-footer-app>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
      paymentStatuses: {}
    };
  },
  computed: {
    ...mapState(['filteredCustomers']),
  },
  methods: {
    searchCustomer() {
    },
    navigateToEvents() {
      this.$router.push({ name: 'Events' });
    },
    togglePaymentStatus(customer) {
      this.$set(this.paymentStatuses, customer.id, !this.paymentStatuses[customer.id]);
    },
    paymentStatusText(customer) {
      return this.paymentStatuses[customer.id] ? 'Paid' : 'Not Paid';
    },
    paymentStatusClass(customer) {
      return this.paymentStatuses[customer.id] ? 'paid' : 'not-paid';
    }
  },
};
</script>

<style scoped>
</style>
