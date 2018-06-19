<template>
  <categoryTable
  :table-headers = "categoryHeaders"
  :table-data = "categories"
  :on-edit = "editCategory" 
  :on-delete = "deleteCategory"
                
                />
</template>

<script>
import CategoryTable from "../../components/BaseTable.vue";

export default {
  name: "Category",
  components: {
    categoryTable: CategoryTable
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
    this.axios.get("api/category/list").then(response => {
      console.log(response.data);
      this.$store.dispatch("setCategory", response.data);
    });
  },
  methods: {
    editCategory(categoryId) {
      console.log("edit");
      console.log(categoryId);
    },
    deleteCategory(categoryId) {
      console.log("delete");
      console.log(categoryId);
    }
  }
};
</script>

<style scoped>
</style>
