<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false">
          </button>
          <router-link to="/" tag="li" active-class="active" exact><a class="navbar-brand" href="#">Inventory System</a></router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li> <a @click="toWarehouses">Warehouse</a></li>
            <li class="active"><router-link to="/products" active-class="active" exact><a href="#">Products</a></router-link></li>
            <li class="active"> <router-link to="/categories" active-class="active" exact><a href="#">Category</a></router-link></li>
            <li class="active"> <router-link to="/reconciled-products" active-class="active" exact><a href="#">Reconciled Products</a></router-link></li>
            <li class="active"> <router-link to="/suppliers" active-class="active" exact><a href="#">Suppliers</a></router-link></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a>Action</a></li>
                <li><a>Another action</a></li>
                <li><a>Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a>Separated link</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    </div>
</template>

<script>
    export default {
        name: "NavigationBar",
      methods:{
          toWarehouses(){
            this.$router.push({ path:'/warehouses'})
          },
          toProducts(){

          },
          toCategories(){

          },
          toSuppliers(){

          }
      }
    }
</script>

<style scoped>

</style>
