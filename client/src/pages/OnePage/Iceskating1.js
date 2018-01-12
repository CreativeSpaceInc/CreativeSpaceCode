import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const Iceskating1 = props =>



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
                <h3 class="my-3">Exhibition</h3>
                <p>The lighting in the background serves to complement my costume, the tone of the music, my facial expression, and the overall tranquil emotion I am trying to convey.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/artistonice">ArtistOnIce</a></li>
                  <li>location: "Colorado, United States" </li>
                  
                </ul>
          
        </div>
        <div class="col-md-8">
           <img src={ require('./iceskating1.jpg') } style= {{width:'800px'}}/>
        </div>
        </Row>
      </Container>
    

export default Iceskating1;
;