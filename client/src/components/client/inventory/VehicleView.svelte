<script>
  import { onMount } from "svelte"
  import axios from "axios"
  import VehicleSpecs from "./VehicleMedia.svelte"
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide"
  import "@splidejs/svelte-splide/css"
  import { loggedIn } from '../../../stores'
  import LoginModal from '../LoginModal.svelte'
  let loggedin

  loggedIn.subscribe(value => {
    loggedin = value
  })


  let options = {
    rewind: true,
    autoplay: true,
  }



  export let id
  let data
  let item
  let i
  let photos
  let title
  let price
  

  onMount(async () => {
    let data = await axios.get(`http://localhost:4000/inventory/stocknum/${id}`)
    item = data.data[0]
    console.log(item)
    title = item.year + " " + item.make + " " + item.model
    price = item.price
  })

  async function getPhotos() {
    const res = await axios.get(
      `http://localhost:4000/inventory/stocknum/${id}`
    )
    const photos = res.data[0].photos
    console.log(photos)
    return photos
  }

  let promise = getPhotos()
</script>

<div class="flex flex-col lg:flex-row lg:p-16 sm:p-8">
  <div class="sm:w-full lg:basis-1/2">
    {#await promise then photos}
      <Splide hasTrack={false} {options}>
        <SplideTrack>
          {#each photos as photo}
            <SplideSlide>
              <img src={photo} alt={title} />
            </SplideSlide>
          {/each}
        </SplideTrack>
      </Splide>
    {/await}
  </div>
  <div class="basis-1/2 px-4">
    <div class="flex flex-col">
      <div class="basis-1/2">
        <h1 class="text-xl font-bold text-gray-900 md:text-2xl">{title}</h1>
        <div class="basis-1/3 py-2 pb-6">
          <div class="flex flex-row">
            <h1 class="normal-nums text-xl font-md text-gray-900 md:text-2xl">
              ${price}
            </h1>
            <h2 class="normal-nums mx-6">
              ({Math.round(price / 72 / 2)}/biweekly)
            </h2>
          </div>
        </div>
        <div class="btn btn-rounded">Get Started</div>
        <LoginModal/>
      </div>
      <div class="py-4">
      <h1 class="text-md font-medium">Vehicle Details</h1>
        <div class="grid grid-cols-2 gap-4 p-4">
          <div class="flex w-8">
            <img src="https://shop.canadadrives.ca/_nuxt/img/odometer.f95737f.svg"/>
            <h1 class="px-2 text:medium">Kilometers</h1>
          </div>
          <div class="flex w-8">
            <img src="https://shop.canadadrives.ca/_nuxt/img/engine.d95f87e.svg"/>
            <h1 class="px-2 text:medium">Engine</h1>
          </div>
          <div class="flex w-8">
            <img src="https://shop.canadadrives.ca/_nuxt/img/transmission.5674de1.svg"/>
            <h1 class="px-2 text:medium">Transmission</h1>
          </div>
          <div class="flex w-8">
            <img src="https://shop.canadadrives.ca/_nuxt/img/gas-pump.4609674.svg"/>
            <h1 class="px-2 text:medium">Fuel Economy</h1>
          </div>
          <div class="flex w-8">
            <img src="https://shop.canadadrives.ca/_nuxt/img/drivetrain.157daec.svg"/>
            <div class="flex-cols-2">
            <h1 class="px-2 text:medium">Drivetrain</h1>
            <div class="px-4"> coco</div>

          </div>
          </div>

        </div>
    <div class="">
      Features
    </div>

    </div>
    </div>
  </div>
  <div>
    <h1>Price Details</h1>

  </div>
</div>



<!-- <div class="flex p-10 place-content-start ">
  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">{title}</h1>
</div>
<div class="flex flex-row px-10">
  <div class="basis-1/2">
    <div class="flex flex-col group">
      {#await promise then photos}
        <div class="carousel">
          {#each photos as photo, i}
            <div id="slide{i}" class="carousel-item relative w-full">
              <img src={photo} class="w-full" alt="car" />
              <div
                class="invisible group-hover:visible absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a class="btn btn-circle" href="#slide{i - 1}">❮</a>
                <a class="btn btn-circle" href="#slide{i + 1}">❯</a>
              </div>
            </div>
          {/each}
        </div>
      {/await}
      
    </div>
  </div>
  <div class="basis-1/2 p-4">
  
  </div>
</div> -->

<!-- 
<div class="py-8">
  <div class="tabs">
    <button class="tab tab-bordered" on:click={overview}>Tab 1<button> 
    <button class="tab tab-bordered">Tab 2<button> 
    <button class="tab tab-bordered">Tab 3<button> 
    <button class="tab tab-bordered">Tab 3<button> 
    <button class="tab tab-bordered">Tab 3<button> 
  </div>
{#if overview}
<div class="flex">COCO is big</div>
{/if}
</div> -->