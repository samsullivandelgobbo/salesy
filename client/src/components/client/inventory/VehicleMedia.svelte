<script>
    import axios from "axios"
  import { onMount } from "svelte";
  export let id
  console.log('vehicleMedia.svelte')
  console.log(id)
  let item
  let i = 1

  onMount(async () => {
    let data = await axios.get(`http://localhost:4000/inventory/stocknum/${id}`)
    item = data.data[0]
    console.log(item)
    console.log('vehiclemedia.svelte')
  })
</script>

<!-- <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={item.mediaPath + item.stockNum + i + '.jpg'} class="w-full" />
    <div
      class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
    >
      <a href="#slide{i-1}" class="btn btn-circle">❮</a>
      <a href="#slide2{i+1}" class="btn btn-circle">❯</a>
    </div>
  </div>
</div> -->
