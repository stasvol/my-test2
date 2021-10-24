import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class Nove extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.state.pictures = this.pictures;
  }

  onDrop(picture) {
    this.setState({
      // pictures: this.pictures.concat(picture),
      pictures: [...this.pictures, picture],
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
    );
  }
}

export default Nove;
