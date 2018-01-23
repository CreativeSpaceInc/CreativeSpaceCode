// client/src/pages/Profile/Profile1.js
import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import "./Profile.css";

export class Profile1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      medium: "Other",
      creations: [],
      displayname: "",
      username: "",
      avatar: "",
      bio: "",
      email: "",
      occupation: "",
      location: ""
    }
    this.getProfile = this.getProfile.bind(this);
    this.logCreations = this.logCreations.bind(this);
  }

  componentDidMount() {
    this.getProfile(this.props.id);
    this.getCreations(this.props.id);
    this.logCreations(this.state.creations);
  }

  getProfile = (id) => {
    API.getProfile(id)
      .then(res =>
        this.setState({
          displayname: res.data.displayname,
          username: res.data.username,
          avatar: res.data.avatar,
          bio: res.data.bio,
          email: res.data.email,
          occupation: res.data.occupation,
          location: res.data.location,
         })
      )
      .catch(err => console.log(err));
  };

// ObjectId("5a56e2eb985d3115d4a77307")

  getCreations = (artist) => {
    API.getCreations(artist)
      .then(res =>
        this.setState({
          creations: res.data
         })
      )
      .catch(err => console.log(err));
      console.log(`Here are the creaations ${JSON.stringify(this.state.creations)}`);
  };

logCreations = (data) => {
  console.log(`here are is the creation data ${data}`)
}

  render() {
    return (
      <Container>
      <Nav>
         <NavLi href="/">Home</NavLi>
         <NavLi href="/about">About</NavLi>
         <NavLi href="/login">Log In</NavLi>
         <NavLi href="/signup">Sign Up</NavLi>

       </Nav>
        <Row>
        <Col size="md-8">
          <a href="/profile1"><h2 className="my-4" style={{textDecoration:"underline"}}><i className="fa fa-user"></i> My Profile</h2></a>
        </Col>

          <Col size="md-4">
            <a href="/Editprofile"><h2 className="my-4"><i className="fa fa-pencil-square-o"></i> Edit My Profile</h2></a>
          </Col>

        </Row><hr />
        <Row>
          <Col size="md-8">
            <h1 className="my-4">Featured Creations</h1>
            <form className="card-background">

            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">

              <CarDiv>

              <ol className="carousel-indicators" style={{borderBottom:"0px"}}>
                <CarLi data-slide-to="0" className="active"></CarLi>
                <CarLi data-slide-to="1"></CarLi>
                <CarLi data-slide-to="2"></CarLi>
                <CarLi data-slide-to="3"></CarLi>
              </ol>

                {this.state.creations.map(creation => (
                    <CarItem className="carousel-item active" key={creation._id}>
                  <CarImg
                    src={creation.url}
                    alt={creation.title}>
                  </CarImg>
                  <br />
                  <table style={{ fontSize:"16px",paddingBottom:"15px" }}>
                    <tbody>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Title</td>
                        <td id="creation-title" style={{paddingBottom:"15px",paddingLeft:"15px"}}><a href="/view">{creation.title}</a></td>
                      </tr>
                      <tr>
                        <td style={{paddingBottom:"15px","paddingRight":"15px",borderRight:"2px solid gray"}}>Medium</td>
                        <td id="creation-medium" style={{paddingBottom:"15px",paddingLeft:"15px"}}>{this.state.medium}</td>
                      </tr>
                      <tr>
                        <td style={{verticalAlign:"top",paddingRight:"15px",borderRight:"2px solid gray",marginBottom:"15px"}}>Description</td>
                        <td id="creation-description" style={{paddingLeft:"15px",marginBottom:"15px"}}>{creation.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </CarItem>
              ))}
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
            </form>
          </Col>

          <Col size="md-4">
            <h1 id="display-name" className="my-4">{this.state.displayname}</h1>
            <img id="avatar" className="img-fluid" src={this.state.avatar} alt="Artist Profile Avatar" />
            <h3 className="my-3">My Bio</h3>
            <p id="bio">{this.state.bio}</p>
            <h3 className="my-3">My Details</h3>
            <table>
            <tbody>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Username</td>
                <td id="username" style={{paddingLeft:"15px"}}>{this.state.username}</td>
              </tr>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>E-mail</td>
                <td id="email" style={{paddingLeft:"15px"}}><a href="/">{this.state.email}</a></td>
              </tr>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Occupation</td>
                <td id="title" style={{paddingLeft:"15px"}}>{this.state.occupation}</td>
              </tr>
              <tr>
                <td style={{paddingRight:"15px",borderRight:"2px solid gray"}}>Location</td>
                <td id="location" style={{paddingLeft:"15px"}}>{this.state.location}</td>
              </tr>
            </tbody>
            </table>
          </Col>
        </Row>
        <h3 className="my-4">Archives</h3>

        <Row>

          {this.state.creations.map (creation => (
            <Col
              key={creation._id}
              size="md-3"
              style={{marginBottom:"4px"}}
              name="2">
              <a href="/view">
                <ArchImg
                  src={creation.url}
                  name="2" />
                <p>{creation.title}</p>
              </a>
          </Col>))}



        </Row>
      </Container>
    );
  }
}