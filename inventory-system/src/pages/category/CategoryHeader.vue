<template>
  <div class="panel panel-default header">
    <ul class="class nav nav-pills">
      <!--<router-link to="/" tag="li" active-class="active" exact><a>List</a></router-link>-->
      <!--<router-link to="/create" tag="li" active-class="active" exact><a>Create</a></router-link>-->
     <button type="button" class="btn btn-primary " @click="onNew">Add New Category</button>
      <!--<router-link to="/details" tag="li" active-class="active" exact><a>Details</a></router-link>-->
    </ul>
  </div>

</template>

<script>
  export default {
    props:{
      search:{
        type:String,
        default:''
      }
    },
    methods:{
      onNew(){
          this.$router.push({path:'/categories/new'})
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  div .header {
    background-color: snow;
    
  }
  
</style>
