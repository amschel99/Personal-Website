import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col,Form,Button } from "react-bootstrap";
import Pre from './Pre';
// Set options for marked library

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

  const { loading, error, data } = useQuery(SINGLE_POST, {
    variables: { slug:id, hostname: "amschel" },
  });

  if (error) {
    return <h4 style={{ color: 'white' }}>Error....</h4>;
  }

  if (loading) {
    return <Pre/>
  }

  if (data) {
 

    return (
      <div style={{ marginTop: '100px' }}>
        <Card
          style={{
            backgroundColor: 'rgba(12, 8, 24, 0.904)',
            border: 'none',
            borderRadius: '2rem',
            boxShadow: '0 0 1rem rgba(255, 255, 255, 0.3)',
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                color: '#F6D186',
                fontFamily: 'Carter One, sans-serif',
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                textShadow: '2px 2px 0px rgba(255, 255, 255, 0.5)',
              }}
            >
              {data.post.title}
            </Card.Title>
          
<div style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: data.post.content }}/>





          </Card.Body>
          <Card.Footer
            style={{
              backgroundColor: '#112020',
              borderTop: 'none',
              borderRadius: '0 0 2rem 2rem',
              color: '#F6D186',
              fontFamily: 'Carter One, sans-serif',
              fontSize: '1.5rem',
              opacity: '0.7',
              padding: '2rem',
              textAlign: 'center',
              textShadow: '1px 1px 0px rgba(255, 255, 255, 0.5)',
            }}
          >
            
               
 <Row style={{marginBottom:'10px'}}>
  <h5>Subscribe to my news letter to never miss out on any useful article I publish</h5>
 <div id="mc_embed_signup" style={{ background: "rgba(12, 8, 24, 0.904)", color: "#fff", padding: "20px", width:'100%' }}>
  <form
    action="https://tech.us9.list-manage.com/subscribe/post?u=19ab3433c4d8fab33df9052d2&amp;id=3af49055ee&amp;f_id=002f22e1f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate"
    target="_blank"
    noValidate
  >
    <div id="mc_embed_signup_scroll">
      <div className="mc-field-group" style={{ marginBottom: "10px" }}>
        <input
          type="email"
          defaultValue=""
          placeholder="Enter your email adress"
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
          required
          style={{  '::placeholder': { 
      color: '#00ffea' 
    } ,color:"#00ffea", padding: "10px", marginRight: "20px", borderRadius: "5px", border: "none", background: "#555"}}
        />
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
          style={{borderRadius: "5px", border: "none", background: "black", color: "#fff", cursor: "pointer" , marginTop:"15px", fontSize:"20px", height:'50px'}}
        />
      </div>
    </div>
  </form>
</div>


 </Row>
 <small style={{ fontSize: '1rem' }}>
              {new Date(data.post.dateAdded).toLocaleDateString()}
            </small>
            <span className="mx-2" style={{ color: '#F6D186' }}>
              
            </span>
            <small style={{ color: '#F6D186' }}>{data.post.slug}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }



return <p style={{ color: '#F6D186' }}>Something went wrong</p>;
};

export default SingleBlog;