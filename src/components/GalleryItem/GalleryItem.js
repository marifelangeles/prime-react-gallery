import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class GalleryItem extends Component {
  state = {
    showImage: true
  };

  handleLikePhoto = event => {
    console.log("photo liked");
  };

  // Click on image changes state to show image or description
  toggleImage = () => {
    console.log("image clicked");
    this.setState({
      showImage: !this.state.showImage
    });
    console.log(this.state.showImage);
  };

  // Click on image hides image and description shows
  displayImage = () => {
    console.log("toggle image");
    let display = this.state.showImage;
    if (display) {
      return (
        <img src={this.props.photo.path} alt={this.props.photo.description} />
      );
    } else {
      return <div className="description-div">{this.props.photo.description}</div>;
    }
  };

  // show text according to number of likes
  getLikes = () => {
    console.log("getLikes hit");
    if (this.props.photo.likes === 0) {
      return "No has liked this yet";
    } else if (this.props.photo.likes === 1) {
      return "1 person likes this";
    } else if (this.props.photo.likes > 1) {
      return <div>{this.props.photo.likes} people like this</div>;
    }
  };

  // avoid infinite loop -> can't call directly on button
  handleLikeButton = () => {
      console.log('handleLikeButton hit');
      this.props.handleLikeImage(this.props.photo);
  }


  render() {
    return (
      <Grid item xs={12} sm={6} md={4} className="gallery-item">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item sm={12} onClick={this.toggleImage} className="image">
            {this.displayImage()}
          </Grid>
          <Grid item sm={12}>
            {this.getLikes()}
          </Grid>
          <Grid item sm={12}>
            <button
              value={this.props.photo.likes}
              onClick={this.handleLikeButton}
            >
              LOVE IT!
            </button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default GalleryItem;
