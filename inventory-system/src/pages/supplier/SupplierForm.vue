<template>
  <div>
    <div class="row">
      <form>
        <div class="col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="itemCode">Name</label>
            <input
              type="text"
              id="itemCode"
              class="form-control"
              v-model.lazy="supplier.name">
          </div>
          <div class="row text-right">
            <button class="btn btn-primary" @click="onSave">Save</button>
            <button class="btn btn-primary" @click="onCancel">Cancel</button>
          </div>
        </div>
      </form>

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
    },
    methods: {
      onSave(){
        this.$router.push({ path:'/suppliers'})
      },
      onCancel(){
        this.$router.push({ path:'/suppliers'})
      }
    }
  }
</script>

<style scoped>

</style>
