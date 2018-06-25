import Home from '../../pages/Home/Home';
import StockInForm from '../../pages/Home/StockInForm';
import StockOutForm from '../../pages/Home/StockOutForm';
import MainLayout from '../../layouts/MainLayout.vue';


export default {
  path: '/',
  components: {
    default: MainLayout
  },
  children: [
    {path: '' , component: Home},
    {path: 'stockIn-form/:id',props: true, component:StockInForm},
    {path: 'stockOut-form/:id',props: true, component:StockOutForm}
  ]


}
