import React, { Component } from "react";
import "./container.css";

import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/footer.js";
import ImageCell from "../ImageCell/ImageCell.js";



import Image1 from "../../images/images-1.jpg";
import Image2 from "../../images/images-2.jpg";
import Image3 from "../../images/images-3.jpg";
import Image4 from "../../images/images-4.jpg";
import Image5 from "../../images/images-5.jpg";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class Container extends Component {
    state = {
      images: [
          {
              image: Image1,
              clicked: false
          },
          {
              image: Image2,
              clicked: false
          },
          {
              image: Image3,
              clicked: false
          },
          {
              image: Image4,
              clicked: false
          },
          {
              image: Image5,
              clicked: false
          }
        ]
    };

    render() {
      return (
        <div>
            <Navbar />
            {this.state.images.map(item => {
                return (<ImageCell image={item.image} />)
            })}
            <Footer />
        </div>
      );
    }
  }
  

export default Container;
