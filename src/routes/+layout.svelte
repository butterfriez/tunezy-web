<script lang="ts">
	import Ad from "./components/ad.svelte";
    import Footer from "./components/footer.svelte";
import Navbar from "./components/navbar.svelte";
	import Player from "./components/player.svelte";
	import Right from "./components/right.svelte";
</script>

<Navbar/>
<slot/>
<Footer/>
<Right/>
<Ad/>
<Player/>