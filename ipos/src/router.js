
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import OrderList from './components/OrderList.vue';
import DeliveryInformation from './components/DeliveryInformation.vue';
import PetComponent from './components/PetComponent.vue';
import SaveOrder from './components/SaveOrder.vue';

const routes = [
  { path: '/', component: HelloWorld, name: 'Home' },
  { path: '/order-list', component: OrderList, name: 'OrderList' },
  { path: '/delivery-information', component: DeliveryInformation, name: 'DeliveryInformation' },
  { path: '/pets', component: PetComponent, name: 'Pets' },
  { path: '/save-order', component: SaveOrder, name: 'SaveOrder' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

