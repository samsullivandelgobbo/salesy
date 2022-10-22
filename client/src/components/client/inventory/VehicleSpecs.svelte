<script>
  import { onMount } from 'svelte'
  import { Swipe, SwipeItem } from "svelte-swipe";
  export let item

  const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };

  console.log(item)
  
  function hanldeSwipe() {

  }
</script>



<div class="swipe-holder">
  <Swipe {...swipeConfig}>
    <SwipeItem>
      ABC
    </SwipeItem>

    <SwipeItem>
      ABC
    </SwipeItem>

    <SwipeItem>
      ABC
    </SwipeItem>

    <SwipeItem>
      123
    </SwipeItem>
  </Swipe>
</div>