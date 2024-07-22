import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlogPostItem from "../component/BlogPostItem";

const BlogPostList = ({ posts, setPage, page }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justfyContent: "center",
        backgroundColor: "lightskyblue",
      }}
    >
      <Paper
        style={{
          width: "60%",
          height: "100%",
          margin: "auto",
          padding: 20,
          borderRadius: "0px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" color="gray">
          <b>Blog Posts</b>
        </Typography>
        <br />
        <Divider />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            height: "75vh",
            overflowY: "auto",
          }}
        >
          {posts.map((post, index) => (
            <Box
              key={index}
              sx={{ padding: 2, cursor: "pointer" }}
              onClick={() => navigate(`/post/${index}`)}
            >
              <BlogPostItem post={post} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            p: 2,
            backgroundColor: "lightgray",
          }}
        >
          <Button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            variant="contained"
          >
            Previous
          </Button>
          <Button onClick={() => setPage(page + 1)} variant="contained">
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogPostList;
