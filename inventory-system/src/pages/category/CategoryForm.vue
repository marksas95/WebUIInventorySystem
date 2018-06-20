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
              v-model.lazy="category.name">
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
  name: "CategoryForm",
  props: {
    id:{
		type: String,
		default: ()=> ''
	}
  },
  data(){
	  return{
		  category:{}
	  }
  },
  created(){
	  console.log(this.id)
	  this.category = this.$store.getters.getCategory(parseInt(this.id))
  },
  methods:{
	  onSave(){
		  this.$router.push({path: '/categories' })
	  },
	  onCancel(){
		  this.$router.push({path: '/categories'})
	  }
  }
};
</script>


<style>
</style>
