import React from 'react';
import BlogStyle from './Blog.module.css';
import image from '../assets/MediumImage.png'

function Blog() {
  return (
    <a href='https://medium.com/@kabileshgs/tale-of-2-cities-in-2-days-bengaluru-and-chikkamagaluru-3618794b8bce' target='_blank'>
      <div className={`${BlogStyle.Container}`}>
        <div  className={`${BlogStyle.homeblog}`}>
          <div className={`${BlogStyle.aboutblog}`}>
            <p>My Recent Blog !</p>
          </div>
          <img className={`${BlogStyle.Image}`} src={image} />
        </div>
      </div>
    </a>
  )
}

export default Blog;