<script lang="ts">
	import theme from "../../stores/theme";
	import Theme from "./theme.svelte";
    
</script>

<nav class="navbar" class:light={$theme} class:dark={!$theme}>
    <div class="nav-logo">

    </div>
    <div class="nav-misc">

    </div>
    <div class="nav-right">
        <Theme/>
    </div>
</nav>