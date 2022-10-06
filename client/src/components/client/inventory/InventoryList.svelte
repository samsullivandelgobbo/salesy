<script lang="ts">

  export let item
  export let i

  console.log(item)
  
  console.log(item.stockNum)

</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="{item.mediaPath + item.stockNum + '0.jpg'}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{item.year + item.make + item.model}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>