<script lang="ts">
	import { ThemeMinimal } from "@supabase/auth-ui-shared";
    import theme from "../../stores/theme";
    import { Auth } from '@supabase/auth-ui-svelte'
    
    export let data;
</script>

<svelte:head>
    <title>User Management</title>
</svelte:head>

<main class:light={$theme} class:dark={!$theme}>
    <Auth
        supabaseClient={data.supabase}
        view="magic_link"
        redirectTo={`${data.url}/auth/callback`}
        showLinks={false}
        appearance={{ theme: ThemeMinimal, style: {input: 'color: #fff'} }}
        additionalData={{}}
    />
</main>