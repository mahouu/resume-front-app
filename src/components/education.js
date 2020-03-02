import React from 'react'

const Education = ({education}) => {

    if(education!==undefined){

        const items = [];

        for (const [value] of education.educationInfo.entries()) {
            items.push(
<section class="education-item">
          <header>
          
            <div class="header-left">
              <div class="studyType">
                {education.educationInfo[value].titleView}
              </div>
              <div class="area">
                
              </div>
              <div class="institution">
                {education.educationInfo[value].subTitleView}
              </div>
            </div>
            <div class="date">
              <span class="startDate">
              {education.educationInfo[value].dateView}
              </span>
              <span class="endDate">
              </span>
            </div>
          </header>
    
    
          <ul class="courses">
            <li>{education.educationInfo[value].descriptionView}</li>
          </ul>
    
          <div class="item">
          </div>
        </section>);
        }
        return (<section id="education"> 
            {items}
        </section>);                   
    }else{
        return (<div>Loading education data...</div>);
    }
};

export default Education
