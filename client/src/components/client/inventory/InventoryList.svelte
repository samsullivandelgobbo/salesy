<script lang="ts">
  export let item
  export let i

  console.log(item)

  console.log(item.stockNum)
</script>

<div class="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img src={item.mediaPath + item.stockNum + "0.jpg"} alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{item.year + item.make + item.model}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <!-- The button to open modal -->
      <label for="my-modal-4" class="btn modal-button">view</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
          <div class="modal-box">
            <h3 class="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <figure>
              <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                  <img src={item.mediaPath + item.stockNum + "0.jpg"} alt="car" class="w-full"/>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                  <img src={item.mediaPath + item.stockNum + "1.jpg"} alt="car" class="w-full"/>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                  <img src={item.mediaPath + item.stockNum + "2.jpg"} alt="car" class="w-full"/>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide4" class="carousel-item relative w-full">
                  <img src={item.mediaPath + item.stockNum + "3.jpg"} alt="car" class="w-full"/>
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>



            </figure>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
      </label>
    </div>
  </div>
</div>
