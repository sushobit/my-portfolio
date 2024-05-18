import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GreenLightRedlight Game"
              description="A small responsive design web game that recreates the iconic green light/red light game from Squid Games. The game will display a box that changes color between green and red. The goal of the game is to get to n clicks on the green box within y seconds."
              ghLink="https://github.com/sushobit/GreenlightRedlight_game"
              demoLink="https://greenlight-redlight-game.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Product Management Application"
              description="The app displays the total number of products and the number of unique product categories. It ensures these statistics update automatically when products are added, edited, or deleted. Also a dedicated page with a form pops up to add new products."
              ghLink="https://github.com/sushobit/Endimension_Assignment"
              demoLink="https://endimension-assignment-sushobhit.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="A Personal Finance Tracker Web Application"
              description="A simple, user-friendly web application that allows users to track their personal finances, including income, expenses, and the ability to generate basic reports."
              ghLink="https://github.com/sushobit/roziroti_Assignment"
              demoLink="https://roziroti-assignment.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="A full stack Recipe App using React.js,Node.js"
              description="I implemented an authentication system leveraging JWT(JSON Web Tokens) for secure user authentication management. Additionally, I integrated pagination features to manage datasets gracefully, optimizing performance and user interface responsiveness. The search functionality enriches user experience by allowing seamless and quick data retrieval based on user queries."
              ghLink="https://github.com/sushobit/mittarv_assignment"
              demoLink="https://mittarv-assignment.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="A SWIGGY CLONE webApp"
              description="An innovative Swiggy clone web app allowing restaurants to showcase diverse menus for online food delivery. Users can easily explore different restaurants, browse their dishes, and place orders hassle-free. The platform provides restaurant management tools for updating menus and ensuring smooth delivery operations. It aims to offer convenience and a wide variety of culinary choices for food enthusiasts."
              ghLink="https://github.com/sushobit/faebikes_assignment"
              demoLink="https://faebikes-assignment-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="A web-based application for touch typing."
              description="The web application includes features such as WPM (Words Per Minute) tracking to measure typing speed, accuracy metrics to gauge precision, and key press analytics for detailed performance insights. Engaging animations enhance the user experience, providing visual feedback and motivation during practice sessions."
              ghLink="https://github.com/sushobit/ChaabiAssignment"
              demoLink="https://chaabi-assignment-five.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;