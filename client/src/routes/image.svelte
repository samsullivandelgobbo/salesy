<!-- <script lang="ts">
    let files:any
    async function postVehicle() {
    let formData = new FormData()
    formData.append('files', files)
    const res = await fetch("http://localhost:4000/inventory/vehicleimages", {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
    const json = await res.json()
    
    
  }
</script>
<form class="flex items-center space-x-6">
    <div class="shrink-0">
    
    </div>
    <label class="block">
      <span class="sr-only">Choos Photo</span>
      <input type="file" class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
        bind:files
        name="files"
      />
    </label>
<button type="submit" on:click={postVehicle} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> -->


<form action="http://localhost:4000/inventory/vehicleimages" method="post" enctype="multipart/form-data">
    <input type="file" name="files" />
    <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>