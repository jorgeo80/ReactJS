export const getGifs = async( category ) => {
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&limit=10&q=${ category }`;
    
    const resp = await fetch( url );    
    
    const { data } = await resp.json();    
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    console.log(gifs);
    
    // console.log(`${ process.env.REACT_APP_GIFS_API_KEY }`);
    
    return gifs;
}