<template>
  <categoryTable :table-headers="categoryHeaders"
                :table-data="tableData" />
</template>

<script>

  import CategoryTable from '../../components/BaseTable.vue'
 


  export default {
    name: "Category",
    components: {
      categoryTable: CategoryTable
    },
    data() {
          return {
           categoryHeaders: ['Name' ]
          }

    },
    computed:{
      categories(){
          return this.$store.state.category.categories.map(o =>{
            return [o.name]
          })
      }
    },
    created(){
      this.axios.get('api/category/list').then(response=>{
        console.log(response.data)
        this.$store.dispatch('setCategory', response.data)
      })
    }
  }
</script>

<style scoped>

</style>
