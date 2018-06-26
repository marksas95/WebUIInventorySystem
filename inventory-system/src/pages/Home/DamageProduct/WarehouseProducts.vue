<template>
  <div>
    <button type="button" @click="onBack">Back</button>
    <goodProductTable
      :table-headers="tableHeaders"
      :table-data="goodProducts"
      :kindsOfButton="kindsOfButton"
    />
  </div>

</template>

<script>
  import BaseTable from '../../../components/BaseTable'

  export default {
    name: "Products",
    data() {
      return {
        goodProducts: [],
        tableHeaders: ['Item Code', 'Minimum Stocks', 'Quantity', 'Status'],
        kindsOfButton:[]
      }
    },
    components: {
      goodProductTable: BaseTable
    },
    created() {
      this.$store.dispatch('FIND_BY_WAREHOUSE_ID', this.id).then(o => {
        this.goodProducts = o.data.goodQuantityProducts.map(o => {
          return {
            data: [
              o.product.itemCode,
              o.product.minimumStocks,
              o.quantity,
              o.product.active === true ? 'Active' : 'Not Active'
            ]

          }
        })
        console.log(this.goodProducts)
      })
    },
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    methods: {
      onBack() {
        this.$router.push('/')
        this.$destroy()
      }
    }
  }
</script>

<style scoped>

</style>
