<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide"
  import "@splidejs/svelte-splide/css"
  const options = {
    rewind: true,
    autoplay: true,
  }
</script>

<div class="flex flex-col space-y-6">
  <Splide {options} hasTrack={false}>
    <SplideTrack>
      <SplideSlide class="w-full">
        <img
          src="https://s7g10.scene7.com/is/image/hyundaiautoever/hyundai-ioniq-6-design-unveil-streamliner-01:Content%20Banner%20Desktop?wid=1196&hei=448"
          alt="ioniq-6"
          class="w-full"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s7g10.scene7.com/is/image/hyundaiautoever/hyundai-n-brand-lab-concepts-n-vision-74-09:Content%20Banner%20Desktop?wid=1196&hei=448"
          alt="ioniq-6"
          class="w-full"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://s7g10.scene7.com/is/image/hyundaiautoever/hyundai-ioniq-6-relieves-range-anxiety:Teaser%20Banner%20Desktop?wid=1169&hei=384"
          alt="ioniq-6"
          class="w-full"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/pip/eco/ev/ioniq-ev-stg-pc.jpg"
          alt="ioniq-6"
          class="w-full"
        />
      </SplideSlide>
    </SplideTrack>
  </Splide>


 <!-- <Splide>
  <SplideTrack>
    <SplideSlide class="w-full">
      <video autoplay loop muted>
        <track kind="captions"/>
        <source 
        src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
        type="video/mp4"
        
      />
      
    </video>
    </SplideSlide>
    <SplideSlide class="w-full">
      <video autoplay loop muted>
        <track kind="captions"/>
        <source 
        src="https://mdbcdn.b-cdn.net/img/video/forest.mp4"
        type="video/mp4"
        autoplay
      />
      
    </video>
    </SplideSlide>
    <SplideSlide class="w-full">
      <video autoplay loop muted>
        <track kind="captions"/>
        <source 
        src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
        type="video/mp4"
        autoplay
      />
      
    </video>
    </SplideSlide>

  </SplideTrack>
</Splide> -->




  <div class="flex flex-col w-full lg:flex-row sm:px-8 justify-center gap-20">
    <div class="card card-side bg-base-100">
      <figure>
        <img
          src="https://s7d1.scene7.com/is/image/hyundai/homepage-tout-click-to-buy-832x468:16-9?wid=832&hei=468&qlt=85,0&fmt=webp"
          alt="shopping-online"
          class="shadow hover:shadow-lg"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shop vehicles</h2>
        <p>Get approved at home and pickup next day</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"
            ><a href="/inventory">View Inventory</a></button
          >
        </div>
      </div>
    </div>
    <div class="card card-side bg-base-100">
      <figure>
        <img
          src="https://s7d1.scene7.com/is/image/hyundai/homepage-tout-alt-fuel:16-9?wid=832&hei=468&qlt=85,0&fmt=webp"
          alt="electric-cars"
          class="shadow hover:shadow-lg"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Build & Price</h2>
        <p>Customize your next Hyundai at home</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"
            ><a href="/inventory/new">View Models</a></button
          >
        </div>
      </div>
    </div>
  </div>

  <div
    class="content-center flex flex-col w-full justify-center lg:flex-row gap-10 sm:px-8"
  >
    <div class="card bg-primary text-primary-content lg:w-1/3">
      <div class="card-body">
        <h2 class="card-title">Service</h2>
        <p>Book your next service appointment online</p>
        <div class="card-actions justify-center">
          <button class="btn"><a href="/service">View Calendar</a></button>
        </div>
      </div>
    </div>
    <div class="card lg:w-1/4 bg-primary text-primary-content">
      <div class="card-body">
        <h2 class="card-title">Questions?</h2>
        <p>Don't hesistate to conact us at anytime</p>
        <div class="card-actions justify-center">
          <button class="btn">Contact</button>
        </div>
      </div>
    </div>
    <div class="card bg-primary text-primary-content lg:w-1/3">
      <div class="card-body">
        <h2 class="card-title">Get approved online</h2>
        <p>Pre-approval online with ease</p>
        <div class="card-actions justify-center">
          <button class="btn">Try it out</button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex px-10">
    <div class="hero bg-secondary-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://s7d1.scene7.com/is/image/hyundai/homepage-maintenance:16-9?wid=832&hei=468&qlt=85,0&fmt=webp"
          class="lg:max-w-sm lg:rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">View vehicle value</h1>
          <p class="p-6 justify-center">Get your vehicles trade-in value in minutes</p>
          
          <div class="flex p-20 place-content-center">
            <ul class="steps steps-vertical lg:steps-horizontal">
              <li class="step step-primary">Enter vehicle details</li>
              <li class="step">Create account</li>
              <li class="step">Get value</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div tabindex="0" class="collapse justify-center px-2"> 
    <div class="bg-primary rounded-box collapse-title text-xl font-medium text-center">
      Get Started
    </div>
    <div class="collapse-content"> 
      <form>

      </form>
      <p>tabindex="0" attribute is necessary to make the div focusable</p>
    </div>
  </div>
</div>
