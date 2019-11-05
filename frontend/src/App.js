import React, { Component } from 'react';
import './App.scss';
import 'bulma-helpers/css/bulma-helpers.min.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Heading } from 'react-bulma-components';
import me from './me.jpg'


export const App = ({ location }) => {

  const scaleImg = {
    width: '128px',
    height: '128px',
    objectFit:"cover"
  };

  const bgColor = {
    backgroundColor : "rgba(255,255,255,0)"
  };

  const list = {
    marginTop: "12px",
    display: "list-item",
    listStyleType: "circle"
  };


  return (
    <div className="App">
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" style={bgColor}>
        <div className="navbar-brand is-pulled-left">
          <figure className="image is-80x80 has-padding-10" style={scaleImg}>
            <img className="is-rounded" src={me} />
          </figure>
          <div className='is-pulled-left'>
            <Heading className="has-margin-5">
              <br/> george and<i>erson <span style={{ fontSize:"small"}}>.io</span></i>
            </Heading>
            <a className="has-text-grey is-pulled-left has-margin-left-5" href="mailto:g@erson.io">g@erson.io</a> 
          </div>
        </div>
      </nav>

      <section className="section">
        <br/><br/>
        <div class="hero-body ">
          <div class="columns is-centered">
            <div class="column is-half">
              <div className="container" style={{textAlign:"left"}}>
                <h1 className="title">about me</h1>
                <h2 className="subtitle" style={{fontSize:"small"}}>
                  synths, motorbikes, french and software
                </h2>
                <div className="has-padding-top-1">
                  I've been working in software for the past 4 years, of which 3 have been as a full stack developer. I'm always curious about the latest trends in software; earlier this year I spent a few months learning Haskell to get a better understanding of functional programming. <br/> Lately I've been very interested in composing music via visual programming (Max MSP), and started building my own DIY synthesizer - I also recently returned from a 4 month trip to France, working remotely, to improve my level of French. 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-body ">
          <div class="columns is-centered">
            <div class="column is-half">
              <div className="container" style={{textAlign:"left"}}>
                <h1 className="title">skills & education</h1>
                <div className="columns has-padding-top-1">
                  <div className="column">
                    <ul>
                      <li style={list}> BSc Software Engineering (Hons) 1st<br/> Lancaster University</li>
                      <li style={list}> Strong experience with JavaScript/ES6, both OO and functional paradigms (React hooks)</li>
                      <li style={list}> Experience with state management library Redux (& React) </li>
                      <li style={list}> Designing RESTful APIs with Django Rest Framework, Laravel </li>
                      <li style={list}> Consuming RESTful APIs in React </li>
                      <li style={list}> Developing & maintaining legacy projects in Symfony (Twig, PHP) </li>
                    </ul>
                  </div>
                  
                  <div className="column">
                    <ul>
                      <li style={list}> Strong understanding of Git/SCM</li>
                      <li style={list}> Strong experience with Docker & Docker compose</li>
                      <li style={list}> Organising project work on Kanban boards (Jira, Github projects etc)</li>
                      <li style={list}> Working in agile teams</li>
                      <li style={list}> Architecting software solutions with a team</li>
                      <li style={list}> Communicating with more experienced developers to gain better understanding</li>
                      <li style={list}> Building & using CICD pipelines</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-body ">
          <div class="columns is-centered">
            <div class="column is-half">
              <div className="container" style={{textAlign:"left"}}>
                <h1 className="title">past employment</h1>
                <div className="has-padding-top-1">
                  <ul>
                    <li>
                      <a href="https://coherent.net"><h1 style={{fontSize:"x-large"}} > Coherent Software (part time) </h1></a>
                      <p style={{fontSize:"large"}}> Web Developer </p>
                      <p className="has-text-grey"> November 2015 - June 2016 </p>
                      <br/><br/>

                      <a href="https://www.redembedded.com/"><h1 style={{fontSize:"x-large"}}> Red Embedded </h1></a>
                      <p style={{fontSize:"large"}}> Junior Developer </p>
                      <p className="has-text-grey"> June 2016 - September 2017 </p>
                      <br/><br/>

                      <a href="https://coherent.net"><h1 style={{fontSize:"x-large"}}> Coherent Software (part time) </h1></a>
                      <p style={{fontSize:"large"}}> Web Developer </p>
                      <p className="has-text-grey"> September 2017 - June 2018 </p>
                      <br/><br/>

                      <a href="https://coherent.net"><h1 style={{fontSize:"x-large"}}> Coherent Software </h1></a>
                      <p style={{fontSize:"large"}}> Software Engineer </p>
                      <p className="has-text-grey"> September 2018 - </p>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-body ">
          <div class="columns is-centered">
            <div class="column is-half">
              <div className="container" style={{textAlign:"left"}}>
                <h1 className="title">past work & personal projects</h1>
                <div className="has-padding-top-1">
                  While at Red Embedded, worked on a threaded timer library in C++ for bluetooth devices.
                  Worked on their <a href="https://www.redembedded.com/consulting/bigfoot/">bigfoot</a> system, modifying infrared controller software to send signals asynchronously
                  <br/><br/>

                  At university, worked on a group project using embedded devices to record motion/temperature etc. using Symfony to record a history of changes, and show as a graph
                  <br/><br/>

                  While at Coherent Software, worked on a number of projects including;
                  <ul style={{paddingLeft:"40px"}}>
                    <li style={list}> An E-commerce system tracking stock from different streams (ebay, magento) etc. and creating invoices in Xero  - Django/React</li>
                    <li style={list}> Time tracking app for billing hours against projects - Django/React </li>
                    <li style={list}> A large CRM which matches buyers to sellers by location - Symfony/PHP</li>
                    <li style={list}> Management software for manually & automatically assigning jobs to users, exposing APIs for mobile app to display assigned jobs to end user -  Django/React</li>

                    <li style={list}> Wrote specifications & quotes for several projects </li>

                  </ul>
                  <br/>

                  Wrote a basic <a href="https://github.com/g-erson/lispesque">parser</a> based on Lisp, and the <a href="https://adventofcode.com/">Advent of Code</a> puzzles in Haskell
                  <br/>


                  Built and deployed this website with react/express/docker! 
                  Secured with letsencrypt
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
