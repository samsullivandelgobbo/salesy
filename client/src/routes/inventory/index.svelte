<script lang="ts">
  import Item from "../../components/client/inventory/Item.svelte"
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
              placeholder="Search…"
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
          <li>
            <select class="select w-full max-w-xs">
              <option disabled selected>Pick your favorite Simpson</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </li>
          <li>
            <select class="select w-full max-w-xs">
              <option disabled selected>Pick your favorite Simpson</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
    <Item />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100">
      <!-- Sidebar content here -->
      
      <li>
        <input
          type="range"
          min="0"
          max="100"
          value="40"
          class="range range-primary"
        />
      </li>
      <li>
        <select class="select w-full max-w-xs">
          <option disabled selected>Pick your favorite Simpson</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </li>
      <li>
        <select class="select w-full max-w-xs">
          <option disabled selected>Pick your favorite Simpson</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </li>
      <li>
        <select class="select w-full max-w-xs">
          <option disabled selected>Pick your favorite Simpson</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </li>
      <li>
        <select class="select w-full max-w-xs">
          <option disabled selected>Pick your favorite Simpson</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </li>
    </ul>
  </div>
</div>
