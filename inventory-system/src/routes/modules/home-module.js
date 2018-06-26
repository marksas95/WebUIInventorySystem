import Home from '../../pages/Home/Home';
import StockInForm from '../../pages/Home/GoodProduct/StockInForm';
import StockOutForm from '../../pages/Home/GoodProduct/StockOutForm';
import MainLayout from '../../layouts/MainLayout.vue';
import WarehouseProducts from '../../pages/Home/GoodProduct/WarehouseProducts'
import TransferStocks from '../../pages/Home/GoodProduct/TransferStocks'

export default {
  path: '/',
  components: {
    default: MainLayout
  },
  children: [
    {path: '' , component: Home},
    {path: 'stockIn-form/:id',props: true, component:StockInForm},
    {path: 'stockOut-form/:id',props: true, component:StockOutForm},
    {path: 'good-products/:id',props: true, component:WarehouseProducts},
    {path: 'transfer-stocks/:id',props: true, component:TransferStocks},
  ]


}
