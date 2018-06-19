<template>
  <div>
    <div class="row">
      <div class="col-sm-6 col-md-12 border">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="supplier.name">
        </div>

      </div>
      <div class="col-xs-6 border">
        <input type="text" placeholder="Search" v-model="supplier.name">
      </div>

    </div>
    <div class="row">
      <div class="col-xs-4 border">
        <input type="text" placeholder="Search" v-model="supplier.name">
      </div>
      <div class="col-xs-4 border">
        <input type="text" placeholder="Search" v-model="supplier.name">
      </div>
      <div class="col-xs-4 border">
        <input type="text" placeholder="Search" v-model="supplier.name">
      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: "SupplierForm",
    props: {
      id: {
        type: String,
        default: () => ''
      }
    },
    data() {
      return {
        supplier: {}
      }
    },
    created() {
      console.log(this.id)
      this.supplier = this.$store.getters.getSupplier(parseInt(this.id))
    }
  }
</script>

<style scoped>
  .border {
  border-color: red;
    border-style: solid ;
  }
</style>
