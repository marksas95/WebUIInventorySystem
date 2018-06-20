<template>
  <div>
    <div class="container">
      <form>
        <div class="panel panel-default col-md-6 col-md-offset-3">
          <div class="panel-body">
            <div class="row">
              <div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <select
                    id="category"
                    class="form-control"
                    v-model="product.category == null ? '':product.category">
                    <option v-for="category in categories"
                            :selected="(category == product.category == null ? '':product.category)"
                            :value="category">
                      {{category.name}}
                    </option>
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
              <div class="form-group">
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

              <div class="form-group">
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
              <div class="form-group">
                <label for="active">
                  <input
                    type="radio"
                    id="active"
                    value="true"
                    v-model="product.active"> Active
                </label>
                <label for="notActive">
                  <input
                    type="radio"
                    id="notActive"
                    value="false"
                    v-model="product.active"> Not Active
                </label>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label for="active">
                  <input
                    type="radio"
                    id="vatable"
                    value="true"
                    v-model="product.vatable"> Vatable
                </label>
                <label for="notActive">
                  <input
                    type="radio"
                    id="notVatable"
                    value="false"
                    v-model="product.vatable"> Not Vatable
                </label>
              </div>
            </div>
            <div class="col-md-offset-3">
              <div class="row text-right">
                <button class="btn btn-primary" @click="onSave">Save</button>
                <button class="btn btn-primary" @click="onCancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>

  </div>

</template>

<script>
  import Header from '../../components/Header.vue'
  import product from "../../store/modules/product";

  export default {
    data() {
      return {
        product: {
          category:{},
          name: '',
          itemCode: '',
          description: '',
          unitOfMeasurement: '',
          serialNumber: '',
          remarks: '',
          minimumStocks: 0,
          active: false,
          vatable: false
        },
        categories: {}
      }
    },
    methods: {
      onSave() {
        if(this.id === 'new'){
          this.axios.post('/api/product/create',this.product)
          this.$router.push({path: '/products'})
        } else {
          this.axios.post('/api/product/update',this.product)
          this.$router.push({path: '/products'})
        }
      },
      onCancel() {
        this.$router.push({path: '/products'})
      },
      onOptionCategory(category){
        console.log(category)
      }
    },
    components: {
      appHeader: Header
    },
    created() {
      this.axios.get("/api/category/list").then(response => {
        this.categories = response.data;
      });

      if(this.id !== 'new'){
        this.product = this.$store.getters.getProduct(parseInt(this.id))
      }
      // this.categories = this.$store.state.category.categories
    },
    props: {
      id: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  div .light{
    opacity: 0.5;
  }
</style>
