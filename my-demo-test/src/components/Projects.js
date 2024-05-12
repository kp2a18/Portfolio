import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/project-img1.png";
import projImg2 from "../assets/image/project-img2.png";
import projImg3 from "../assets/image/project-img3.png";
import colorSharp2 from "../assets/image/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Web Development",
      description: "Created a fully functional e-commerce website using HTML and JavaScript: Implemented features for product browsing, cart management, and secure transactions.",
      imgUrl: projImg1,
    },
    {
      title: "Woman Security App",
      description: "Developed a woman security app using Android Studio:Features included SOS alerts, location tracking, and TV emergency contacts.",
      imgUrl: projImg2,
    },
    {
      title: "Data Analysis  ",
      description: "Design & Development Website Report Analysis using Excel",
      imgUrl: projImg3,
    },
    {
      title: "Customer Data Plateform(CDP)",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Software Developer",
      description: "Design & Development: Create & Upload Landing pages in Marketing Cloud using Selenium",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Driven and innovative Full Stack Web Developer enthusiastic about problem-solving and creating meaningful results. Committed to lifelong learning through personal experience in troubleshooting and resolving current issues and challenges. Experience in HTML, CSS, JavaScript, React, Node.js, and SQL, with professional development and practical involvement in CDP and Selenium projects. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I am looking for a position that offers opportunities for personal growth and the opportunity to work on unique technologies and projects that make a difference in a vibrant, cooperative, and encouraging workplace.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am looking for a position that offers opportunities for personal growth and the opportunity to work on unique technologies and projects that make a difference in a vibrant, cooperative, and encouraging workplace.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}