<template>
  <v-card width="1514px" height="937px;">
    <v-app>
      <v-navigation-drawer app>
        <v-list>
          <v-list-subheader></v-list-subheader>
          <v-list-item>
            <v-list-item-title style="color: red">IPET</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn align="center" color="red" dark style="text-transform: none;">
              <v-img src="@/assets/icon/category.png" class="nav-icon"></v-img>
              Home
            </v-btn>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title width="45px" height="24px" size="14px">Order</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title width="45px" height="24px" size="14px">Customers</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title width="45px" height="24px" size="14px">Stocks</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title width="45px" height="24px" size="14px">Invoice</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title width="45px" height="24px" size="14px">Delivery</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title width="45px" height="24px" size="14px">Reports</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/receipt-2.png" class="nav-icon"></v-img>
              <v-list-item-title>Agents</v-list-item-title>
            </template>
          </v-list-item>

          <v-spacer></v-spacer>
          <v-list-subheader></v-list-subheader>
          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/setting-2.png" class="nav-icon"></v-img>
              <v-list-item-title>Settings</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item to="/" exact active-class="activeNav">
            <template v-slot:prepend>
              <v-img src="@/assets/icon/logout.png" class="nav-icon"></v-img>
              <v-list-item-title class="dashboard">Dashboard</v-list-item-title>
            </template>
          </v-list-item>

          <v-list-item>
            <v-btn align="center" class="create-order-btn" dark>
              Create Order
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-app-bar app flat>
          <v-list>
            <v-list-item>
              <div class="Home" style="ml-14">Home</div>
              <div class="notification">
                <v-btn text>
                  Expired Products <span class="notification">{{ expiredProductCount }}</span>
                  <v-icon></v-icon>
                </v-btn>
              </div>
            </v-list-item>
          </v-list>
          <v-col col="12">
            <v-layout>
              <v-img src="@/assets/image/folalu.png" class="nav-image" alt="User"></v-img>
              <div class="Username">Folalu Enoch</div>
              <div class="username">Admin</div>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-layout>
          </v-col>
        </v-app-bar>

        <v-app-bar flat dense class="text-transform: none">
          <v-btn text @click="navigateTo('FeedComponent')" class="ml-10" style="text-transform: none;">Feed</v-btn>
          <v-btn text @click="navigateTo('PetsComponent')" style="text-transform: none;">Pets</v-btn>
          <v-btn text @click="navigateTo('EquipmentComponent')" style="text-transform: none;">Equipment</v-btn>
          <v-btn text @click="navigateTo('ServicesComponent')" style="text-transform: none;">Services</v-btn>
          <v-spacer></v-spacer>
          <v-btn align="center" style="text-transform: none; border-radius: 24px; border: 1px solid red;">
            <v-icon>mdi-filter-variant</v-icon>
            filter
          </v-btn>
        </v-app-bar>

        <component :is="currentComponent"></component>

        <v-container>
          <v-row>
            <v-col v-for="(item, index) in items" :key="index" col-sm="6">
              <router-link :to="'/product/' + item.id">
                <v-card>
                  <v-img :src="item.src" width="221px" height="299px"></v-img>
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                  <v-overlay>
                    <v-badge color="red" overlap style="top: 0; left: 0; position: absolute;">20% OFF</v-badge>
                  </v-overlay>
                  <v-card-actions>
                    <v-row style="justify-content: space-between;">
                      <v-col sm="6">
                        <v-img src="@/assets/icon/shopping-cart.png" class="nav-icon"></v-img>
                      </v-col>
                      <v-col sm="6">
                        <v-btn color="red" style="align:center; text-transform: none; padding-right: 80px;" @click="addToCart(item)">Add to Cart</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-pagination v-model="currentPage" :length="totalPages" style="position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);"></v-pagination>
      <order-list :cartItems="cartItems" :dialog="dialog" @close="dialog = false"></order-list>
    </v-app>
  </v-card>
</template>

<script>
import { ref } from 'vue';
import OrderList from './OrderList.vue';

