<script>
  import { UserFavorites, UserName } from "../../stores";
  import axios from "axios";
  import { onMount } from "svelte";
  import VehicleCard from "../../components/client/inventory/VehicleCard.svelte";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  let options = {
    autoplay: true,
    loop: true,
    perPage: 4,
  };
  let params;
  let items;
  let userName;
  let userFavorites;
  UserName.subscribe((value) => {
    userName = value;
  });
  UserFavorites.subscribe((value) => {
    userFavorites = value;
  });

  async function GetFavs() {
    params = {
      f: "_id",
      v: await userFavorites,
    };
    const res = await axios("http://localhost:4000/inventory/multiple", {
      params,
    });
    let items = res.data;
    return items;
  }
  let promise = GetFavs();
</script>

<div class="flex flex-row">
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar">
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
        <div class="flex-1 px-2 mx-2" />
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li><a>Messages</a></li>
            <li><a>Favorites</a></li>
          </ul>
        </div>
      </div>
      <div class="flex relatice left-14 p-12">
        <h1 class="text-xl font-bold">Welcome User</h1>
      </div>
      <div class="flex relative left-14">
        <h1 class="text-lg font-bold">Favorites</h1>
      </div>
      <div class="flex p-4">
        {#await promise then items}
          <Splide {options} hasTrack={false}>
            <SplideTrack>
              {#each items as item}
                <SplideSlide>
                  <div class="px-4 flex mb-4">
                    <VehicleCard {item} />
                  </div>
                </SplideSlide>
              {/each}
            </SplideTrack>
          </Splide>
        {/await}
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li><a>Messages</a></li>
        <li><a>Favorites</a></li>
      </ul>
    </div>
  </div>
</div>
