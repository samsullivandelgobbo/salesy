<script>
  let stockNum = "stockNUm"
  let make = "make"
  let model = "model"
  let year = "year"
  let price = "price"

  async function postVehicle() {
    const res = await fetch("http://localhost:4000/Inventory", {
      method: "POST",
      body: JSON.stringify({
        stockNum,
        make,
        model,
        year,
        price,
      }),
    })
    const json = await res.json();
    
  }
</script>
<div>
  <h1> test</h1>
</div>
<div class="flex flex-row justify-center">
  <div class="basis-1/2">
    <form action="http://localhost:4000/Inventory" method="POST">
      <input
        id="stockNum"
        value="stockNum"
        type="text"
        placeholder="Stock Number"
        class="input w-full max-w-xs"
      />
      <input
        id="make"
        value="make"
        type="text"
        placeholder="Make"
        class="input w-full max-w-xs"
      />
      <input
        id="model"
        value="model"
        type="text"
        placeholder="Model"
        class="input w-full max-w-xs"
      />
      <input
        id="year"
        value="2000"
        type="text"
        placeholder="Year"
        class="input w-full max-w-xs"
      />
      <input
        id="price"
        value="2000"
        type="text"
        placeholder="Price"
        class="input w-full max-w-xs"
      />
      <button type="submit" value="submit">
      Upload

    </button>
  </form>
    <p>
      Result:
    </p>
    <pre>
    </pre>
  </div>
</div>
