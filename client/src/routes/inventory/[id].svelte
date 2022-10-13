<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte';
  import axios from 'axios'
  import VehicleView from '../../components/client/inventory/VehicleView.svelte'
  export const prerender = true
  

  let item
  let id = $page.params.id

  



  
</script>

<VehicleView {id} />



