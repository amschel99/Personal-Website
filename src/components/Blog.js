import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pre from './Pre';
const QUERY_ALL_POSTS = gql`
  query {
    user(username: "amschell") {
      publication {
        posts {
          _id
          title
          slug
          dateAdded
          coverImage
          brief
          totalReactions
          responseCount
        }
      }
    }
  }
`;

const Blog = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_POSTS);

  if (error) {
    return <h4>Error....</h4>;
  }

  if (loading) {
    return <div id="preloader" ></div>
  }

  if (data) {
    return (
      <div style={{ marginTop: '100px' }}>
        <Row xs={1} sm={2} md={3} lg={4}>
          {data.user.publication.posts.map((post) => (
            <Col style={{marginTop:"5px", marginBottom:'5px'}} key={post._id}>
              <Link  style={{textDecoration:"none"}} to={`/single-blog/${post.slug}`}>
              <Card
                className="h-100"
                style={{
                  textDecoration:"none",
                  backgroundColor: 'rgba(12, 8, 24, 0.904)',
                  border: 'none',
                  borderRadius: '1rem',
                  boxShadow: '0 0 1rem rgba(0, 0, 0, 0.2)',
                }}
              >
                <Card.Img
                  variant="top"
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    height: '12rem',
                    objectFit: 'cover',
                    borderRadius: '1rem 1rem 0 0',
                    filter: 'brightness(0.7)',
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: '#F6D186',
                      fontFamily: 'Carter One, sans-serif',
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      textShadow: '2px 2px #000',
                    }}
                  >
                    {post.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: '#fff',
                         fontFamily: 'Carter One, sans-serif',
                      fontSize: '1.2rem',
                      textAlign: 'justify',
                      lineHeight: '1.5',
                      textShadow: '1px 1px #000',
                    }}
                  >
                    {post.brief.substring(0, 150) + '...'}
                  </Card.Text>
                </Card.Body>
                
              
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }



  return <p>Something went wrong and articles could not be loaded</p>;
};

export default Blog;

