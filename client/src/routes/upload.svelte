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
        'Content-Type': 'multipart/form-data'
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


<form>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
          <label for="stock_num" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stock Number</label>
          <input bind:value={stockNum} type="text" id="stock_num" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ABC123" required>
      </div>
      <div>
          <label for="make" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Make / Manufacturer</label>
          <input bind:value={make} type="text" id="make" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hyundai" required>
      </div>
      <div>
          <label for="model" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Model</label>
          <input bind:value={model} type="text" id="model" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Elantra" required>
      </div>  
      <div>
          <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Year</label>
          <input bind:value={year} type="number" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2022" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
      </div>
      <div>
          <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
          <input bind:value={price} type="number" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20,000" required>
      </div>
      <div>
        <label for ="upload" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload Photos:</label>
        <input type="file" id="upload" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" multiple>

      </div>

  <button type="submit" on:click={postVehicle} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>