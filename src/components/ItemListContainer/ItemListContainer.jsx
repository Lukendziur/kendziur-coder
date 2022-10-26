import React, { useEffect, useState } from 'react'
import { getCollections } from '../../services/service'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    const [images, setImages] = useState([])
const getImages = async() => {
  const data = await getCollections()
  setImages(data)
}

useEffect(() => {
    getImages()
})


  return (
    <ItemList
    greeting={greeting}
    data={images}
    />
  )
}

export default ItemListContainer