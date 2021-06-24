<script context="module">
    // check out https://kit.svelte.dev/docs#loading for how load behaves
    // and check out https://kit.svelte.dev/docs#loading-input-fetch
    // for why we fetching inside load and not in our script tag.
    export async function load({ fetch }) {
        // this fetches data from our endpoint and then passes it as a component properity
        // also notice we don't await the fetch, if we did this would cause
        // svelte-kit to wait for the response (from our endpoint) and then LOAD the page.
        return {
            props: {
                population: fetch('population.json').then( res => res.json() )
            }
        }
    }
</script>

<script>
    // this defines population properity on index.svelte (a svelte component that serves as a page)
    // check https://svelte.dev/tutorial/declaring-props for more information
    export let population;
</script>
 
<!-- as we don't resolve population in they load hook. 
     we have passed down a Promise that need's to be resolve here
-->
{#await population then response}
    <h1 class="text-2xl">{response.total}</h1>
{/await}
