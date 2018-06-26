<template>
  <div>
    <div class="panel panel-default col-md-6 col-md-offset-3">
      <div class="panel-body">
        <div class="row">

            <form>
              <div class="row">
                <div class="form-group ">
                  <label for="name">Name</label>
                  <input type="text" id="name" class="form-control col-md-4 " v-model.lazy="warehouse.name">
                </div>
                <div class="form-group">
                  <label for="location">Location</label>
                  <input type="text" id="location" class="form-control" v-model.lazy="warehouse.address">
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                  <label for="description">Description</label><br>
                  <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                  <textarea id="description" rows="5" class="form-control"
                            v-model.lazy="warehouse.description"></textarea>
                </div>
              </div>

              <div class="row col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="row text-right">
                  <button class="btn btn-primary" @click="onSave" type="button">Save</button>
                  <button class="btn btn-primary" @click="onCancel" type="button">Cancel</button>
                </div>
              </div>
            </form>

        </div>
      </div>
    </div>
  </div>
</template>


<script>

  // import WarehouseHeader from "../../components/warehouse/WarehouseHeader.vue";

  export default {
    data() {
      return {
        warehouse: {
          name: '',
          address: '',
          description: ''
        }
      };
    },
    methods: {
      onCancel() {
        this.$router.push({path: "/warehouses"});
        this.$destroy()
      },
      onSave() {
        this.$store.dispatch('CREATE_WAREHOUSE', this.warehouse)
        this.$router.push({path: "/warehouses"});
        this.$destroy()
      }
    },
    components: {
      //   appHeader: WarehouseHeader

    },
    created() {

      if (this.id !== 'new') {
        this.warehouse = this.$store.getters.GET_WAREHOUSE(parseInt(this.id));
      }

    },
    props: {
      id: {
        type: String,
        default: ""
      }
    }
  };
</script>


<style>
</style>
