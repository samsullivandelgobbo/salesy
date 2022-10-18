<script lang="ts">
  export let item

</script>

<div class="card card-compact bg-base-100 shadow-xl hover:shadow-2xl hover:bg-base-200">
  <figure>
    <a href="/inventory/{item.stockNum}">
    <img src={item.mediaPath + item.stockNum + "0.jpg"} alt="Car" />
  </a>
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

      <label for="my-modal-{item.stockNum}" class="btn modal-button">Quick View</label
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
