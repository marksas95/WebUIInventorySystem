<template>
  <div>
    <categoryHeader></categoryHeader>
    <categoryTable
  :table-headers = "categoryHeaders"
  :table-data = "categories"
  :on-edit = "editCategory"
  :on-delete = "deleteCategory"
  :kinds-of-button="kindsOfButton"
  :button-function="buttonFunction"/>
  </div>

</template>

<script>

  import CategoryTable from "../../components/BaseTable.vue";
  import CategoryHeader from "./CategoryHeader.vue";
  import {mapActions} from "vuex";

  export default {
  name: "Category",
  components: {
    categoryTable: CategoryTable,
    categoryHeader: CategoryHeader
  },
  data() {
    return {
      categoryHeaders: ["Name"],
      kindsOfButton: ['Edit','Delete']
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
    this.$store.dispatch('INIT_CATEGORY');
  },
  methods: {
...mapActions
    (['INIT_CATEGORY',
      'DELETE_CATEGORY']),
    buttonFunction(categoryId, button) {
      switch (button) {
        case 'Edit':
          this.$router.push({path: `/categories/${categoryId}`})
          this.$destroy
          break
        case 'Delete':
          if (confirm('Are you sure you want to delete category?')) {
            this.DELETE_CATEGORY(categoryId)
          }
      }
    },
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
