<script>
  import axios from "axios";
  // test
  import Modal, { getModal } from "./Modal.svelte";
  let name = "world";

  let selection;

  // Callback function provided to the `open` function, it receives the value given to the `close` function call, or `undefined` if the Modal was closed with escape or clicking the X, etc.
  function setSelection(res) {
    selection = res;
  }
  //test
  let email;
  let password;
  let data;
  let success = null;
  let loginError;
  let rand = Math.floor(Math.random() * 255);
  async function login() {
    data = {
      email,
      password,
    };

    const userLogin = await axios({
      method: "post",
      url: "http://localhost:4000/user/login",
      data: data,
    })
      .then(function (response) {
        success = true;
        localStorage.setItem("JWT", response.data.token);
        location.assign("/");
      })
      .catch(function (response, err) {
        loginError = true;
      });
  }
</script>

<button on:click={() => getModal().open()}>
  <slot />
</button>

<Modal>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl "
    >
      Sign in to your account
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 "
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
        <a href="#" class="text-sm font-medium text-primary-600 hover:underline"
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
</Modal>
