<template>
  <div>
    <categoryHeader></categoryHeader>  
    <categoryTable
  :table-headers = "categoryHeaders"
  :table-data = "categories"
  :on-edit = "editCategory"
  :on-delete = "deleteCategory"/>
  </div>

</template>

<script>

import CategoryTable from "../../components/BaseTable.vue";
import category from "../../store/modules/category";
import CategoryHeader from "./CategoryHeader.vue";
import { mapActions } from "vuex";

export default {
  name: "Category",
  components: {
    categoryTable: CategoryTable,
    categoryHeader: CategoryHeader
  },
  data() {
    return {

      categoryHeaders: ["Name"]
    };
  },
  computed: {
    categories() {
      return this.$store.state.category.categories.map(o => {
        return {
          id: o.id,
          data: [o.name]
        };
      });
    }
  },
  created() {
      if (this.$store.state.category.categories.length === 0){
        console.log('list')
            this.$store.dispatch('initCategory');
      }else{
        console.log('oops')
      }
  },
  methods: {

...mapActions
    (['initCategory',
      'DELETE_CATEGORY']),

    editCategory(categoryId) {
      console.log('edit')
      this.$router.push({path:`/categories/${categoryId}`})
    },
    deleteCategory(categoryId) {
      console.log("delete");
      console.log(categoryId);
      // this.axios.delete("api/category/delete?id=" + categoryId);
      this.DELETE_CATEGORY(categoryId)
    }
  }
};
</script>

<style scoped>
</style>
