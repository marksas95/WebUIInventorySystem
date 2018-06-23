<template>
  <div class="panel panel-default header">
    <ul class="class nav nav-pills">
      <!--<router-link to="/" tag="li" active-class="active" exact><a>List</a></router-link>-->
      <!--<router-link to="/create" tag="li" active-class="active" exact><a>Create</a></router-link>-->
     <button class="btn btn-primary " @click="onNew">New</button>
		
      


      <!--<router-link to="/details" tag="li" active-class="active" exact><a>Details</a></router-link>-->
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search Product">
        </div>
        <button type="submit" class="btn btn-default" @click="search">Search</button>
      </form>
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
          this.$router.push({path:'/suppliers/new'})
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
