<script>
  import InventoryList from "./InventoryList.svelte";
  import axios from 'axios'
  import { beforeUpdate } from "svelte";
  import { onMount } from 'svelte'

  let items
  let data
  
  onMount(async () => {
    data = await axios.get('http://localhost:4000/inventory')
    items = data.data
    console.log(items)
    console.log('item.svelte')
  })


</script>
<div class="grid grid-cols-3 gap-4 content-start px-6 py-4">
{#if items}
  {#each items as item, i}
    <InventoryList {item} {i}/>
  {/each}
{/if}
</div>