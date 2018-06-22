<template>
  <div>
    <div class="row">
      <form>
        <div class="col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="categoryName">Name</label>
            <input
              type="text"
              id="categoryName"
              class="form-control"
              v-model="categoryForForm.name">
          </div>
          <div class="row text-right">
            <button class="btn btn-primary" type="button" @click="onSaveCategory">Save</button>
            <button class="btn btn-primary" @click="onCancel" type="button">Cancel</button>
          </div>
        </div>
      </form>

    </div>

  </div>

</template>

<script>
  export default {
    name: "CategoryForm",
    props: {
      id: {
        type: String,
        default: () => ''
      }
    },
    data() {
      return {
        categoryForForm: {}
      }
    },
    created() {
      this.categoryForForm = this.$store.getters.getCategory(parseInt(this.id))
      console.log(this.categoryForForm)
    },
    methods: {
      onSaveCategory() {
        console.log(this.categoryForForm)
        this.$router.push({path: '/categories'})
      },
      onCancel() {
        // this.$router.push({path: '/categories'})
      }
    }
  }
</script>


<style>
</style>
