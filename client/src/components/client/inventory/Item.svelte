<script>
  import InventoryList from "./InventoryList.svelte";
  import axios from 'axios'
  import { beforeUpdate } from "svelte";
  import { onMount } from 'svelte'
  export let items
  export let data
</script>

<div class="grid grid-cols-3 gap-4 content-start px-6 py-4">
{#if items}
  {#each items as item}
    <InventoryList {item}/>
  {/each}
{/if}
</div>