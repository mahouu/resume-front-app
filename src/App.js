import React, {Component} from 'react';
import Contacts from './components/contacts';
import Education from './components/education';
import Experience from './components/experience';


class App extends Component {
    render() {
        return (
<html>
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
  <title>Mauricio Miralles</title>
  <link rel="stylesheet" href="./font-awesome.min.css"/>
  <style id="holderjs-style" type="text/css"/>
</head>
  <body class=" __plain_text_READY__">
  

  <div id="resume">
  <div class="skills">
               <Contacts contacts={this.state.contacts} />
  </div>
           <section class="section main-summary">
            <section>
                <div><p>Mauricio hails from Barcelona. He has earned degrees from the University of Garben. Before starting working at Lastminute, he worked for Yell pages as a full time software developer. </p></div>
            </section>
        </section>
    <div>
             
            </div>
    <section class="section margin1">
        <header>
            <h2 class="section-title">Skills</h2>
        </header>
        <section id="skills">
            <div class="item">
                <h3 class="name">
                    Web Development
                </h3>
                 
                <div class="level master">
                    <em>Master</em>
                    <div class="bar"></div>
                </div>
                <ul class="keywords">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>Angular</li>
                    <li>ES6</li>
                    <li>Spring</li>
                    <li>JPA</li>
                    <li>Mongo</li>
                    <li>Rest</li>
                    <li>Microservices</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                </ul>
            </div>
        </section>
    </section>

{/* <!-- Experience --> */}

<Experience experience={this.state.experience} />

{/*  <!-- end experience --> */}
    <section class="section">
      <header>
        <h2 class="section-title">Work Experience <span class="item-count">(1)</span></h2>
      </header>
    
      <section id="work">
        <section class="work-item">
    
            <input id="work-item-0" type="checkbox" class="toggle-item" checked="checked"/>
            <label for="work-item-0"></label>
    
                <header>
                    <div class="position">Software developer</div>
                    <div class="company">LastMinute.com </div>
                    <div class="date">
                      <span class="startDate">December 2013</span> 
                        <span class="endDate">- November 2017</span> 
                    </div>
                </header>
                
            <span class="website">
                <a target="_blank" href="http://www.lastminute.com/">http://www.lastminute.com/</a>
            </span>         <div class="item" id="work-item">
            <div class="summary">
              <p></p><p>Software developer at many teams in to many projects, such as Cruises, Hotels, SEO (flights and hotels), transfers, and vacational package. In some cases Leading some of those team for a few months.</p><p></p>
            </div>
            <ul class="highlights">
                <li><p>Always creating a good mood into the team.</p></li>
                <li><p>Always looking for a new ways of developing products.</p></li>
                <li><p>Learning every month new libraries / technologies</p></li>
            </ul>
            </div>
        </section>
      </section>
    </section>
    <section class="section">
      <header>
        <h2 class="section-title">Education <span class="item-count">(3)</span></h2>
      </header>      
          <Education education={this.state.education} />
    </section>
    <section class="section">
      <header>
        <h2 class="section-title">Publications</h2>
      </header>
      <section id="publications">
        <section class="publication-item">
            <input id="publication-item-0" type="checkbox" class="toggle-item" checked="checked"/>
            <label for="publication-item-0"></label>
    
          <header>
            <div class="header-left">
              <span class="name">
              Personal CV repo online
              </span>
              <span class="publisher">
              in Bitbucket
              </span>
            </div>
          </header>
    
          <div class="item">  
            <div class="summary">
              <p></p><p>Just only an example to show the implementation of an hexagonal architecture.</p><p></p>
            </div>
          </div>
        </section>
      </section>
    </section>
    <section class="section margin1">
      <header>
        <h2 class="section-title">Languages</h2>
      </header>
      <section id="languages">
        <div class="display">
          <h3 class="language">
            English
          </h3>
          <div class="item">
            <div class="level fluency fluent speaker">
              <em>Fluent speaker</em>
              <div class="bar"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="section margin1">
      <header>
        <h2 class="section-title">Interests</h2>
      </header>
      <section id="interests">
        <div class="item">
          <h3 class="name">
            Photography
          </h3>
          <ul class="keywords">
            <li>Nikon</li>
            <li>Fuji</li>
          </ul>
        </div>
        <div class="item">
          <h3 class="name">
            Sports
          </h3>
          <ul class="keywords">
            <li>Running</li>
            <li>Marathon &amp; Half Marathon</li>
            <li>MTB</li>
            <li>Swimming</li>
          </ul>
        </div>
      </section>
    </section>
    <section class="section">
      <header>
        <h2 class="section-title">References</h2>
      </header>
      <section id="references">
        <div class="item">
          <blockquote class="reference">
            “ Mauricio Miralles is an exceptional engineer who can be trusted, is a careful developer and hard worker . Has skills, knowledge and understanding of dependencies of all stages of the project. Shows all the time a strong experience in areas such software architecture and knowledge of IT technologies. ”
          </blockquote>
          <div class="name">
            Oscar García
          </div>
        </div>
      </section>
    </section>

  

</div></body></html>
            
        )
    }

    state = {
        contacts: {}
    };


    componentDidMount() {
         fetch('http://192.168.1.148:8082/contactInfo')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log);

        fetch('http://192.168.1.148:8082/education/EN')
            .then(res => res.json())
            .then((data) => {
                this.setState({ education: data })
            })
            .catch(console.log);
        fetch('http://192.168.1.148:8082/experience/EN')
            .then(res => res.json())
            .then((data) => {
                this.setState({ experience: data })
            })
            .catch(console.log);
    }
}

export default App;
