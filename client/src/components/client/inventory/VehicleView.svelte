<script>
  import { onMount } from "svelte"
  import axios from "axios"
  import VehicleMedia from "./VehicleMedia.svelte"
  import { Splide, SplideSlide } from "@splidejs/svelte-splide"
  import "@splidejs/svelte-splide/css"

  export let id
  let data
  let item
  let i
  let photos
  let title

  onMount(async () => {
    let data = await axios.get(`http://localhost:4000/inventory/stocknum/${id}`)
    item = data.data[0]
    console.log(item)
    title = item.year + " " + item.make + " " + item.model
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
<div class="flex p-10 place-content-start ">
  <h1>{title}</h1>
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
</div>
