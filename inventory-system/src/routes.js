import ProductCreate from './components/products/Create.vue'
import ProductList from './components/products/List.vue'
import ProductHeader from './components/products/Header.vue'
import Home from './components/Home.vue'
import ProductDetails from './components/products/Details.vue'


export const routes = [
  //{path: '', component: List},
  {path: '', component:Home},
  {path: '/create', component:ProductCreate},
  {path: '/products', component:ProductList},
  {path: '/details', component:ProductDetails}
];
