// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class MusicHome extends Component {
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
          <NavLi href="/signup">Sign up</NavLi>          
        </Nav>
        <br />
        <Row>
          <div className="col-lg-3 col-md-3">
            <h2 className="my-4 rotate">Browse Creations:</h2>
            <div className="list-group">
              <a href="/" className="list-group-item mouseoverStyle">Artwork</a>
              <a href="/music" className="list-group-item mouseoverStyle">Music</a>
              <a href="/other" className="list-group-item mouseoverStyle">Other</a>
              <a href="/video" className="list-group-item mouseoverStyle">Video</a>
            </div>
          </div>
          <br /><br />
          <div id="carouselExampleIndicators" className="carousel slide col-lg-9 col-md-9" data-ride="carousel">
            <CarDiv>
              <ol className="carousel-indicators" style={{borderBottom:"0px"}}>
                <CarLi data-slide-to="0" className="active"></CarLi>
                <CarLi data-slide-to="1"></CarLi>
                <CarLi data-slide-to="2"></CarLi>
                <CarLi data-slide-to="3"></CarLi>
                
              </ol>
              <CarItem className="carousel-item active">
                
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/bW1Mz7ngCA4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </CarItem>
          
            </CarDiv>
            <CarA 
              className="carousel-control-prev" 
              data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="sr-only">Previous</span>
            </CarA>
            <CarA 
              className="carousel-control-next" 
              data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </CarA>
          </div>

        </Row>
        <br />
        <Row>
         <Col size="sm-6 md-3" className="mb-4" name="1">
            <a href="/guitar1">
              <iframe width="210" height="160" src="https://www.youtube.com/embed/bW1Mz7ngCA4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              
              <p href="/guitar1">BoTW Guitar Cover | SamGriffin Guitar</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="1">
            <a href="/guitar2">
              <iframe width="210" height="160" src="https://www.youtube.com/embed/kxcVvaKDv1o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              
              <p href="/guitar2">Super Mario Odessy Guitar Cover | SamGriffin Guitar</p>
            </a>
          </Col>
          <br />

        </Row>
        <br /><br /><br /><br /><br />
            
      </Container>
    );
  }
}
export default MusicHome;