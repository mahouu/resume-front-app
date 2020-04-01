import React from 'react'

const Skill = ({skill}) => {

    if(skill!==undefined){

        const items = [];

        for (const [value] of skill.skillViews.entries()) {
            items.push(
          <section class="section">
            <header>
              <h2 class="section-title">{skill.skillViews[value].description} <span class="item-count">(1)</span></h2>
            </header>
        </section>
          );
        }
        return (<section id="skill"> 
            {items}
        </section>);                   
    }else{
        return (<div>Loading skill data...</div>);
    }
};

export default Skill
