import React from "react";
import { useBlogData } from "../../context/blogContext";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Results = () => {
    const { posts } = useBlogData();
  
    return (
      <Grid container spacing={2} sx={{ marginTop: '0px' }}> 
        {posts.map((item, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ height: 200 }}
              />
              <CardContent>
                <CardActionArea href={`/postdetails/${item.id}`}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.body}
                  </Typography>
                </CardActionArea>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default Results;
  
