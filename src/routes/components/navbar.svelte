<script lang="ts">
	import theme from "../../stores/theme";
	import Theme from "./theme.svelte";
    
</script>

<nav class="navbar" class:light={$theme} class:dark={!$theme}>
    <div class="nav-logo">
        <a href='/'>
            <h1>HOME</h1>
        </a>
    </div>

    <div class="nav-misc">

    </div>

    <div class="nav-right">
        <Theme/>
        <a href='/login'>
            <h3>Log-In</h3>
        </a>
    </div>
</nav>