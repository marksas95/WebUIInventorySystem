<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Create Product</h1>
          <hr>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="product.name"/>
            <!--:value="userData.email"-->
            <!--@input = "userData.email = $event.target.value">-->
          </div>
          <div class="form-group">
            <label for="itemCode">Item Code</label>
            <input
              type="text"
              id="itemCode"
              class="form-control"
              v-model.lazy="product.itemCode">
          </div>
          <div class="form-group">
            <label for="unitOfMeasurement">Unit Of Measurement</label>
            <input
              type="text"
              id="unitOfMeasurement"
              class="form-control"
              v-model.lazy="product.unitOfMeasurement">
          </div>
          <div class="form-group">
            <label for="serialNumber">Serial Number</label>
            <input
              type="text"
              id="serialNumber"
              class="form-control"
              v-model.lazy="product.serialNumber">
          </div>
          <div class="form-group">
            <label for="minimumStocks">minimumStocks</label>
            <input
              type="number"
              id="minimumStocks"
              class="form-control"
              v-model.lazy="product.minimumStocks">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="description">Description</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="description"
            rows="5"
            class="form-control"
            v-model.lazy="product.description"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="remarks">Remarks</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="remarks"
            rows="2"
            class="form-control"
            v-model.lazy="product.remarks"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="active">
            <input
              type="radio"
              id="active"
              value="true"
              v-model="product.isActive"> Active
          </label>
          <label for="notActive">
            <input
              type="radio"
              id="notActive"
              value="false"
              v-model="product.isActive"> Not Active
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="active">
            <input
              type="radio"
              id="vatable"
              value="true"
              v-model="product.isVatable"> Active
          </label>
          <label for="notActive">
            <input
              type="radio"
              id="notVatable"
              value="false"
              v-model="product.isVatable"> Not Active
          </label>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitted">Submit!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
        methods:{

        },
        components:{

        }
    }
</script>

<style scoped>

</style>
