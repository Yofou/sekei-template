
// suggest implementing a simple cache so your not requesting external api per user

// checkout https://kit.svelte.dev/docs#routing-endpoints 
// for more information on what we have acces to here
// but the just just is, we can create endpoints super easily by exporting
// simple CRUD operations like get (what we use here), post, del (delete), put, etc....
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
    const URI = 'https://www12.statcan.gc.ca/rest/census-recensement/CPR2016.json?dguid=2016A000235&topic=13'
    const response = await fetch(URI).then( res => res.json() )
    
    if (response.DATA.length === 0) return {
        body: {
          error: 'no data found'  
        },
    }

    const totalPopulationIndex = response.COLUMNS.indexOf('T_DATA_DONNEE')
    return {
        body: {
            total: response.DATA[0][totalPopulationIndex]
        }
    }
}