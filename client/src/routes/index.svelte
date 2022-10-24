<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
  import { loggedIn } from "../stores";
  import axios from "axios";
  import Login from "../components/client/Login.svelte";
  import VehicleCard from "../components/client/inventory/VehicleCard.svelte";

  let loggedin;

  loggedIn.subscribe((value) => {
    loggedin = value;
  });

  const options = {
    rewind: true,
    autoplay: true,
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
    width: "100%",
  };
  let items;
  async function getRandom() {
    const res = await axios.get("http://localhost:4000/inventory");
    items = res.data;
    return items;
  }
  let promise = getRandom();
</script>

<div class="flex flex-col space-y-6">
  <Splide options={{ autoplay: true }} hasTrack={false}>
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

  <div
    class="flex flex-col w-full lg:flex-row sm:px-8 justify-center lg:gap-20 sm:gap-4"
  >
    <div class="card card-side bg-base-100">
      <figure>
        <img
          src="https://s7d1.scene7.com/is/image/hyundai/homepage-tout-click-to-buy-832x468:16-9?wid=832&hei=468&qlt=85,0&fmt=webp"
          alt="shopping-online"
          class="shadow hover:shadow-lg"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title sm:justify">Shop vehicles</h2>
        <p>Get approved at home and pickup next day</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary sm:w-24 lg:w-full"
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
          <button class="btn btn-primary sm:w-24 lg:w-full"
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
  <h1 class="text-xl font-bold px-10">Inventory</h1>
  <div class="flex p-4">
    {#await promise then items}
      <Splide {options} hasTrack={false}>
        <SplideTrack>
          {#each items as item}
            <SplideSlide>
              <div class="px-4 flex mb-4">
                <VehicleCard {item} />
              </div>
            </SplideSlide>
          {/each}
        </SplideTrack>
      </Splide>
    {/await}
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
          <p class="p-6 justify-center">
            Get your vehicles trade-in value in minutes
          </p>

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

  <!-- The button to open modal -->
  <div class="flex justify-center w-full p-10">
    <label for="my-modal-6" class="btn modal-button w-1/2">Get Started</label>
  </div>
  <!-- Put this part before </body> tag -->
  {#if loggedin}
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <section class="bg-white">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2
              class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 "
            >
              Contact Us
            </h2>
            <p
              class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl"
            >
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Your email</label
                >
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >Your message</label
                >
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                />
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >Send message</button
              >
            </form>
          </div>
        </section>
        <div class="modal-action">
          <label for="my-modal-6" class="btn">Send Message</label>
        </div>
      </div>
    </div>
  {:else}
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <Login />
      </div>
    </div>
  {/if}
</div>

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
