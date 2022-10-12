<script lang="ts">
  import axios from 'axios'
  let formData = new FormData()
  let files
  let stockNum:any
  let make:any
  let model:any
  let year:any
  let price:any
  let vin:any

  

  async function doPost() {
    let mediaPath = `http://localhost:4000/uploads/${ stockNum }/`
    let filelen = files.length

    let data = { stockNum, make, model, year, price, mediaPath, filelen}
    let jsondata = JSON.stringify(data)
    formData.append('jsondata', jsondata)
    for (let x = 0; x < filelen; x++) { 
      console.log(x)
      formData.append('file[]', files[x])
    }
    
    
    const doPost = await axios({
      method: 'post',
      url: 'http://localhost:4000/inventory/addvehicle',
      data: formData,
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (response) {
      console.log(response)
    })
  }
</script>

<form>
  <div class="grid gap-6 md:grid-cols-2 mb-2 p-10">
    <div>
      <label for="vin" class="block mb-2 text-sm font-meidum">VIN</label>
      <input id="vin" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" bind:value={vin}/>
    </div>
    <div>
      <label for="stocknum" class="block mb-2 text-sm font-meidum">Stock Number</label>
      <input id="stocknum" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" bind:value={stockNum}/>
    </div>
    <div>
    <label for="make" class="block mb-2 text-sm font-meidum">Make/Manufacturer</label>
    <input id="make" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" bind:value={make}/>
  </div>
  <div>
    <label for="model" class="block mb-2 text-sm font-meidum">Model</label>
    <input id="model" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" bind:value={model}/>
  </div>
  <div>
    <label for="year" class="block mb-2 text-sm font-meidum">Year</label>
    <input id="year" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" bind:value={year}/>
  </div>
  <div>
    <label for="price" class="block mb-2 text-sm font-meidum">Price</label>
    <input id="price" type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" bind:value={price}/>
  </div>

  <div>
    <label for="file" class="block mb-2 text-sm font-meidum">Upload Photos</label>
    <input id="file" type="file" placeholder="Select Files" class="input input-bordered input-primary w-full max-w-xs" bind:files multiple/>
  </div>
    <button type="submit" on:click={doPost} class="block mb-2 text-sm font-medium bg-primary px-5 py-2.5 text-center">Submit</button>
  </div>
</form>