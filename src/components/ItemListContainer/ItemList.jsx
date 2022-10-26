
import React, {useState, useEffect} from 'react'
import Item from './Item'
import Banner from './Banner'
import './body.css'
import { imgGalleryFunction } from '../../utils/util';

const ItemList
 = ({ data, greeting }) => {
 const [arrImages, setArrImages] = useState([])

 useEffect(() =>{
  if (data.length >0) {
    const dataGroups = imgGalleryFunction(data)
    setArrImages(dataGroups)      
  }
}, [data])

  return (
    <>
    <Banner
    sectionName={greeting}
    />

<div className="row"> 
{
  arrImages.length > 0 &&
  arrImages.map((arrImg, index) => (
    <div className="column" key={index}>
      {
      arrImg.map((singleImg) => (

        <Item
        title={singleImg.title}
        id={singleImg.id}
        coverPhoto={singleImg.cover_photo}
        key={singleImg.id}
        user={singleImg.user}
        />     
        )
      
      )  

      
      }

    </div>
  ))
}
    
</div>
        

    </>
  )
}

export default ItemList
