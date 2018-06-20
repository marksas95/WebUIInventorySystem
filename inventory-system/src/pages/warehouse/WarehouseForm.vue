<template>
	<div>
		
		<div class="container">
			<form>
	
				<div class="row">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" id="name" class="form-control" v-model.lazy="warehouse.name">
					</div>
					<div class="form-group">
						<label for="location">Location</label>
						<input type="text" id="location" class="form-control" v-model.lazy="warehouse.location">
					</div>
					<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
						<label for="description">Description</label><br>
						<!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
						<textarea id="description" rows="5" class="form-control" v-model.lazy="warehouse.description"></textarea>
					</div>
				</div>
	
				<div class="row col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<div class="row text-right">
						<button class="btn btn-primary" @click="onSave">Save</button>
						<button class="btn btn-primary" @click="onCancel">Cancel</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>




<script>
	
	export default {
		data() {
			return {
				warehouse: {}
			}
		},
		methods:{
			onCancel(){
				this.$router.push({path: '/warehouses'})
			}
		},
		components:{
			appHeader: Header
		},
		created(){
			this.warehouse = this.$store.getters.getWarehouse(parseInt(this.id))
			console.log(this.warehouse)
		},
		props:{
			id:{
				type:String,
				default:''
			}
		}

	
	};
</script>


<style>
	
</style>
