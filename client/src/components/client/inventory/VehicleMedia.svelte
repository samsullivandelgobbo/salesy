<script>
    import axios from "axios"
  import { onMount } from "svelte";
  export let id
  console.log('vehicleMedia.svelte')
  console.log(id)
  let item
  let i = 1

  onMount(async () => {
    let data = await axios.get(`http://localhost:4000/inventory/stocknum/${id}`)
    item = data.data[0]
    console.log(item)
    console.log('vehiclemedia.svelte')
  })
</script>

