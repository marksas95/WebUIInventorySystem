<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">            
              <div class="form-group">
                <label for="category">Category</label>
                <select
                  id="category"
                  class="form-control"
                  v-model="categories">
                  <option v-for="category in categories"
                          :selected="category.name == 'mix'">{{category.name}}</option>
                </select>
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
            <div class="form-group">
              <label for="serialNumber">Serial Number</label>
              <input
                type="text"
                id="serialNumber"
                class="form-control"
                v-model.lazy="product.serialNumber">
            </div>
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
                v-model="product.isVatable"> Vatable
            </label>
            <label for="notActive">
              <input
                type="radio"
                id="notVatable"
                value="false"
                v-model="product.isVatable"> Not Vatable
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button
              class="btn btn-primary"
              @click.prevent="submitted">Create
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import Header from './Header.vue'
  
  export default {
    data() {
      return {
        product: [],
        categories:[
          {
            name:'mix'
          },
          {
            name:'well'
          },
          {
            name:'sip'
          }
        ]
      }
    },
    methods: {},
    components: {
      appHeader: Header
    }
  }
</script>

<style scoped>

</style>
