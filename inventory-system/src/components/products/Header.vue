<template>
  <div>
    <ul class="class nav nav-pills">
      <!--<router-link to="/" tag="li" active-class="active" exact><a>List</a></router-link>-->
      <router-link to="/products" tag="li" active-class="active" exact><a>List</a></router-link>
      <router-link to="/create" tag="li" active-class="active" exact><a>Create</a></router-link>
      <router-link to="/details" tag="li" active-class="active" exact><a>Details</a></router-link>
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
</script>

<style scoped>

</style>
