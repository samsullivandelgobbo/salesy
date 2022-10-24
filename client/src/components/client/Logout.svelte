<script>
  import { loggedIn } from '../../stores'
  export function Logout() {
    loggedIn.set(false)
    console.log(loggedIn)
    localStorage.removeItem('JWT')
    location.reload()
  }
</script>

<button on:click={Logout}>Logout</button>