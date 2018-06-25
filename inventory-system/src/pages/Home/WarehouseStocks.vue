<template>
  <div class="class col-md-6">
    <div class="class panel panel-success">
      <div class="class panel-heading">
        <h3 class="panel-title" @click="">
          Warehouse: {{warehouseData.name}}
          <small class="class pull-right">Status: {{warehouseData.active}}</small>
        </h3>
        <h3 class="panel-title" @click="">
          Good Products
        </h3>
        <div>
          <button type="button" @click="viewGoodStocks">View Good Stocks</button>
          <button type="button" @click="stockIn">Stock In</button>
            <button type="button" @click="stockOut">Stock Out</button>
          <button>Transfer Stocks</button>
        </div>
        <h3 class="panel-title" @click="">
          Damaged Products
        </h3>
        <div>
          <button>View Damaged Stocks</button>
          <button type="button" @click="stockIn">Stock In</button>
          <button type="button" @click="stockOut">Stock Out</button>
          <button>Replace Product</button>

        </div>
      </div>
      <div class="class panel-body">
        <div   class="overflow">
          <table class="table table-hover">
          <thead>
          <h4>Minimum Stocks:</h4>
            <tr>
              <th v-for="title in titleHeaders"><strong>{{title}}</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rows in minimumStocks">
              <th v-for="column in rows"><small>{{column}}</small></th>
            </tr>
          </tbody>
          </table>
        </div>
        <!--<div class="pull-right">-->
          <!--<button-->
            <!--class="btn btn-success"-->
            <!--@click = "">Buy</button>-->
          <!--&lt;!&ndash;:disabled="quantity <= 0 || Number.isInteger(quantity)">Buy&ndash;&gt;-->

        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WarehouseStocks",
      data(){
        return{
          titleHeaders:['Item Code','Minimum Stocks','Quantity','Status']
        }
      },
      props:{
          warehouseData:{
            type:Object,
            default:() => ({})
          }
      },
      computed:{
          minimumStocks(){
           return this.warehouseData.goodQuantityProducts.filter((p) => p.quantity <= p.minimumStocks)
          }
      },
      created(){
          console.log(this.warehouseData)
        console.log(this.minimumStocks)
      },
      methods:{
          stockIn(){
            if(this.warehouseData.active === 'Active'){
              this.$router.push('/stockIn-form/'+this.warehouseData.id)
              this.$destroy()
            } else {
              alert('Warehouse is not active!')
            }
          },
          stockOut(){
            if(this.warehouseData.active === 'Active'){
              this.$router.push('/stockOut-form/'+this.warehouseData.id)
              this.$destroy()
            } else {
              alert('Warehouse is not active!')
            }
          },
        viewGoodStocks(){
          this.$router.push('/good-products/'+this.warehouseData.id)
        }
      }
    }
</script>

<style scoped>
  /*div .overflow {*/
    /*overflow: auto;*/
    /*width: unset;*/
    /*height: 300px;*/
  /*}*/
</style>
