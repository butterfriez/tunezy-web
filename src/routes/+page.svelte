<script lang="ts">
    import theme from "../stores/theme";
</script>

<main class:light={$theme} class:dark={!$theme}>
    <h1>Main</h1>
</main>