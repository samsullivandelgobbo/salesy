<script lang="ts">
  import { loggedIn } from '../../../stores'
  import LoginModal from '../LoginModal.svelte'
  let loggedin

  loggedIn.subscribe(value => {
    loggedin = value
  })

  export let item 

</script>

<div class="card card-compact bg-base-100 hover:bg-base-200">
  <figure>
    <a href="/inventory/{item.stockNum}">
    <img src={item.mediaPath + item.stockNum + "0.jpg"} alt="Car">
  </a>

  {#if loggedin}
    <div class="absolute right-4 top-4 hover:scale-125" >
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart hover:stroke-red-500 focus:hidden"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  </button>
    </div>
{:else}
<div class="absolute right-4 top-4 hover:scale-125" >
  <LoginModal/>
</div>
{/if}
  
  </figure>
  <div class="card-body">
    <h2 class="card-title"><a href="/inventory/{item.stockNum}">
          {item.year + " " + item.make + " " + item.model}
        </a>
    </h2>
    <div class="flex flex-col lg:flex-row font-medium text-base">
      <div class="basis-1/2">
        ${item.price}
      </div>
      <div class="basis-1/2 lg:text-right">
        {item.odometer} KM
      </div>
  </div>
    <div class="card-actions place-content-end">
      <!-- The button to open modal -->

      <label for="my-modal-{item.stockNum}" class="btn glass modal-button">Quick View</label
      >

      <!-- Put this part before </body> tag -->
      <input
        type="checkbox"
        id="my-modal-{item.stockNum}"
        class="modal-toggle"
      />
      <label for="my-modal-{item.stockNum}" class="modal cursor-pointer">
        <div class="modal-box">
          <h3 class="text-lg font-medium">
            {item.year + " " + item.make + " " + item.model}
          </h3>
          <figure>
            <div class="carousel w-full">
              <div
                id="slide1{item.stockNum}"
                class="carousel-item relative w-full"
              >
                <img
                  src={item.mediaPath + item.stockNum + "0.jpg"}
                  alt="car"
                  class="w-full"
                />
                <div
                  class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                  <a href="#slide4{item.stockNum}" class="btn btn-circle">❮</a>
                  <a href="#slide2{item.stockNum}" class="btn btn-circle">❯</a>
                </div>
              </div>
              <div
                id="slide2{item.stockNum}"
                class="carousel-item relative w-full"
              >
                <img
                  src={item.mediaPath + item.stockNum + "1.jpg"}
                  alt="car"
                  class="w-full"
                />
                <div
                  class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                  <a href="#slide1{item.stockNum}" class="btn btn-circle">❮</a>
                  <a href="#slide3{item.stockNum}" class="btn btn-circle">❯</a>
                </div>
              </div>
              <div
                id="slide3{item.stockNum}"
                class="carousel-item relative w-full"
              >
                <img
                  src={item.mediaPath + item.stockNum + "2.jpg"}
                  alt="car"
                  class="w-full"
                />
                <div
                  class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                  <a href="#slide2{item.stockNum}" class="btn btn-circle">❮</a>
                  <a href="#slide4{item.stockNum}" class="btn btn-circle">❯</a>
                </div>
              </div>
              <div
                id="slide4{item.stockNum}"
                class="carousel-item relative w-full"
              >
                <img
                  src={item.mediaPath + item.stockNum + "3.jpg"}
                  alt="car"
                  class="w-full"
                />
                <div
                  class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                  <a href="#slide3{item.stockNum}" class="btn btn-circle">❮</a>
                  <a href="#slide1{item.stockNum}" class="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </figure>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <button class="btn btn-primary"
            ><a href="/inventory/{item.stockNum}">View Details</a></button
          >
        </div>
      </label>
    </div>
  </div>
</div>
