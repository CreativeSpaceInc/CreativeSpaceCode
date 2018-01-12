
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const Pinksoda1 = props =>



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
                <h3 class="my-3">Rumor KARD Dance Cover</h3>
                <p>Recorded at the Flats in Downtown Cleveland.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/pinksoda">PinkSoda</a></li>
                  <li>location: "Cleveland, OH"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
           <iframe width="800" height="500" src="https://www.youtube.com/embed/vmbcJm96L5w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        </Row>
      </Container>
  
export default Pinksoda1;
;