const HomeComponent = { template: '<div><h1>Home Page</h1></div>' };
const ContentComponent = { template: '<div><h1>Content Page</h1></div>' };
const CustomerComponent = { template: '<div><h1>Customer Page</h1></div>' };
const StocksComponent = { template: '<div><h1>Stocks Page</h1></div>' };
const InvoiceComponent = { template: '<div><h1>Invoice Page</h1></div>' };
const DeliveryComponent = { template: '<div><h1>Delivery Page</h1></div>' };
const ReportsComponent = { template: '<div><h1>Reports Page</h1></div>' };
const AgentComponent = { template: '<div><h1>Agent Page</h1></div>' };
const DashboardComponent = { template: '<div><h1>Dashboard Page</h1></div>' };
const SettingsComponent = { template: '<div><h1>Settings Page</h1></div>' };
const PetComponent = { template: '<div><h1>Pets Page</h1></div>' };
const EquipmentComponent = { template: '<div><h1>Equipment Page</h1></div>' };
const ServicesComponent = { template: '<div><h1>Services Page</h1></div>' };

export default {
  name: 'HelloWorld',
  components: {
    OrderList,
    HomeComponent,
    ContentComponent,
    CustomerComponent,
    StocksComponent,
    InvoiceComponent,
    DeliveryComponent,
    ReportsComponent,
    AgentComponent,
    DashboardComponent,
    SettingsComponent,
    PetComponent,
    EquipmentComponent,
    ServicesComponent,
  },
  setup() {
    const expiredProductCount = ref(0);
    const currentComponent = ref('HomeComponent');
    const currentPage = ref(1);
    const totalPages = ref(10);
    const items = ref([
      { id: 1, src: 'image1.jpg' },
      { id: 2, src: 'image2.jpg' },
      { id: 3, src: 'image3.jpg' },
      { id: 4, src: 'image4.jpg' },
      { id: 5, src: 'image5.jpg' },
      { id: 6, src: 'image6.jpg' },
      { id: 7, src: 'image7.jpg' },
      { id: 8, src: 'image8.jpg' },
      { id: 9, src: 'image9.jpg' },
      { id: 10, src: 'image10.jpg' },
    ]);

    const cartItems = ref([]);
    const dialog = ref(false);

    const addToCart = (item) => {
      cartItems.value.push(item);
      dialog.value = true;
    };

    const menuItems = [
      { title: 'Content', component: 'ContentComponent', icon: '@/assets/icon/receipt-2.png' },
      { title: 'Customers', component: 'CustomerComponent', icon: '@/assets/icon/receipt-2.png' },
      { title: 'Stocks', component: 'StocksComponent', icon: '@/assets/icon/receipt-2.png' },
      { title: 'Invoice', component: 'InvoiceComponent', icon: '@/assets/icon/receipt-2.png' },
      { title: 'Delivery', component: 'DeliveryComponent', icon: '@/assets/icon/receipt-2.png' },
      { title: 'Reports', component: 'ReportsComponent', icon: '@/assets/icon/receipt-2.png' },
      { title: 'Agent', component: 'AgentComponent', icon: '@/assets/icon/receipt-2.png' },
    ];

    const navigateTo = (component) => {
      currentComponent.value = component;
    };

    return {
      expiredProductCount,
      currentComponent,
      currentPage,
      totalPages,
      items,
      navigateTo,
      menuItems,
      cartItems,
      dialog,
      addToCart,
    };
  },
};
</script>

<style scoped>
.nav-item {
  display: flex;
}

.nav-icon {
  width: 24px;
  height: 24px;
  display: flex;
  margin: 12px;
}

.nav-image {
  width: 40px;
  height: 40px;
  margin-left: 30px;
}

.nav-text {
  font-family: Manrope;
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
}

.v-btn__content, .nav-text {
  text-transform: none !important;
}

.create-order-btn {
  background-color: rgba(119, 17, 20, 1);
  color: white;
  text-transform: none;
}

.dashboard {
  color: red;
}

.v-list-item-title {
  font-size: 16px;
}

.title-shift {
  margin-left: -20px;
}

.filter-btn {
  width: 130px;
  height: 36px;
  top: 128px;
  left: 1070px;
  padding: 6px 24px 6px 16px;
  gap: 12px;
  border-radius: 24px 0px 0px 0px;
  border: 1px solid red;
  opacity: 0;
}
</style>

