const API_KEY='0OjCaQDE6vbeIJz3OKftmV9Q7p4IlRzH'
const getFetch = (keywords) => {
    const URL_API=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keywords}&limit=10&offset=0&rating=g&lang=en`
    return fetch(URL_API)
        .then(res=>res.json())
        .then(response=>{
            const {data=[]}=response
            if(Array.isArray(data)){

             const gifs =data.map(gif=>{
                  const {id,title,images}=gif
                  const url=images.original.url
                  return {id,title,url}
              },[])  
              return gifs
            }
        })
    
}

export default getFetch
