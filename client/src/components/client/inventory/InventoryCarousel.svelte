<script>
  import { onMount } from "svelte"
  import axios from "axios"
  import VehicleCard from "./VehicleCard.svelte"
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide"
  import "@splidejs/svelte-splide/css"

  let data
  let items
  let randomFeatured

  onMount(async () => {
    data = await axios.get("http://localhost:4000/inventory/")
    items = await data.data

    console.log(items)

    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 3)

      randomFeatured.push(items[random])
    }
  })
  async function getRandom() {
    const res = await axios.get("http://localhost:4000/inventory")
    items = res.data
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 3)
      console.log(random)
      randomFeatured.push(items[random])
      
    }
    return randomFeatured
  }
  console.log(randomFeatured)
  let promise = getRandom()
</script>

<Splide hasTrack={false}>
  {#await promise then randomFeatured}
    <SplideTrack>
      {#each randomFeatured as item}
        <SplideSlide>
          <VehicleCard {item} />
        </SplideSlide>
      {/each}
    </SplideTrack>
  {/await}
</Splide>
