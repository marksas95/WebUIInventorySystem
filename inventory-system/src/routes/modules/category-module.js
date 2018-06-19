import Category from '../../pages/category/Category.vue';
import CategoryForm from '../../pages/category/CategoryForm.vue';
import MainLayout from '../../layouts/MainLayout.vue';


export default {
  path: '/categories',
  components: {
    default: MainLayout
  },
  children: [
	  {path: '' , component: Category },
	  {path: ':id' , props: true, component: CategoryForm }
  ]

  
}
