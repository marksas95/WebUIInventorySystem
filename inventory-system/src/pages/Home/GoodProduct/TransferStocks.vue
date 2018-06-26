<template>
  <div>
    <h1>{{transferForm.warehouseIdFrom}} {{id}}</h1>
    <select name="" id="stockOption" class="col-md-2">
      <option :selected="selectedStock" :value="stock" v-for="stock in stockOption">{{stock}}</option>
    </select>
    <select name="" id="transferTo" v-model="transferForm.warehouseIdTo">
      <option :value="warehouse.id" v-for="warehouse in warehouses">{{warehouse.name}}</option>
    </select>
    <select name="" id="itemCode" class="col-md-4" v-model="transferForm.productId">
      <option :selected="''" :value="product.id" v-for="product in products">{{product.itemCode}} : {{product.id}}</option>
    </select>
    <input type="number" v-model="transferForm.quantity">
    <button type="button" @click="transferStocks(transferForm)">Transfer Stocks</button>
    <button type="button" @click="onCancel">Cancel</button>
  </div>
</template>

<script>
  export default {
    name: "StockForm",
    props:{
      id:{
        type:String,
        default: ''
      }
    },
    data(){
      return{
        stockOption:['Good Stock','Damaged Stock'],
        selectedStock:'',
        quantity:0,
        warehouses:[],
        transferForm:{
          warehouseIdFrom:'',
          warehouseIdTo:'',
          productId:'',
          quantity:0
        }
      }
    },
    computed:{
      products(){
        return this.$store.getters.GET_ACTIVE_PRODUCT.map((o) => {
          return {
            'id':o.id,
            'itemCode':o.itemCode
          }
        })

      }
    },
    created(){
      this.$store.dispatch('INIT_PRODUCTS')
      this.warehouses = this.$store.getters.GET_ACTIVE_WAREHOUSE

      this.transferForm.warehouseIdFrom = this.id
      console.log(this.id)
      console.log(this.transferForm.warehouseIdFrom)
    },
    methods:{
      transferStocks(transferForm){
        this.$store.dispatch('TRANSFER_STOCKS',transferForm)
        this.$router.push('/')
        this.$destroy()
      },
      onCancel() {
        this.$router.push('/')
        this.$destroy()
      }
    }

  }
</script>

<style scoped>

</style>
