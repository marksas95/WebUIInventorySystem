<template>
  <div class="panel panel-default header">
    <ul class="class nav nav-pills">
      <button class="btn btn-primary" @click="onNew">Add Warehouse</button>
      <div class="form-group col-md-2">
        <label for="status" class="text-center col-md-offset-4" color="white">Status</label>
        <select class="form-control"
                id="status"
                v-model="selectedStatus"
                :onchange="onFilter">
          <option v-for="o in warehouseToView"
                  :value="o">
            {{o}}
          </option>
        </select>
      </div>
    </ul>
  </div>

</template>

<script>
  export default {
    props: {
    },
    computed: {
      onFilter() {
        this.$store.getters.FILTER_WAREHOUSES(this.selectedStatus)
      }
    },
    methods: {
      onNew() {
        this.$router.push({path: '/warehouse/new'})
      }
    },
    data() {
      return {
        selectedStatus: 'All',
        warehouseToView: ['All', 'Active Only', 'Inactive Only']
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  div .header {
    background-color: snow;
  }
</style>
