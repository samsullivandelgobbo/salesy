<script>
  import { page } from '$app/stores'
  import VehicleView from '../../components/client/inventory/VehicleView.svelte'

  let data
  let item
  let id = $page.params.id
  


  
</script>

<VehicleView {id}/>



