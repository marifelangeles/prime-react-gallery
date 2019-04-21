import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import '../App/App.css'
import Grid from "@material-ui/core/Grid";


class GalleryList extends Component {
    
    
    render() {
        return (
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={16}
          >
            {this.props.galleryItems.map(photo => (
              <GalleryItem
                key={photo.id}
                photo={photo}
                handleLikeImage={this.props.handleLikeImage}
              />
            ))}
          </Grid>
        );
    }
}

export default GalleryList;
