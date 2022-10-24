<script>
  import TireCard from "../../components/client/tire/TireCard.svelte";
</script>

<div class="flex flex-col py-4">
  <div
    class="px-8 py-4"
    style="background-image: url(https://images.unsplash.com/photo-1588723071875-2c8c39b51c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl text-white font-bold">Shop Tires</h1>
        <p class="mb-5 text-gray-200">
          Shopping for tires doesn't have to be hard, shop online and book an
          appointment all online.
        </p>
      </div>
    </div>
  </div>

  <TireCard />
</div>
