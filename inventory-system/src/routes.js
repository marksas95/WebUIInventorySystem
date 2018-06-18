import ProductCreate from './components/products/Create.vue'
import Products from './pages/products/Products.vue'
import Home from './components/Home.vue'
import ProductDetails from './components/products/Details.vue'
import Category from './pages/category/Category.vue'

export const routes = [
  //{path: '', component: List},
  {path: '', component:Home},
  {path: '/create', component:ProductCreate},
  {path: '/products', component:Products},
  {path: '/details', component:ProductDetails},
  {path: '/categories', component:Category}
];
