import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const Iceskating4 = props =>



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
                <h3 class="my-3">2010 Olympic Games</h3>
                <p>Free style program skated to Carmen by Angele Dubeau and La Pieta.”</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/artistonice">ArtistOnIce</a></li>
                  <li>location: "Colorado, United States"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
          <iframe width="840" height="500" src="https://www.youtube.com/embed/Hsp-7S79IYI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        </Row>
      </Container>
    

export default Iceskating4;
;