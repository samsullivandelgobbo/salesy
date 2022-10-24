<script lang="ts">
  import VehicleList from "../../components/client/inventory/InventoryList.svelte"
  import { onMount } from "svelte";
  import axios from "axios";
  import Login from "../../components/client/Login.svelte"


  
  let data
  let items
  let makes = []
  let prices = []
  let years = []
  let colors = []
  let fuel = []
  let uniqcolors
  let uniqyears
  let uniqprices
  let uniqmakes
  let uniqfuel
  let uniqmodels
  
  onMount(async () => {
    data = await axios.get('http://localhost:4000/inventory/')
    items = data.data
    for (let i = 0; i < items.length; i++) {
      makes.push(items[i].make)
    }
    for (let i = 0; i < items.length; i++) {
      prices.push(items[i].price)
    }
    for (let i = 0; i < items.length; i++) {
      years.push(items[i].year)
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i].specs) {
        fuel.push(items[i].specs.fuel)
      }
      else {
        continue
      }
    }

    for (let i = 0; i < items.length; i++) {
      colors.push(items[i].color)
    }

    uniqcolors = [...new Set(colors)]
    uniqfuel = [...new Set(fuel)]
    uniqyears = [...new Set(years)]
    uniqprices = [...new Set(prices)]
    uniqmakes = [...new Set(makes)]




  
})
  async function sortVehicles (query, value) {
        data = await axios.get(`http://localhost:4000/inventory/${query}/${value}`)
        items = data.data
        console.log(items)
  }

</script>

<div class="drawer drawer-mobile">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-seondary-100 px-4">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div class="form-control">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search Vehicles"
              class="input input-bordered"
            />
            <button class="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                /></svg
              >
            </button>
          </div>
        </div>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <select class="select w-full max-w-xs">
            <option disabled selected>Sort Vehicles</option>
            <option on:select={sortVehicles}>Feautured</option>
            <option>Year - High</option>
            <option>Year - Low</option>
            <option>Price - High</option>
            <option>Price - Low</option>
          </select>
        </ul>
      </div>
    </div>


    <VehicleList items={items} data={data} />
    
  </div>
  <div class="drawer-side lg:sticky">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100">
      <!-- Sidebar content here -->

      
      <div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-md font-medium">
          Filter by Years
        </div>
        <div class="collapse-content"> 
          {#if uniqyears}
          {#each uniqyears as year}
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{year}</span> 
              <input type="checkbox" on:click={sortVehicles('year', year)} class="checkbox" />
            </label>
          </div>
          {/each}
        {/if}
        </div>
      </div>

      <div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-md font-medium">
          Filter by Fuel Type
        </div>
        <div class="collapse-content"> 
          {#if uniqfuel}
          {#each uniqfuel as fuel}
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{fuel}</span> 
              <input type="checkbox" on:click={sortVehicles('fuel', fuel)} class="checkbox" />
            </label>
          </div>
          {/each}
        {/if}
        </div>
      </div>
      <div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-md font-medium">
          Filter by Colour
        </div>
        <div class="collapse-content"> 
          {#if uniqcolors}
          {#each uniqcolors as color}
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{color}</span> 
              <input type="checkbox" on:click={sortVehicles('color', color)} class="checkbox" />
            </label>
          </div>
          {/each}
        {/if}
        </div>
      </div>
      <div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-md font-medium">
          Filter by Manufacturer
        </div>
        <div class="collapse-content"> 
          {#if uniqyears}
          {#each uniqmakes as make}
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{make}</span> 
              <input type="checkbox" on:click={sortVehicles('make', make)} class="checkbox" />
            </label>
          </div>
          {/each}
        {/if}
        </div>
      </div>
    </ul>
  </div>
</div>
