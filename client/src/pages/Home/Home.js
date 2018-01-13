// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class Home extends Component {
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
                  src={ require('./turtleriders.jpg') } 
                  alt="Turtle Riders"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                  src={ require('./waite2.jpg') } 
                  alt="Virtually, Actually"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                  src={ require('./dagger.jpg') } 
                  alt="Dagger"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  style={{maxHeight:"350px",minWidth:"50%",maxWidth:"100%"}}
                  src={ require('./gameassets.png') }
                  alt="Game Assets"></CarImg>
              </CarItem>
               <CarItem>
                <CarImg 
                  style={{maxHeight:"350px"}}
                  src={ require('./waite1.jpg') }
                  alt="Black Palimpsest"></CarImg>
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

          <Col size="sm-6 md-3" className="mb-4" name="1">
            <a href="/game">
              <ArchImg
                src={ require('./gameassets.png') }
                style= {{height:'200px', width:'400px'}}
                name="1">
              </ArchImg>
              <p>Game assets | Margwli</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="2">
            <a href="/waite2">
              <ArchImg
                src={ require('./waite2.jpg') }
                style= {{height:'200px'}}
                name="2" />
              <p>Virtually, Actually | James Waite</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="3">
            <a href="/turtle">
              <ArchImg
                src={ require('./turtleriders.jpg') }
                style= {{height:'200px'}}
                name="3" />
              <p>Turtle Riders | Margwli</p>
            </a>
          </Col>
          
          <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/dagger">
              <ArchImg
                src={ require('./dagger.jpg') } 
                style= {{height:'200px'}}
                name="4" />
              <p>Dagger | Margwli</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/onepage">
              <ArchImg
                src={ require('./waite1.jpg') } 
                style= {{height:'200px'}}
                name="4" />
              <p>Black Palimpsest| James Waite</p>
            </a>
          </Col>
           <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/waite3">
              <ArchImg
                src={ require('./waite3.jpg') } 
                style= {{height:'200px'}}
                name="4" />
              <p>Five Red Rectangles| James Waite</p>
            </a>
          </Col>

        </Row>
           <br /><br /> <br /><br /> <br /><br />
      </Container>
      </div>

    );
  }
}
export default Home;

