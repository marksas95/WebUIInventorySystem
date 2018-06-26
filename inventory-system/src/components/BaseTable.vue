  <template>
  <div class="background panel">
    <table class="table table-hover">
      <thead>
      <tr>
        <template v-for="tableHeader in tableHeaders">
          <th class=""><strong>{{tableHeader}}</strong></th>
        </template>
        <th class="col-md-3 text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="x in tableData" @click="">
        <template v-for="value in x.data">
          <th><small>{{value}}</small></th>
        </template>
        <th class="col-md-3 text-right">
          <button class="btn btn-primary"
                  @click="buttonFunction(x.id, button); onClick(button);"
                  v-for="button in kindsOfButton"
                  type="button">{{button}}</button>
        </th>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    props: {
      tableHeaders: {
        type: Array,
        default: []
      },
      tableData: {
        type: Array,
        default: []
      },
      onClick: {
        type: Function,
        default: () => {
        }
      },
      kindsOfButton:{
        type:Array,
        default: []
      },
      buttonFunction:{
        type:Function,
        default: () => {}
      }
    },
    methods: {
      click(data){
        console.log(data)
      }
    },

  }
</script>


<style scoped>
  div .background {
    background-color: snow;
    height: align-self;
    background-size: cover;
    background-position: center;
  }
</style>
