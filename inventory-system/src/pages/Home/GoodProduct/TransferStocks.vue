<template>
  <div class="row col-md-6 col-md-offset-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <p>Transfer Input</p>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label for="transferTo">Transfer quantity to Warehouse</label>
          <select name="" id="transferTo" v-model="transferForm.warehouseIdTo" class="col-md-4 form-control">
            <option :value="warehouse.id" v-for="warehouse in warehouses">{{warehouse.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="itemCode">Item Code</label>
          <select name="" id="itemCode" class="col-md-4 form-control" v-model="transferForm.productId">
            <option :selected="''" :value="product.id" v-for="product in products">{{product.itemCode}} : {{product.id}}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="transferTo">Quantity</label>
          <input type="number" v-model="transferForm.quantity" class="col-md-4 form-control">
        </div>
        <button class="btn btn-primary" type="button" @click="transferStocks(transferForm)">Transfer Stocks</button>
        <button class="btn btn-primary" type="button" @click="onCancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StockForm",
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        stockOption: ['Good Stock', 'Damaged Stock'],
        selectedStock: '',
        quantity: 0,
        warehouses: [],
        transferForm: {
          warehouseIdFrom: '',
          warehouseIdTo: '',
          productId: '',
          quantity: 0
        }
      }
    },
    computed: {
      products() {
        return this.$store.getters.GET_ACTIVE_PRODUCT.map((o) => {
          return {
            'id': o.id,
            'itemCode': o.itemCode
          }
        })

      }
    },
    created() {
      this.$store.dispatch('INIT_PRODUCTS')
      this.warehouses = this.$store.getters.GET_ACTIVE_WAREHOUSE

      this.transferForm.warehouseIdFrom = this.id
      console.log(this.id)
      console.log(this.transferForm.warehouseIdFrom)
    },
    methods: {
      transferStocks(transferForm) {
        this.$store.dispatch('TRANSFER_STOCKS', transferForm)
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
