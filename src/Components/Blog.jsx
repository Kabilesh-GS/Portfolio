import React from 'react';
import BlogStyle from './Blog.module.css';
import image from '../assets/MediumBlog.png';

function Blog() {
  return (
    <a href='https://medium.com/@kabileshgs/gods-own-country-a-fun-fueled-kerala-escape-9aeab52c41a4                ' target='_blank'>
      <div className={`${BlogStyle.Container}`}>
        <div  className={`${BlogStyle.homeblog}`}>
          <div className={`${BlogStyle.aboutblog}`}>
            <p>Check out my Blog !</p>
          </div>
          <img className={`${BlogStyle.Image}`} src={image} />
        </div>
      </div>
    </a>
  )
}

export default Blog;