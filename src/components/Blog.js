import React from 'react'
import { useQuery,gql } from '@apollo/client'
const QUERY_aLL_POSTS=gql`
query{
  user(username:"amschell"){
 publication {
   posts {
     _id
     title
     slug
    dateAdded
    coverImage
    brief
    contentMarkdown
    totalReactions
    responseCount
    
   
   }
 }

}
}

`
const Blog = () => {
    const {data, loading,error}=useQuery(QUERY_aLL_POSTS)
    if(error){
        return <h4>Error....</h4>
    }
    if(loading){
        return <h5>Loading...</h5>
    }
    if(data){
        {data.user.publication.posts.map((post)=>{
return <div key={post._id}>
{post.title}
</div>


        })}
        
    }
    else{
      return <>the fuck</>
    }
 
}

export default Blog