<script>
  import axios from "axios"
  import { onMount } from "svelte"
  import { loggedIn, UserId, UserFavorites } from '../../stores'
  import Logout from './Logout.svelte'
  import LoginModal from './LoginModal.svelte'

  let authToken
  let loggedin

  loggedIn.subscribe(value => {
    loggedin = value
  })
  onMount(async () => {
    authToken = localStorage.getItem("JWT")
    

    if (authToken)
      return await axios({
        method: "get",
        url: "http://localhost:4000/user/verify",
        headers: {
          authorization: authToken,
        },
      })
        .then(function (response) {
          console.log(response)
          if (response.statusText == "OK") return (loggedIn.set(true), UserId.set(response.data._id), console.log(response.data.favorites), UserFavorites.set(response.data.favorites))
        })
        .catch(function (err, response) {
          console.log(err)
        })
        
  })
</script>

<div class="navbar bg-primary z-50 font-hyundai">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 "
      >
        <li tabindex="0">
          <a href="/inventory" class="justify-between">
            Inventory
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </a>
          <ul class="p-2 bg-primary z-50">
            <li><a href="/inventory/used">Used Inventory</a></li>
            <li><a href="inventory/new/">New Inventory</a></li>
          </ul>
        </li>
        <li tabindex="0">
          <a href="/service" class="justify-between">
            Service
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </a>
          <ul class="p-2 bg-primary">
            <li><a href="/service/schedule">Schedule Appointment</a></li>
            <li><a href="about/contact">Message us</a></li>
            <li><a href="/parts">Parts Department</a></li>
            <li><a href="/tires">Tire Shop</a></li>
          </ul>
        </li>
        <li><a href="/finance">Financing</a></li>
        <li tabindex="0">
          <a href="/about" class="justify-between">
            About us
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              ><path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              /></svg
            >
          </a>
          <ul class="p-2 bg-primary">
            <li><a href="/about/contact">Contact us</a></li>
            <li><a href="/about/faq">FAQs</a></li>
            <li><a href="/sustaiability">Sustainability</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <a href="/" class="btn btn-ghost normal-case text-xl place-content-center">
      <svg
        class="p-3"
        version="1.1"
        id="svg151"
        width="225"
        height="75"
        viewBox="0 0 481.92001 156.16"
      >
        <path
          style="display:inline;fill:#000000;stroke-width:0.64"
          d="M 82.910241,103.39381 C 65.816833,100.88181 52.299668,93.822386 47.782035,85.047896 44.364705,78.410484 45.720624,72.688954 52.220671,66.318284 68.02306,50.830435 107.2634,47.648904 131.94579,59.854326 c 12.43639,6.149788 17.64704,14.291448 14.74271,23.03557 -3.05894,9.20963 -16.63999,17.217054 -34.2155,20.173574 -6.48214,1.09041 -23.125217,1.27639 -29.562759,0.33034 z m 18.802479,-4.755524 c 2.4177,-1.75143 5.78226,-8.85199 5.85513,-12.35667 0.0803,-3.85894 -1.28353,-4.80934 -6.34206,-4.4197 -4.801784,0.36987 -12.183337,2.84311 -20.480003,6.86198 -6.378087,3.08952 -11.261856,6.51949 -10.455514,7.34311 0.233466,0.23847 2.61568,0.99492 5.293799,1.68099 10.594336,2.714014 23.026404,3.137624 26.128648,0.89029 z m 19.04593,-1.63992 c 9.94972,-2.74336 18.42163,-8.13605 21.13389,-13.45253 2.20302,-4.31826 1.38471,-9.679932 -2.04823,-13.420252 -2.0119,-2.19204 -5.91779,-5.0873 -6.86308,-5.0873 -0.42006,0 -2.32842,3.33001 -4.24081,7.40002 -3.87315,8.242982 -8.75235,16.605842 -12.38445,21.226732 -1.31995,1.67928 -2.61722,3.41325 -2.88282,3.85325 -0.71712,1.18801 1.72259,1.01389 7.2855,-0.51992 z m -56.039564,-12.5258 c 4.080653,-8.584802 8.941082,-16.894672 12.933856,-22.113022 1.531283,-2.001301 2.526541,-3.797941 2.211693,-3.992532 -0.786611,-0.486151 -9.183277,1.719512 -14.005863,3.679102 -5.368429,2.18139 -11.208002,6.38763 -13.347075,9.6139 -3.517962,5.30597 -2.589397,11.512342 2.418007,16.161552 2.365418,2.19621 5.044742,4.09672 5.775532,4.09672 0.261056,0 2.067283,-3.35057 4.01385,-7.44572 z M 101.70001,72.687084 c 11.47316,-3.89722 22.90713,-10.37075 21.28122,-12.04872 -1.45215,-1.498645 -11.67132,-3.352215 -20.52427,-3.722727 l -9.008827,-0.377035 -2.29045,2.290454 c -2.789976,2.789975 -5.107698,8.638818 -4.843403,12.222488 0.358259,4.85791 4.578563,5.30653 15.38573,1.63554 z m 64.48578,5.7912 V 59.918283 h 4.48 4.48 v 7.040001 7.04 h 8 8 v -7.04 -7.040001 h 4.48 4.48 v 18.560001 18.560002 h -4.48 -4.48 v -7.36 -7.36 h -8 -8 v 7.36 7.36 h -4.48 -4.48 z m 52.48,11.955472 v -6.60453 l -7.36,-11.668212 c -4.048,-6.41751 -7.36,-11.809125 -7.36,-11.981354 0,-0.172229 2.36254,-0.229496 5.25009,-0.12726 l 5.25009,0.185883 3.86991,6.212981 c 2.12845,3.41714 4.17889,6.51972 4.55653,6.89462 0.48743,0.4839 1.97268,-1.36462 5.12,-6.37225 l 4.43338,-7.053873 5.28438,-7.68e-4 5.28439,-7.68e-4 -3.2991,5.279999 c -1.8145,2.904 -5.27247,8.38378 -7.68438,12.17729 l -4.38529,6.897362 v 6.3827 6.38271 h -4.48 -4.48 z m 28.16,-11.955472 V 59.918283 h 4.48 4.48 v 14.419701 14.419702 l 7.84,-0.1797 7.84,-0.1797 0.17224,-14.240002 0.17225,-14.240001 h 4.46775 4.46776 l -0.004,14.880001 c -0.004,16.800062 -0.38501,19.155152 -3.39571,20.990902 -1.85943,1.13378 -3.30574,1.24453 -16.28072,1.24671 l -14.23973,0.002 z m 42.24,-0.0329 V 59.852506 l 15.09648,0.192879 15.09648,0.192898 1.54352,1.795691 1.54352,1.79569 v 16.604312 16.60431 h -4.16 -4.16 v -14.00164 c 0,-11.187752 -0.17918,-14.150342 -0.8916,-14.741602 -0.59017,-0.48979 -3.34893,-0.67857 -8.16,-0.55836 l -7.2684,0.1816 -0.17201,14.560002 -0.17202,14.56 h -4.14798 -4.14799 V 78.445404 Z m 41.6,0.0658 V 59.918283 h 14.43178 c 15.68908,0 17.262,0.294203 18.72362,3.502121 0.51684,1.13432 0.7646,6.12395 0.7646,15.397902 v 13.71979 l -1.8664,2.09009 -1.8664,2.0901 -15.0936,0.19288 -15.0936,0.19288 v -18.59288 z m 24.81727,0.0155 c 0.13412,-7.468502 -0.0217,-9.997812 -0.64,-10.390202 -0.4495,-0.28525 -4.05727,-0.52306 -8.01727,-0.52844 l -7.2,-0.01 v 10.5797 10.579702 l 7.84,-0.1797 7.84,-0.1797 0.17727,-9.87156 z m 16.798,3.95156 c 0.0169,-16.099132 0.41081,-19.001152 2.86691,-21.120005 1.6263,-1.402961 2.04658,-1.439968 16.35351,-1.439968 h 14.68431 v 18.560001 18.560002 h -4.16 -4.16 v -5.76 -5.76 h -8.32 -8.32 v 5.76 5.76 h -4.48 -4.48 l 0.0153,-14.56 z m 25.45277,-9.920002 -0.18804,-4.64 -7.2684,-0.1816 c -4.81107,-0.12021 -7.56983,0.0686 -8.16,0.55836 -0.59158,0.49101 -0.8916,2.11345 -0.8916,4.82163 v 4.08164 h 8.34804 8.34804 l -0.18804,-4.64 z m 17.41196,5.92003 V 59.918283 h 4.48 4.48 v 18.560001 18.560002 h -4.48 -4.48 z"
          id="path319"
        />
      </svg>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li tabindex="0">
        <a href="/inventory">
          Inventory
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul class="p-2 bg-primary z-50">
          <li><a href="/inventory/used">Used Inventory</a></li>
          <li><a href="/inventory/new">New Inventory</a></li>
        </ul>
      </li>
      <li tabindex="0">
        <a href="/service">
          Service
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul class="p-2 bg-primary z-50">
          <li><a href="/service/schedule">Schedule Appointment</a></li>
          <li><a href="/about/contact">Message us</a></li>
          <li><a href="/parts">Parts Department</a></li>
          <li><a href="/tires">Tire Store</a></li>
        </ul>
      </li>
      <li><a href="/finance">Financing</a></li>
      <li tabindex="0">
        <a href="/about">
          About us
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul class="p-2 bg-primary z-50">
          <li><a href="/about/contact">Contact us</a></li>
          <li><a href="/about/faq">FAQs</a></li>
          <li><a href="/sustainability">Sustainability</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    {#if loggedin == true}
        <div class="dropdown dropdown-end p-0">

          <label tabindex="0" class="btn">
            <div
            class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-300"
          >
            <span class="font-medium text-gray-600">SS</span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/profile/favorites">Favorites</a></li>
            <li><Logout></Logout></li>
          </ul>
        </div>
        
    {:else}
      <a href="/login" class="btn">Get started</a>
    {/if}
  </div>
</div>
