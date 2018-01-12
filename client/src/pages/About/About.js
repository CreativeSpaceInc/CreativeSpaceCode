// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class About extends Component {
  state = {
    artist: "5a34a9d1afaabc1820db0b32"
  };

  render() {
    return (
    
      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
           <NavLi href="/about">About</NavLi>
          <NavLi href="/login">Log in</NavLi>
          <NavLi href="/signup">Sign Up</NavLi>
        </Nav>
        
       <br />

        
        <Row>
          <div class="col-lg-4 col-sm-6 text-center mb-4">
              
              <h3>Arushi Prakash
                <small> Front End</small>
                <img src={ require('./Arushi.jpg') } style= {{width:'200px', height:'200px'}}/>
              </h3>
            <p>Worked on the logo and the layout/visuals of the site and incorperated React.</p>
        </div>
      
         
          <div class="col-lg-4 col-sm-6 text-center mb-4">
              
              
        </div>
                 
          <div class="col-lg-4 col-sm-6 text-center mb-4">
              
              <h3>Becca Ionescu
                <small> Front End</small>
                <img src={ require('./becca.jpg') } style= {{width:'140px', height:'200px'}}/>
              </h3>
            <p>Worked on the logo and the layout/visuals of the site and incorperated React.</p>
        </div>
        </Row>
        <Row>
        <br />
        </Row>
         <Row>
          <div class="col-lg-4 col-sm-6 text-center mb-4">
              <h3>James Gomez
                <small> Back End</small>
                <img src={ require('./jamesg.JPG') } style= {{width:'180px', height:'200px'}}/>
              </h3>
            <p>Worked on setting up the mongo database, and incorperating passport.</p> 
              
        </div>

          <div class="col-lg-4 col-sm-6 text-center mb-4">
              
             
        </div>
         <div class="col-lg-4 col-sm-6 text-center mb-4">
          <h3>James Waite
                <small> Back End</small>
                <img src={ require('./jamesw.jpg') } style= {{width:'200px', height:'200px'}}/>
              </h3>
            <p>Worked on verification and the upload feature.</p> 
              
             
        </div>
        </Row>

  <br /><br /><br /><br /><br /><br />

      </Container>
      
    );
  }
}
export default About;
