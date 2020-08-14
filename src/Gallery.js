import React, { Component } from "react";
import gallery from './building.png'
import a1 from './Gallerypic/album1.jpg';
import a2 from './Gallerypic/album2.jpg';
import a3 from './Gallerypic/album3.jpg';
import a4 from './Gallerypic/album4.jpg';
import a5 from './Gallerypic/album5.jpg';
import a6 from './Gallerypic/album6.jpg';
import a7 from './Gallerypic/album7.jpg';
import a8 from './Gallerypic/album8.jpg';
 
class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="gallerypic">
      <img src={gallery} className="gallerypic" alt="gallerypic" />
      </div>
      <div className="gallerypictext">
          <h1>GALLERY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            <br/> elit. Sed sed odio a odio ultricies facilisis. 
            <br/>Vivamus vel egestas mi, ac auctor metus. 
            <br/>Suspendisse egestas sodales posuere. </p>
          </div>

          <div className="galleryback">
<img src={a1} className="galleryalbum1" alt ="galleryalbum1"/>
<p className="galleryalbum1text"> ALBUM 1</p>
<img src={a2} className="galleryalbum2" alt ="galleryalbum2"/>
<p className="galleryalbum2text"> ALBUM 2</p>
<img src={a3} className="galleryalbum3" alt ="galleryalbum3"/>
<p className="galleryalbum3text"> ALBUM 3</p>
<img src={a4} className="galleryalbum4" alt ="galleryalbum4"/>
<p className="galleryalbum4text"> ALBUM 4</p>
<img src={a5} className="galleryalbum5" alt ="galleryalbum5"/>
<p className="galleryalbum5text"> ALBUM 5</p>
<img src={a6} className="galleryalbum6" alt ="galleryalbum6"/>
<p className="galleryalbum6text"> ALBUM 6</p>
<img src={a7} className="galleryalbum7" alt ="galleryalbum7"/>
<p className="galleryalbum7text"> ALBUM 7</p>
<img src={a8} className="galleryalbum8" alt ="galleryalbum8"/>
<p className="galleryalbum8text"> ALBUM 8</p>

          </div>
      </div>
    );
  }
}
export default Gallery;