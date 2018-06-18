<template>
  <appCategory :table-headers="categoryHeaders"
                :table-data="tableData"></appCategory>
</template>

<script>
  import CategoryTable from '../../components/products/BaseTable.vue'

  export default {
    name: "Category",
    components: {
      appCategory: CategoryTable
    },
    data() {
          return {
            categoryHeaders:['name'],
            tableData:[['Bag'],['Laptop']]
          }
    }
  }
</script>

<style scoped>

</style>
