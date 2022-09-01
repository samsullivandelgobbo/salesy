<script>
  let username = 'username'
  let password = 'password'
 
  async function postUser() {
    const res = await fetch("http://localhost:4000/Admin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
    const json = await res.json()
    
    
  }
</script>



<div class="grid gap-6 mb-6 md:grid-cols-2">

  <div>
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username:</label>
    <input type="text"
    id="username"
    bind:value={username}
    />
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password:</label>
    <input type="text"
    id="password"
    bind:value={password}
    />
    <button class="btn" type="button" on:click={postUser}>Submit </button>
  </div>
</div>