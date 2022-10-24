<script>
  import axios from "axios"
  // test
	import Modal,{getModal} from './Modal.svelte'
	let name = 'world';
	
	let selection
	
	// Callback function provided to the `open` function, it receives the value given to the `close` function call, or `undefined` if the Modal was closed with escape or clicking the X, etc.
	function setSelection(res){
		selection=res
	}
	//test
  let topDiv
  let email
  let password
  let data
  let success = null
  let loginError
  let rand = Math.floor(Math.random() * 255)
  async function login() {
    data = {
      email,
      password,
    }
    console.log(typeof data)
    const userLogin = await axios({
      method: "post",
      url: "http://localhost:4000/user/login",
      data: data,
    })
      .then(function (response) {
        success = true
        localStorage.setItem("JWT", response.data.token)
        location.assign("/")
      })
      .catch(function (response, err) {
        loginError = true
      })
  }
  // document.body.appendChild(topDiv)
  
</script>

{#if success}
  <div class="alert alert-success shadow-lg">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        /></svg
      >
      <span>You have been logged in succesfully!</span>
    </div>
  </div>
{/if}
{#if loginError}
  <div class="alert alert-error shadow-lg">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        /></svg
      >
      <span>Error: Invalid email or password!</span>
    </div>
  </div>
{/if}



<label for="my-modal-{rand}" class="modal-button"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="white"
  stroke="black"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="feather feather-heart"
  ><path
    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  /></svg
  >
  </label
  >


  <input
    type="checkbox"
    id="my-modal-{rand}"
    class="modal-toggle"
  />
  <label for="my-modal-{rand}" class="modal">
    <div class="modal-box">

      <div class="p-6 space-y-4 md:space-y-6 sm:p-8 " >
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl "
        >
          Sign in to your account
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
              >Your email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required={true}
              bind:value={email}
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900">Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required={true}
              bind:value={password}
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500">Remember me</label>
              </div>
            </div>
            <a
              href="#"
              class="text-sm font-medium text-primary-600 hover:underline"
              >Forgot password?</a
            >
          </div>
          <button
            type="submit"
            class="w-full bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            on:click={login}>Sign in</button
          >
          <p class="text-sm font-light text-gray-500">
            Don’t have an account yet? <a
              href="/register"
              class="font-medium text-primary-600 hover:underline">Sign up</a
            >
          </p>
        </form>
      </div>
    </div>
  </label>






