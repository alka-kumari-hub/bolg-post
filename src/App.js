import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./page/BlogPostList";
import BlogPostDetails from "./page/BlogPostDetails";
import { Box } from "@mui/material";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=technology&apiKey=21d5d3a03d734129b73a836f45ad56d5&page=${page}`
      );
      setPosts(response.data.articles);
    };
    fetchPosts();
  }, [page]);

  return (
    <Box sx={{ width: "100vw" }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <BlogPostList posts={posts} setPage={setPage} page={page} />
            }
          />
          <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
