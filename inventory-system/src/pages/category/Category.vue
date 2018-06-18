<template>
  <appCategory :table-headers="categoryHeaders"
                :table-data="tableData"></appCategory>
</template>

<script>

  import CategoryTable from '../../components/products/BaseTable.vue'
  import Header from "../../components/products/Header.vue";


  export default {
    name: "Category",
    components: {
      appCategory: CategoryTable
    },
    data() {
          return {
           categoryHeaders: ['Name' ]
          }

    },
    computed:{
      category(){
          return this.$store.state
      }
    }
  }
</script>

<style scoped>

</style>
