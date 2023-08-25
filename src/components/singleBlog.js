import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col,Form,Button } from "react-bootstrap";


const SINGLE_POST= gql`
query($slug:String!, $hostname:String!){
   post(slug: $slug, hostname:$hostname ){
     _id
     content
     slug
     title
     dateAdded
     reactions {
       count
     }
   }
}
`;

const SingleBlog = () => {


  const { id } = useParams();
  console.log(id)

  const { loading, error, data } = useQuery(SINGLE_POST, {
    variables: { slug:id, hostname: "amschel" },
  });

  if (error) {
    return <h4 style={{ color: 'white' }}>Error....</h4>;
  }

  if (loading) {
    return <div id="preloader" ></div>
  }

  if (data) {
 
  
    return (
      <div style={{ marginTop: '70px' }}>
        <Card
          style={{
            backgroundColor: '#282c34',
            border: 'none',
            marginBottom:"0px"
           
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                color: 'white',
                fontFamily: 'Carter One, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
        textAlign:"center"
              }}
            >
              {data.post.title}
            </Card.Title>
          
<div style={{ color: "white",margin:"15px" }} dangerouslySetInnerHTML={{ __html:data.post.content}}/>





          </Card.Body>
      
            

<div style={{height:"10px"}}></div>
        </Card>

      </div>
    );
  }



return <p style={{ color: '#F6D186' }}>Something went wrong and the article could not be fetched</p>;
};

export default SingleBlog;
