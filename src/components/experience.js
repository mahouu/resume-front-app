import React from 'react'

const Experience = ({experience}) => {

    if(experience!==undefined){

        const items = [];

        for (const [value] of experience.experienceInfoViews.entries()) {

            const tasks = experience.experienceInfoViews[value].tasksView;
            const tasksFormated = [];
            for (const [index, value] of tasks.entries()) {
              tasksFormated.push(<li><p>{value.description}</p></li>)
            }


            items.push(
          
    
            <section id="work">
              <section class="work-item">
    
              <input id="work-item-0" type="checkbox" class="toggle-item" checked="checked"/>
              <label for="work-item-0"></label>
    
              <header>
                <div class="position">{experience.experienceInfoViews[value].titleView}</div>
                <div class="company">{experience.experienceInfoViews[value].companyView} </div>
                <div class="date">
                  <span class="startDate">{experience.experienceInfoViews[value].startDateView}</span> 
                  <span class="endDate">- {experience.experienceInfoViews[value].endDateView}</span> 
                </div>
              </header>
                
              <span class="website">
                <a target="_blank" href="{experience.experienceInfoViews[value].urlView}">{experience.experienceInfoViews[value].urlView}</a>
              </span>         
              <div class="item" id="work-item">
                <div class="summary">
                  <p></p>
                  <p>{experience.experienceInfoViews[value].roleDescriptionView}</p>
                  <p></p>
                </div>
                <ul class="highlights">
                  {tasksFormated}
                </ul>
              </div>
            </section>
          </section>
          );
        }
        return (<section id="experience"> 
          <section class="section">
            <header>
              <h2 class="section-title">Work Experience <span class="item-count">(12)</span></h2>
            </header>
            {items}
        </section>
                </section>);                   
    }else{
        return (<div>Loading experience data...</div>);
    }
};

export default Experience
