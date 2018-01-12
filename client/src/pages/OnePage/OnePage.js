
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const OnePage = props =>



      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          
          
          <NavLi href="/login">Log In</NavLi>
          <NavLi href="/signup">Sign Up</NavLi>                    
        </Nav>
        <br />
        <Row>

        
            <div class="col-md-4">
                <h3 class="my-3">Black Palimpsest</h3>
                <p>Found text from online chat rooms digitally collage underneath a layer of laser-etched plexi-glass.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/jameswaite">James Waite</a></li>
                  <li>location: "Cleveland, OH"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
           <img src={ require('./waite1.jpg') } style= {{width:'400px'}}/>
        </div>
        </Row>
        <br /><br /><br /><br /><br /><br />
      </Container>
    

export default OnePage;
;