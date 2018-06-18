<template>
  <div>
    <table  class="table">
      <thead>
      <tr>
        <template v-for="tableHeader in tableHeaders">
          <th>{{tableHeader}}</th>
        </template>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="x in tableData">
        <template v-for="value in x.data">
          <th>{{value}}</th>
        </template>
          <th>
            <button @click="onEdit(x.id)" class="btn btn-primary">Edit</button>
            <button @click="onDelete(x.id)" class="btn btn-danger">Delete</button>
          </th>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      tableHeaders: {
        type: Array,
        default: []
      },
      tableData: {
        type: Array,
        default: []
      },
      onEdit:{
        type:Function,
        default: () => {}
      },
      onDelete:{
        type:Function,
        default: () => {}
      }
    },
    computed:{

    },
    created: function () {
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
