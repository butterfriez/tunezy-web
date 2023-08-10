<script lang="ts">
    import theme from "../../stores/theme";

    function toggleTheme() {
        theme.set(!$theme)
    }
</script>

<button on:click={toggleTheme}>
    {$theme? "Light": "Dark"}
</button>