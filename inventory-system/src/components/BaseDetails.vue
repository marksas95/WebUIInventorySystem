<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>{{detailsTitle}}</h4>
        </div>
        <div class="panel-body">
          <p v-for="(value, key) in objectDetails">{{key}}: {{value}}</p>
          <button @click="onClick('Details')">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseCreateForm",
    props: {
      detailsTitle: {
        type: String,
        default: ''
      },
      objectDetails: {
        type: Object,
        default: () => ({})
      },
      onClick: {
        type: Function,
        default: () => {
        }
      }
    },
    created() {
      console.log(this.detailsTitle)
      console.log(this.objectDetails)
    }
  }
</script>

<style scoped>

</style>
