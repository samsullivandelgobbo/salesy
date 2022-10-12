<script>
  import { onMount } from "svelte";
  import axios from "axios";

  export let id
  let data 
  let item
  let i = 1
  
  
  import VehicleMedia from "./VehicleMedia.svelte";

  console.log(id)
  
  onMount(async () => {
    let data = await axios.get(`http://localhost:4000/inventory/stocknum/${id}`)
    item = data.data[0]
    console.log(item)
    console.log('vehicleview.svelte')

  })
  
</script>

<div class="flex">
  <div class="card lg:card-side bg-base-100 shadow-xl">

    <figure>
      <VehicleMedia {id}/>
    </figure>
    
    
    <div class="card-body">
      <h2 class="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>
</div>