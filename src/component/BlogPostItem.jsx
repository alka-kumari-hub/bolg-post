import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const BlogPostItem = ({ post }) => {
  return (
    <Card sx={{ minWidth: 650 }}>
      <Typography
        sx={{ backgroundColor: "lightgray", padding: "1rem" }}
        variant="h6"
      >
        Word of the Day
      </Typography>

      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.description}
        </Typography>
        <Typography variant="body2">Publshed At: {post.publishedAt}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default BlogPostItem;
