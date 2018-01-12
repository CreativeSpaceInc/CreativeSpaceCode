import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const Iceskating2 = props =>



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
                <h3 class="my-3">Lunge</h3>
                <p>2017 Rostelecom Cup Opening short program performance.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/artistonice">ArtistOnIce</a></li>
                  <li>location: "Colorado, United States"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
           <img src={ require('./iceskating2.jpg') } style= {{width:'800px'}}/>
        </div>
        </Row>
      </Container>
    

export default Iceskating2;
;