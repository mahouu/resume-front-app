import React from 'react'

const Experience = ({experience}) => {

    if(experience!==undefined){

        const items = [];

        for (const [value] of experience.experienceInfoViews.entries()) {
            items.push(
          <section class="education-item">
          <header>
          
            <div class="header-left">
              <div class="studyType">
                {experience.experienceInfoViews[value].titleView}
              </div>
              <div class="area">
                
              </div>
              <div class="institution">
                {experience.experienceInfoViews[value].companyView}
              </div>
            </div>
            <div class="date">
              <span class="startDate">
              {experience.experienceInfoViews[value].urlView}
              </span>
              <span class="endDate">
              </span>
            </div>
            <div>
              Role description {experience.experienceInfoViews[value].roleDescriptionView}
            </div>
            <div>
              startDateView {experience.experienceInfoViews[value].startDateView}
            </div>
            <div>
              endDateView {experience.experienceInfoViews[value].endDateView}
            </div>
          </header>
    
    
          <ul class="courses">
            <li>{experience.experienceInfoViews[value].descriptionView}</li>
          </ul>
    
          <div class="item">
          </div>
        </section>);
        }
        return (<section id="experience"> 
            {items}
        </section>);                   
    }else{
        return (<div>Loading experience data...</div>);
    }
};

export default Experience
