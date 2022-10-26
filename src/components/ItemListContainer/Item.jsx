import React from 'react'
import './body.css'

const Item = ({ title, id, coverPhoto, user }) => {
  const { alt_description, urls } = coverPhoto
  const { regular } = urls

  

  return (
    <>
   <div className="customCard">
    <a href={id} className="backgroundHover">
    <img  src={regular} className='img' alt={alt_description} />
    </a>
      <div className="collectionName">
        {title}
      </div>
    <div className="collectionDetails">
      <div className="author-details">
      <img src={user?.profile_image?.large} alt="user profile"  className='userImg'/>
      <span>{user?.name}</span>
      </div>
      <div className="likes">
        <span>{user?.total_likes } likes </span>
      </div>
    </div>
   </div>

    </>
  )
}

export default Item

