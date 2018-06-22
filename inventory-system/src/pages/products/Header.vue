<template>
  <div class="panel panel-default header">
    <ul class="class nav nav-pills">
      <!--<router-link to="/" tag="li" active-class="active" exact><a>List</a></router-link>-->
      <!--<router-link to="/create" tag="li" active-class="active" exact><a>Create</a></router-link>-->
     <button class="btn btn-primary " @click="onNew">New</button>
      <button class="btn btn-primary " @click="onGos">Go</button>

      <div class="form-group col-md-2">
        <label for="status" class="text-center col-md-offset-4" color="white">Status</label>
        <select class="form-control"
                id="status"
                v-model="selection">
          <option :value="o" v-for="o in productsToView">{{o}}</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="statuss" class="text-center col-md-offset-4" color="white">Category</label>
        <select class="form-control" id="statuss">
          <option value="">All</option>
          <option value="">Elect</option>
          <option value="">Fashion</option>
        </select>
      </div>


      <!--<router-link to="/details" tag="li" active-class="active" exact><a>Details</a></router-link>-->
      <form class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search Product">
        </div>
        <button type="submit" class="btn btn-default">Search</button>
      </form>
    </ul>
  </div>

</template>

<script>
  export default {
    props:{
      productsToView:{
        type:Array,
        default:[]
      },
      selectViewProduct:{}
    },
    computed:{
      onGo(){
        return this.selection
      }
    },
    methods:{
      onNew(){
          this.$router.push({path:'/products/new'})
      },
      onGos(){
        this.selectViewProduct = this.onGo
        console.log(this.selectViewProduct)
      }
    },
    data(){
      return{
        selection:''
      }
    }
  }
</script>

<style scoped>
  div .header {
    background-color: snow;
  }
</style>
