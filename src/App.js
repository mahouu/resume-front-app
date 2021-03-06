import React, {Component} from 'react';
import Contacts from './components/contacts';
import Education from './components/education';
import Experience from './components/experience';
import Skill from './components/skill';


class App extends Component {
    render() {
        return (
<html>
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
  <title>Mauricio Miralles</title>
  <link rel="stylesheet" href="./font-awesome.min.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
    
    
    <Skill skill={this.state.skill} />

    <section class="section">
      <header>
        <h2 class="section-title">Education <span class="item-count">(3)</span></h2>
      </header>      
          <Education education={this.state.education} />
    </section>
       
    <Experience experience={this.state.experience} />
    
    

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
    <section class="section">
      <header>
        <h2 class="section-title">One more thing</h2>
      </header>
      <section id="references">
        <div class="item">
          <blockquote class="reference">
            “ Technologies without any doubt, I take several meetups about coding or related like Madrid JUG, but also photography, I ́ve been working for 4 years as sport photopress, for me is my other passion you can take a look at https://www.flickr.com/photos/mahouu. In some cases I play guitar and piano and spend some time reading (tech and non tech eBooks). Actually I have a subscription to safari books, and waiting to attend in September to the codemotion Madrid 2019 and JaxLondon 2019.
Actually I’́ve been working (pet project) on my online CV (​www.mauriciomiralles.es​) is in beta, and it ́s pending of the code review of some co-workers in order to upload the code to a public git repository, at this moment is offline due the raspberry that I use for that purpose is in a box in Madrid waiting for me to carry it to London. ”
          </blockquote>
        </div>
      </section>
    </section>
    <section class="section margin1">
      <header>
        <h2 class="section-title">Interests</h2>
      </header>
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
        fetch('http://192.168.1.148:8082/skill/EN')
            .then(res => res.json())
            .then((data) => {
                this.setState({ skill: data })
            })
            .catch(console.log);
    }
}

export default App;
