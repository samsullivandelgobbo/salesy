<script>
  let images
  
  async function submitForm(){
    
  }

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
      type="text"
      bind:value={stockNum}
      />
      <input
      type="text"
      bind:value={make}
      />
      <input
      type="text"
      bind:value={model}
      />
      <input
      type="text"
      bind:value={year}
      />
      <input
      type="text"
      bind:value={price}
      />
      <button type="button" on:click={postVehicle}>
      Upload

    </button>
  </div>
</div>