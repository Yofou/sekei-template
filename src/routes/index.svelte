<script>
    const getPopulation = async () => {
        return fetch('http://localhost:3000/population.json').then( res => res.json() ) 
    }
</script>

{#await getPopulation() then response}
    <h1 class="text-2xl">{response.total}</h1>
{/await}