import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts[id];

  return (
    <div style={{ padding: "1rem", backgroundColor: "lightskyblue" }}>
      <Button
        variant="contained"
        style={{ margin: "1rem" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div>
        {post ? (
          <div>
            <Card
              sx={{ maxWidth: "100%", padding: "2rem", overflow: "hidden" }}
            >
              <Typography
                sx={{ backgroundColor: "lightgray", padding: "1rem" }}
                variant="h6"
              >
                {post.title}
              </Typography>

              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {post.content}
                </Typography>

                <Typography variant="body2">
                  {post.urlToImage && (
                    <img
                      src={post.urlToImage}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        marginTop: "1rem",
                      }}
                    />
                  )}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Typography variant="h6" style={{ textAlign: "center" }}>
            Post not found !
          </Typography>
        )}
      </div>
    </div>
  );
};

export default BlogPostDetails;
