import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import ProjectCard from './ProjectCard'

const Home = () => {
  return (
    <React.Fragment>
      <section className="" id="home">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <h1 className="home-initials text-center">
                <span id="first-init">A</span>drian
                <br />
                <span id="second-init">S</span>mith       
              </h1>
            </div>
          </div>
          <div className="row text-center" id="contact-cta">
            <div className="col-sm-12">
              <button className="btn btn-lg mt-4 btn-outline-light">Contact Me</button>
            </div>
          </div>
        </div>
      </section>


      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-1 text-center" id="about-text">
              <h1 className="pb-4">What I Do</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Explicabo dicta minima expedita quas nihil pariatur officia 
                tenetur dolorem distinctio? Voluptatum optio earum ipsum dolorem 
                tempore quo amet commodi atque officiis! Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Deleniti facilis, voluptatum unde quod
                 ducimus, iusto in perspiciatis ea voluptate est minima magnam, dolorum 
                 minus. Unde itaque architecto neque cupiditate magnam.</p>
                 <div className="mt-3">
                  <a href="https://github.com/AsmithStudent" target="_blank"><i className="fab fa-github fa-2x pr-5"></i></a>
                  <a href="mailto:acsmith11@dons.usfca.edu"><i className="far fa-envelope fa-2x pr-3"></i></a>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Links to projects page with description */}  
      {/* Should bring user to specified project on the projects page rather than a separate single project page */}
      <section id="projects">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center pt-5 pb-4">
              <h1>Some of My Work</h1>
            </div>
          </div>
          <div className="row">
            <ProjectCard title="Project Title" text="With supporting text below as a natural lead-in to additional content" />
            <ProjectCard title="Project Title" text="With supporting text below as a natural lead-in to additional content" />
            <ProjectCard title="Project Title" text="With supporting text below as a natural lead-in to additional content"/>
            <ProjectCard title="Project Title" text="With supporting text below as a natural lead-in to additional content"/>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="row">
            Contact
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home
