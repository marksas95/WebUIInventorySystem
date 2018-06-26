<template>
  <div class="row">
    <div class="col-md-6 ">
      <div class="panel panel-default">
        <div class="panel-heading">
          <p>Stock-out Input</p>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label for="itemCode">Item Code</label>
            <select name="" id="itemCode" class="col-md-4 form-control"
                    v-model="productId">
              <option :selected="productId" :value="product.id" v-for="product in products"
              >{{product.itemCode}}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="quantity">Stock-out Quantity</label>
            <input type="number" id="quantity" class="col-md-4 form-control" v-model="quantity">
          </div>
          <div class="form-group">
            <label for="capitalCost">Reason</label>
            <input type="text" id="capitalCost" class="col-md-4 form-control">
          </div>

          <div class="col-md-offset-3 form-group">
            <div class="text-right">
              <button class="btn btn-primary" type="button" @click="stockOut(id,productId,quantity)">Stock Out</button>
              <button class="btn btn-primary" @click="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 ">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Product Details</h4>
        </div>
        <div class="panel-body" v-for="object in onChangeDetails">
          <p v-for="(value, key) in object">{{key}}: {{value}}</p>
        </div>
        <div class="panel-body" v-for="object in onChangeWarehouseQuantity">
          <p v-for="(value, key) in object">{{key}}: {{value}}</p>
        </div>
      </div>
    </div>
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
      onChangeDetails() {
        if (this.productId !== '') {
          console.log(this.$store.getters.GET_PRODUCT_STOCK_DETAILS(this.productId))
          return this.$store.getters.GET_PRODUCT_STOCK_DETAILS(this.productId)
        } else {
          return this.productDetails
        }
      },
      onChangeWarehouseQuantity() {
        if (this.productId !== '') {
          console.log(this.$store.getters.GET_PRODUCT_STOCK(this.productId))
          return this.$store.getters.GET_PRODUCT_STOCK(this.productId)
        } else {
          return this.productDetails
        }
      },
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
      cancel(){
        this.$router.push('/')
        this.$destroy()
      },
      stockOut(warehouseId,productId,quantity){

        this.$store.dispatch('STOCK_OUT_GOOD_PRODUCT',{warehouseId,productId,quantity})
        this.$router.push('/')
        this.$destroy()
      }
    }

  }
</script>

<style scoped>

</style>
