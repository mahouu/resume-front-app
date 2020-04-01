import React from 'react'

const Skill = ({skill}) => {

    if(skill!==undefined){
        const items = [];
        for (const [value] of skill.skillViews.entries()) {
            const keywords = skill.skillViews[value].keywords;
            const keywordsFormated = [];
            for (const [index, value] of keywords.entries()) {
              keywordsFormated.push(<li>{value.skillKeywordDescription}</li>);
            }
            items.push(<React.Fragment><div  class="item"><h3 class="name">{skill.skillViews[value].description}</h3><div class="level master"><em>{skill.skillViews[value].level}</em><div class="bar"></div></div><ul class="keywords">{keywordsFormated}</ul></div></React.Fragment>);
        }
        return (<section class="section margin1">
        <header>
            <h2 class="section-title">Skills</h2>
        </header>
        <section id="skills">{items} </section>
    </section>);                   
    }else{
        return (<div>Loading skill data...</div>);
    }
};

export default Skill
