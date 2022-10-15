<script>
  import VehicleCard from "./VehicleCard.svelte";
  import axios from 'axios'
  import { beforeUpdate } from "svelte";
  import { onMount } from 'svelte'
  export let items
  export let data
</script>

<div class="grid lg:grid-cols-3 gap-4 content-start px-6 py-4">
{#if items}
  {#each items as item}
    <VehicleCard {item}/>
  {/each}
{/if}
</div>