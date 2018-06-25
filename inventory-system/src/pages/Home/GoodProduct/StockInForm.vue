<template>
    <div>
        <select name="" id="stockOption" class="col-md-2">
          <option :selected="selectedStock" :value="stock" v-for="stock in stockOption">{{stock}}</option>
        </select>
      <select name="" id="itemCode" class="col-md-4" v-model="productId">
        <option :selected="productId" :value="product.id" v-for="product in products">{{product.itemCode}} : {{product.id}}</option>
      </select>
        <input type="number" v-model="quantity">
        <button type="button" @click="stockIn(id,productId,quantity)">Stock In</button>
      <button>Cancel</button>
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
            productId:'',
            selectedStock:'',
            quantity:0
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
      },
      methods:{
          stockIn(warehouseId,productId,quantity){

              this.$store.dispatch('STOCK_IN',{warehouseId,productId,quantity})
            this.$router.push('/')
            this.$destroy
          }
      }

    }
</script>

<style scoped>

</style>
