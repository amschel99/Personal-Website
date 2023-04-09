import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {marked} from 'marked';

// Set options for marked library

const QUERY_ALL_POSTS = gql`
  query {
    user(username: "amschell") {
      publication {
        posts {
          _id
          title
          slug
          dateAdded
          contentMarkdown
        }
      }
    }
  }
`;

const SingleBlog = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_POSTS);
  const { id } = useParams();

  if (error) {
    return <h4 style={{ color: 'white' }}>Error....</h4>;
  }

  if (loading) {
    return <h5 style={{ color: 'white' }}>Loading...</h5>;
  }

  if (data) {
    const posts = data.user.publication.posts;

    const post = posts.find((p) => p._id === id);

    if (!post) {
      return <p style={{ color: 'white' }}>Post not found</p>;
    }

    const htmlContent = marked(post.contentMarkdown);

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
              {post.title}
            </Card.Title>
            <div
              style={{
                marginTop: '100px',
                color: 'white',
                padding: '1rem',
              }}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
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
            <small style={{ fontSize: '1rem' }}>
              {new Date(post.dateAdded).toLocaleDateString()}
            </small>
            <span className="mx-2" style={{ color: '#F6D186' }}>
              •
            </span>
            <small style={{ color: '#F6D186' }}>{post.slug}</small>
          </Card.Footer>
        </Card>
      </div>
    );
  }



return <p style={{ color: '#F6D186' }}>Something went wrong</p>;
};

export default SingleBlog;