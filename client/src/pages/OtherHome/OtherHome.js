// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class OtherHome extends Component {
  state = {
    artist: "5a34a9d1afaabc1820db0b32"
  };

  render() {
    return (
      <div>
      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          <NavLi href="/login">Log in</NavLi>
          <NavLi href="/signup">Sign up</NavLi>          
        </Nav>
        <br /><br />
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
          <div id="carouselExampleIndicators" className="carousel slide col-lg-9 col-md-9" data-ride="carousel">
            <CarDiv>
              <ol className="carousel-indicators" style={{borderBottom:"0px"}}>
                <CarLi data-slide-to="0" className="active"></CarLi>
                <CarLi data-slide-to="1"></CarLi>
                <CarLi data-slide-to="2"></CarLi>
                <CarLi data-slide-to="3"></CarLi>
                
              </ol>
              <CarItem className="carousel-item active">
                <CarImg 
                  style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                  src={ require('./iceskating1.jpg') } 
                  alt="Exhibition"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                  src={ require('./iceskating2.jpg') } 
                  alt="Lunge"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  style={{maxHeight:"350px"}}
                  src={ require('./iceskating3.JPG') } 
                  alt="Spiral"></CarImg>
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
        <br /><br />
        <Row>

        
          <Col size="sm-6 md-2" className="mb-4" name="3">
            <a href="/Iceskating3">
              <ArchImg
                src={ require('./iceskating3.JPG') }
                style= {{height:'200px'}}
                name="3" />
              <p>Spiral | ArtistOnIce</p>
            </a>
          </Col>
          
          <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/Iceskating2">
              <ArchImg
                src={ require('./iceskating2.jpg') } 
                style= {{height:'200px'}}
                name="4" />
              <p>Lunge | ArtistOnIce</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/Iceskating1">
              <ArchImg
                src={ require('./iceskating1.jpg') } 
                style= {{height:'200px'}}
                name="4" />
              <p>Exhibition| ArtistOnIce</p>
            </a>
          </Col>
           <Col size="sm-6 md-3" className="mb-4" name="1">
            <a href="/Iceskating4">
              <iframe width="310" height="200" src="https://www.youtube.com/embed/Hsp-7S79IYI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              
              <p>2010 Olympic Games | ArtistOnIce</p>
            </a>
          </Col>

        </Row>
        <br /><br /><br /><br /><br />
           
      </Container>
      </div>
    );
  }
}
export default OtherHome;
