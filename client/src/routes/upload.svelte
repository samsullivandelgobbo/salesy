<script>
  let stockNum = "stockNum"
  let make = "make"
  let model = "model"
  let year = "year"
  let price = "price"
  

  async function postVehicle() {
    const res = await fetch("http://localhost:4000/Inventory", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stockNum,
        make,
        model,
        year,
        price
      }),
    })
    const json = await res.json()
    
    
  }
</script>

<div class="flex flex-row justify-center">
  <div class="basis-1/2">
      <input
      bind:value={stockNum}
      />
      <input
      bind:value={make}
      />
      <input
      bind:value={model}
      />
      <input
      bind:value={year}
      />
      <input
      bind:value={price}
      />
      <button type="button" on:click={postVehicle}>
      Upload

    </button>
  </div>
</div>