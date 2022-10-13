<script lang="ts">
  import axios from "axios"
  let formData = new FormData()
  let files
  let stockNum: any
  let make: any
  let model: any
  let year: any
  let price: any
  let vin: any
  let odometer: any
  let color: any
  let location:any
  let engine:any
  let fuel:any
  let drivetrain:any
  let platform:any
  let transmission:any
  let description:any
  let notes:any

  async function vinPopulate(vin) {
    console.log(vin)
    let vindata = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`
    )
    console.log(vindata)
  }

  async function doPost() {
    let mediaPath = `http://localhost:4000/uploads/${stockNum}/`
    let filelen = files.length

    let data = {
      stockNum,
      make,
      model,
      year,
      price,
      mediaPath,
      filelen,
      color,
      odometer,
      specs: {
        fuel,
        engine,
        platform,
        drivetrain,
        transmission
      },
      location,
      description,
      notes,
    }
    let jsondata = JSON.stringify(data)
    formData.append("jsondata", jsondata)
    for (let x = 0; x < filelen; x++) {
      formData.append("file[]", files[x])
    }

    console.log(formData)
    const doPost = await axios({
      method: "post",
      url: "http://localhost:4000/inventory/addvehicle",
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
<div class="px-10">
  <button on:click={() => vinPopulate(vin)} class="btn btn-wide"
    >Populate Fields</button
  >
</div>
<form>
  <div class="grid gap-6 md:grid-cols-2 mb-2 p-10">
    <div>
      <label for="vin" class="block mb-2 text-sm font-meidum">VIN</label>
      <input
        id="vin"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={vin}
      />
    </div>
    <div>
      <label for="odometer" class="block mb-2 text-sm font-meidum"
        >Kilometers</label
      >
      <input
        id="odometer"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={odometer}
      />
    </div>
    <div>
      <label for="color" class="block mb-2 text-sm font-meidum">Colour</label>
      <input
        id="color"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={color}
      />
    </div>
    <div>
      <label for="stocknum" class="block mb-2 text-sm font-meidum"
        >Stock Number</label
      >
      <input
        id="stocknum"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={stockNum}
      />
    </div>
    <div>
      <label for="make" class="block mb-2 text-sm font-meidum"
        >Make/Manufacturer</label
      >
      <input
        id="make"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={make}
      />
    </div>
    <div>
      <label for="model" class="block mb-2 text-sm font-meidum">Model</label>
      <input
        id="model"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={model}
      />
    </div>
    <div>
      <label for="year" class="block mb-2 text-sm font-meidum">Year</label>
      <input
        id="year"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={year}
      />
    </div>
    <div>
      <label for="price" class="block mb-2 text-sm font-meidum">Price</label>
      <input
        id="price"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        bind:value={price}
      />
    </div>

    <div>
      <label for="file" class="block mb-2 text-sm font-meidum"
        >Upload Photos</label
      >
      <input
        id="file"
        type="file"
        placeholder="Select Files"
        class="file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        bind:files
        multiple
      />
    </div>
    <div class="pt-4">
      <button type="submit" on:click={doPost} class="btn btn-wide"
        >Submit</button
      >
    </div>
  </div>
</form>
