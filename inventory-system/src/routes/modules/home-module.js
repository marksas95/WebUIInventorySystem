import Home from '../../pages/Home/Home';
import MainLayout from '../../layouts/MainLayout.vue';


export default {
  path: '/',
  components: {
    default: MainLayout
  },
  children: [
    {path: '' , component: Home}
  ]


}
