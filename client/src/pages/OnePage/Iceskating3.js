import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const Iceskating3 = props =>



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
                <h3 class="my-3">Spiral</h3>
                <p>Performed in 2010 to Memoirs of a Geisha by John Williams. I built up a lot of flexibility from years of practice, and combined this ability with a costume that was custom-designed to complete the aesthetic package I hoped to achieve.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/artistonice">ArtistOnIce</a></li>
                  <li>location: "Colorado, United States"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
           <img src={ require('./iceskating3.JPG') } style= {{width:'800px'}}/>
        </div>
        </Row>
      </Container>
    

export default Iceskating3;
;