import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryItems: [
    ],
  }

  // run when component loads
  componentDidMount() {
    this.getPhoto();
  }

  // GET route --> retrieves photos from /gallery
  // expect array of objects with properties id, path, description, likes
  getPhoto = () => {
    console.log('in getPhotos');
    axios.get('/gallery')
      .then(response => {
        console.log('response from GET:', response.data);
        // store photos in galleryItems array
        this.setState({
          galleryItems: response.data,
        });
      }).catch(error => {
        alert('GET /gallery request failed');
        console.log('GET /gallery request failed', error);
      });
  }

  handleLikeImage = (image) => {
    console.log('handleLikeImage hit');
    axios({
      method: "PUT",
      url: `/gallery/like/${image.id}`,
    }).then(response => {
      console.log('back from PUT request');
      this.getPhoto();
      
    })
  }
  


  

  

  render() {

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br />
        <h2>Gallery</h2>
        <p>Click on an image</p>

        <div>
          <GalleryList
            galleryItems={this.state.galleryItems}
            handleLikeImage={this.handleLikeImage}
          />
        </div>
      </div>
    );
  }
}

export default App;
