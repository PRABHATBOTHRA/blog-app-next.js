import React from 'react'
import classes from "./all-posts.module.css"
import PostGrid from './post-grid'

const  AllPost= (props) => {
    // const {posts}=props
  return (
    <section className={classes.posts}>
        <h1>All Post</h1>
        <PostGrid posts={props.posts}/>
    </section>
  )
}

export default AllPost