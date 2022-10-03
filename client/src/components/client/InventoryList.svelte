<script lang="ts">
  import axios from 'axios'
  import { onMount } from 'svelte'
  export let data:any
  export let testdata:any
  export let testdata1:any
  export let testdatauno:any
  export let imgdata:any
  onMount(async () => {
    data = await axios.get('http://localhost:4000/inventory')
    let data1 = data.data
    console.log(data1)
    console.log(typeof(data1))
    console.log(data1[1])
    console.log(data1[1].stockNum)
    console.log(typeof(data1[1].stockNum))
    testdata = await data.data
    testdata1 = await testdata[1]
    testdatauno = await testdata1.stockNum
    imgdata = await testdata1.mediaPath
    imgdata = imgdata + testdatauno + "0.jpg"
    console.log(testdata[1].stockNum)
    console.log(testdata[1].mediaPath)

  })

</script>

<pre>{JSON.stringify(testdatauno)}</pre>
<h1>{testdatauno}</h1>
<img alt="img" src="{imgdata}"/>

