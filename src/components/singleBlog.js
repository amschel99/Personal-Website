import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col,Form,Button } from "react-bootstrap";

function applyCodeBlockStyles(htmlContent) {
  // Create a DOM element to parse the HTML
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;

  // Find all <code> and <pre> elements within the parsed HTML
  const codeBlocks = tempElement.querySelectorAll("code, pre");

  // Apply styles to each code block
  codeBlocks.forEach((codeBlock) => {
    codeBlock.style.backgroundColor = "#333"; // Dark background color
    codeBlock.style.color = "white"; // Text color for code
    codeBlock.style.padding = "10px"; // Optional padding for code blocks
    codeBlock.style.borderRadius = "5px"; // Optional border radius for rounded corners
    codeBlock.style.overflowX = "auto"; // Add horizontal scroll if code overflows
  });

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
 
  const modifiedContent = applyCodeBlockStyles(data.post.content);
    return (
      <div style={{ marginTop: '50px' }}>
        <Card
          style={{
            backgroundColor: 'white',
            border: 'none',
            marginBottom:"0px"
           
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                color: 'black',
                fontFamily: 'Carter One, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
        textAlign:"center"
              }}
            >
              {data.post.title}
            </Card.Title>
          
<div style={{ color: "black",margin:"15px" }} dangerouslySetInnerHTML={{ __html: modifiedContent }}/>





          </Card.Body>
      
            

<div style={{height:"10px"}}></div>
        </Card>

      </div>
    );
  }



return <p style={{ color: '#F6D186' }}>Something went wrong and the article could not be fetched</p>;
};

export default SingleBlog;
