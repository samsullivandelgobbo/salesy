<script>
  import Header from "../components/client/ResponsiveHeader.svelte"
  import BottomNavbar from "../components/client/layout/BottomNavbar.svelte";
  import Footer from "../components/client/layout/Footer.svelte";
  import "../app.css";
</script>

<Header/>
<main data-sveltekit-prefetch>
<slot>

</slot>
</main>

<BottomNavbar/>

<Footer/>