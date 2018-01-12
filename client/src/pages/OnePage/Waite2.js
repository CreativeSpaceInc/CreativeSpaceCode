
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

export const Waite2 = props =>



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
                <h3 class="my-3">Virtually, Actually</h3>
                <p>FAn interactive installation that considers the 'physical' space of the internet.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/jameswaite">James Waite</a></li>
                  <li>location: "Cleveland, OH"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
           <img src={ require('./waite2.jpg') } style= {{width:'800px'}}/>
        </div>
        </Row>
      </Container>
  
export default Waite2;
;