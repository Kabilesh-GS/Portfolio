import React from 'react';
import BlogStyle from './Blog.module.css';
import image from '../assets/MediumImage.png'

function Blog() {
  return (
    <div className={`${BlogStyle.Container}`}>
        <a href='https://medium.com/@kabileshgs/tale-of-2-cities-in-2-days-bengaluru-and-chikkamagaluru-3618794b8bce' target='_blank'><img className={`${BlogStyle.Image}`} style={{width: '390px'}} src={image} /></a>
    </div>
  )
}

export default Blog;