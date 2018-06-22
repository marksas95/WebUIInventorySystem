<template>

  <div>
    <div class="row">
      <form>
        <div class="col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="categoryList.name">
          </div>
          <div class="row text-right">
            <button class="btn btn-primary" @click="onSaveCategory">Save</button>
            <button class="btn btn-primary" @click="onCancel">Cancel</button>
          </div>
        </div>
      </form>

    </div>

  </div>

</template>

<script>
import { mapActions } from 'vuex';
  export default {
    
    name: "CategoryForm",
    props: {
      id: {
        type: String,
        default:''
      }
    },
    data() {
      return {
        categoryList: {
        },
      }
    },
    created() {

      this.categoryList = this.$store.getters.getCategory(parseInt(this.id))
      console.log(this.categoryList)

    },
    methods: {
      ...mapActions([
        'CREATE_CATEGORY', 'UPDATE_CATEGORY'
      ]),
      onSaveCategory() {
        if (this.id === 'new') {
        this.CREATE_CATEGORY(this.categoryList)  
        this.$router.push({path: '/categories'})
        }else{
          this.UPDATE_CATEGORY(this.categoryList)
          console.log('update')
          console.log(this.categoryList)
          // this.$router.push({path: '/categories'})
        }
        
      },
      onCancel() {
        this.$router.push({path: '/categories'})
      }
    }
  }
</script>


<style>
</style>
