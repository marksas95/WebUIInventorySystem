<template>

  <div>
    <div class="row">
      <form>
        <div class="col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="category.name">
          </div>
          <div class="row text-right">
            <button type="button"  class="btn btn-primary" @click="onSaveCategory">Save</button>
            <button class="btn btn-primary" @click="onCancel">Cancel</button>
          </div>
        </div>
      </form>

    </div>

  </div>

</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CategoryForm",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      ...mapActions(["CREATE_CATEGORY", "UPDATE_CATEGORY"]),
      categoryList: {},
      category: {
      }
    };
  },
  created() {
    this.category = this.$store.getters.getCategory(parseInt(this.id));
    console.log(this.categoryList);
  },
  methods: {
    onSaveCategory() {
      console.log(this.category)
      if (this.id === "new") {
        this.CREATE_CATEGORY(this.category);
        this.$router.push({ path: "/categories" });
      } else {
        console.log("update");
        console.log(this.categoryList);
        this.UPDATE_CATEGORY(this.category);

        this.$router.push({path: '/categories'})
      }
    },
    onCancel() {
      this.$router.push({ path: "/categories" });
    }
  }
};
</script>


<style>
</style>
