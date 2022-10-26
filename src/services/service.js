// API KEY = 563492ad6f91700001000001573365390d924c9787ffde84a4eeac58
const key = 'bwKvlHMzauc8Tla4Zg6UmpefnqObNiq4TYJ0Tka8VJ8'
const myHeaders = new Headers();
myHeaders.append("Accept-Version", "v1");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "ugid=dbe3f0dba192ee7fae70a1d1d489f75e5549447");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

export const unsplashApiBasicCall = async() => {
const response = await fetch(`https://api.unsplash.com/collections/1198107/photos/?client_id=${key}&query=QUERY&per_page=41&query=QUERY&orientation=landscape`, requestOptions)

 return await response.json()
}

export const getCollections = async() => {
  const response = await fetch(`https://api.unsplash.com/collections/?client_id=${key}&query=QUERY&per_page=41&query=QUERY&orientation=landscape`, requestOptions)
  
   return await response.json()
  }

  export const getCollectionPerId = async(id) => {
    try {
      const response = await fetch(`https://api.unsplash.com/collections/${id}/photos/?client_id=${key}&query=QUERY&per_page=41`, requestOptions)
      
       return await response.json()

    }catch(er){
      console.error({message: er})
    }
    }