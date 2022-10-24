<script lang="ts">
  import { loggedIn, UserId, UserFavorites } from "../../../stores";
  import LoginModal from "../LoginModal1.svelte";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import { onMount } from "svelte";
  import axios from "axios";

  let main: Splide;
  let thumbs: SplideSlide;

  // login modal stuff
  let name = "world";

  let selection;

  // Callback function provided to the `open` function, it receives the value given to the `close` function call, or `undefined` if the Modal was closed with escape or clicking the X, etc.
  function setSelection(res) {
    selection = res;
  }

  const mainOptions = {
    type: "loop",
    perPage: 1,
    gap: "1rem",
    pagination: false,
    height: "32rem",
    autoplay: true,
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center" as const,
    isNavigation: true,
    updateOnMove: true,
  };

  onMount(() => {
    if (main && thumbs) {
      main.sync(thumbs.splide);
    }
    for (let x in userFavorites) {
      if (userFavorites[x] == item._id) {
        favorite = true;
      }
    }
  });

  let loggedin;
  let userId;
  let userFavorites;

  loggedIn.subscribe((value) => {
    loggedin = value;
  });
  UserId.subscribe((value) => {
    userId = value;
  });
  UserFavorites.subscribe((value) => {
    userFavorites = value;
  });

  let favorite = null;

  export let item: any;

  async function addToFavorites() {
    favorite = true;
    let data = {
      id: await userId,
      favorite: await item._id,
    };
    console.log(data);

    const addFav = await axios({
      method: "post",
      url: "http://localhost:4000/user/favorite",
      data: data,
    }).then(function (response) {
      console.log(response);
    });
  }
</script>

<div class="card card-compact bg-base-100 hover:bg-base-200">
  <figure>
    <a href="/inventory/{item.stockNum}">
      <img src={item.mediaPath + item.stockNum + "0.jpg"} alt="Car" />
    </a>

    {#if loggedin}
      {#if favorite}
        <div class="absolute right-4 top-4 hover:scale-125">
          <button on:click={addToFavorites}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="red"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart hover:stroke-red-500 focus:hidden"
              ><path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              /></svg
            >
          </button>
        </div>
      {:else}
        <div class="absolute right-4 top-4 hover:scale-125">
          <button on:click={addToFavorites}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart hover:stroke-red-500 focus:hidden"
              ><path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              /></svg
            >
          </button>
        </div>
      {/if}
    {:else}
      <div class="absolute right-4 top-4 hover:scale-125">
        <LoginModal>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-heart hover:stroke-red-500 focus:hidden"
            ><path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            /></svg
          >
        </LoginModal>
      </div>
    {/if}
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      <a href="/inventory/{item.stockNum}">
        {item.year + " " + item.make + " " + item.model}
      </a>
    </h2>
    <div class="flex flex-col lg:flex-row font-medium text-base">
      <div class="basis-1/2">
        ${item.price}
      </div>
      <div class="basis-1/2 lg:text-right">
        {item.odometer} KM
      </div>
    </div>
    <div class="card-actions place-content-end">
      <!-- The button to open modal -->

      <label for="my-modal-{item.stockNum}" class="btn glass modal-button"
        >Quick View</label
      >

      <!-- Put this part before </body> tag -->
      <input
        type="checkbox"
        id="my-modal-{item.stockNum}"
        class="modal-toggle"
      />
      <label for="my-modal-{item.stockNum}" class="modal cursor-pointer">
        <div class="modal-box w-full">
          <figure>
            <div class="w-full">
              <Splide
                options={mainOptions}
                bind:this={main}
                aria-labelledby="thumbnails-example-heading"
              >
                {#each item.photos as photo}
                  <SplideSlide>
                    <img src={photo} alt={item.model} />
                  </SplideSlide>
                {/each}
              </Splide>

              <Splide options={thumbsOptions} bind:this={thumbs}>
                {#each item.photos as photo}
                  <SplideSlide>
                    <img src={photo} alt={item.model} />
                  </SplideSlide>
                {/each}
              </Splide>
            </div>
          </figure>
          <h3 class="text-lg font-medium">
            {item.year + " " + item.make + " " + item.model}
          </h3>
          <h1 class="text-md font-medium">Vehicle Details</h1>
          <div class="grid grid-cols-2 gap-4 p-4">
            <div class="flex w-8">
              <img
                src="https://shop.canadadrives.ca/_nuxt/img/odometer.f95737f.svg"
              />
              <h1 class="px-2 text:medium">Kilometers</h1>
            </div>
            <div class="flex w-8">
              <img
                src="https://shop.canadadrives.ca/_nuxt/img/engine.d95f87e.svg"
              />
              <h1 class="px-2 text:medium">Engine</h1>
            </div>
            <div class="flex w-8">
              <img
                src="https://shop.canadadrives.ca/_nuxt/img/transmission.5674de1.svg"
              />
              <h1 class="px-2 text:medium">Transmission</h1>
            </div>
            <div class="flex w-8">
              <img
                src="https://shop.canadadrives.ca/_nuxt/img/gas-pump.4609674.svg"
              />
              <h1 class="px-2 text:medium">Fuel Economy</h1>
            </div>
            <div class="flex w-8">
              <img
                src="https://shop.canadadrives.ca/_nuxt/img/drivetrain.157daec.svg"
              />
              <div class="flex-cols-2">
                <h1 class="px-2 text:medium">Drivetrain</h1>
                <div class="px-4">coco</div>
                <button class="btn btn-primary"
                  ><a href="/inventory/{item.stockNum}">View Details</a></button
                >
              </div>
            </div>
          </div>
        </div></label
      >
    </div>
  </div>
</div>
