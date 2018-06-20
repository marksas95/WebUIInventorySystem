<template>
  <div class="class col-md-4">
    <div class="class panel panel-success">
      <div class="class panel-heading">
        <h3 class="panel-title">
          Warehouse: {{warehouseData.name}}
          <small class="class pull-right">Status: {{warehouseData.active}}</small>
        </h3>
      </div>
      <div class="class panel-body">
        <div class="">
          <table class="table table-hover">
          <thead>
            <tr>
              <th v-for="title in titleHeaders"><strong>{{title}}</strong></th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="rows in warehouseData.goodQuantityProducts">
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
          titleHeaders:['Item Code','Quantity','Status']
        }
      },
      props:{
          warehouseData:{
            type:Object,
            default:() => ({})
          }
      },
      created(){
          console.log(this.warehouseData)
      }
    }
</script>

<style scoped>

</style>
