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
                <label for="active01">
                  <input
                    type="radio"
                    id="active01"
                    value="true"
                    v-model="product.active"> Active
                </label>
                <label for="notActive01">
                  <input
                    type="radio"
                    id="notActive01"
                    value="false"
                    v-model="product.active"> Not Active
                </label>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label for="vatable">
                  <input
                    type="radio"
                    id="vatable"
                    value="true"
                    v-model="product.vatable"> Vatable
                </label>
                <label for="notVatable">
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
                <button class="btn btn-primary" @click="onSave" type="button">Save</button>
                <button class="btn btn-primary" @click="onCancel" type="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>

  </div>

</template>

<script>
  import Header from './Header.vue'
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        product: {
          category: {},
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
      ...mapActions([
        'CREATE_PRODUCT',
        'UPDATE_PRODUCT'
      ]),
      onSave() {
        if (this.id === 'new') {
          this.CREATE_PRODUCT(this.product).then(() =>{
            this.$router.push({name:'product'})
          })
          this.$destroy();
        }
        else {
          this.UPDATE_PRODUCT(this.product).then(() =>{
            this.$router.push({name:'product'})
          })
          this.$destroy();
        }
      },
      onCancel() {
        this.$router.push({name:'product'})
        this.$destroy();
      }
    },
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('INIT_CATEGORIES').then((response) => {
        this.categories = this.$store.state.category.categories;
      })
      if (this.id !== 'new') {
        this.product = this.$store.getters.GET_PRODUCT(parseInt(this.id))
      }
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
</style>
