
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";


export const Dagger = props =>



      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          
          <NavLi href="/upload">Upload</NavLi>
          <NavLi href="/editprofile">Edit profile</NavLi>
          <NavLi href="/logout">Log out</NavLi>                    
        </Nav>
        <br />
        <Row>

        
            <div class="col-md-4">
                <h3 class="my-3">Dagger</h3>
                <p>Created using Photoshop.</p>
                <h3 class="my-3">Creator:</h3>
                <ul>
                  <li><a href="/margwli">Margwli</a></li>
                  <li>location: "Cleveland, OH"</li>
                  
          </ul>
          
        </div>
        <div class="col-md-8">
           <img src={ require('./dagger.jpg') } style= {{width:'800px'}}/>
        </div>
        </Row>
      </Container>
   
export default Dagger;
;