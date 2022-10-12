<script lang="ts">
  import Item from "../../components/client/inventory/Item.svelte"
  import { onMount } from "svelte";
  import axios from "axios";
  
  let data
  let items
  let makes = []
  let prices = []
  let years = []
  let uniqyears
  let uniqprices
  let uniqmakes
  
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
    uniqyears = [...new Set(years)]
    uniqprices = [...new Set(prices)]
    uniqmakes = [...new Set(makes)]
    console.log(uniqyears)
    console.log(uniqmakes)
    console.log(uniqprices)
    console.log(years)


  
})
  async function sortVehicles () {
        data = await axios.get(`http://localhost:4000/inventory/year/1`)
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
          <input type="checkbox" class="toggle" on:change={sortVehicles} />
          <li>
            <select class="select w-full min-w-24">
              <option disabled selected>Sort By</option>
              {#if uniqmakes}
                {#each uniqmakes as make}
                  <option>{make}</option>
                {/each}
              {/if}
            </select>
          </li>
        </ul>
      </div>
    </div>
    
    <Item items={items} data={data} />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100">
      <!-- Sidebar content here -->
      <h1>Filter Vehicles</h1>
      <h1>Price</h1>
      <li>
        <input
          type="range"
          min="0"
          max="100"
          value="40"
          class="range range-primary"
          
        />
        <p>0</p>
      </li>
      <li>
        <select class="select w-full max-w-m">
          <option disabled selected>Year</option>
          {#if uniqyears}
            {#each uniqyears as year}
              <option>{year}</option>
            {/each}
          {/if}
        </select>
      </li>          <li>
        <select class="select w-full max-w-m">
          <option disabled selected>Manufacturer</option>
          {#if uniqyears}
            {#each uniqyears as year}
              <option>{year}</option>
            {/each}
          {/if}
        </select>
      </li>          <li>
        <select class="select w-full max-w-m">
          <option disabled selected>Model</option>
          {#if uniqyears}
            {#each uniqyears as year}
              <option>{year}</option>
            {/each}
          {/if}
        </select>
      </li>          <li>
        <select class="select w-full max-w-m">
          <option disabled selected>Fuel</option>
          {#if uniqyears}
            {#each uniqyears as year}
              <option>{year}</option>
            {/each}
          {/if}
        </select>
      </li>
    </ul>
  </div>
</div>
