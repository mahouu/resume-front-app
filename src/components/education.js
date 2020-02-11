import React from 'react'

const Education = ({education}) => {

    if(education!==undefined){

        const items = [];

        for (const [value] of education.educationInfo.entries()) {
            items.push(<div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Language: {education.educationInfo[value].languageView}</h5>
                        <h5 className="card-title">Date: {education.educationInfo[value].dateView}</h5>
                        <h5 className="card-title">Title: {education.educationInfo[value].titleView}</h5>
                        <h5 className="card-title">SubTitle: {education.educationInfo[value].subTitleView}</h5>
                        <h5 className="card-title">Description: {education.educationInfo[value].descriptionView}</h5></div></div>);
        }
        return (<div><center><h1>Education</h1></center> 
            {items}
        </div>);                   
    }else{
        return (<div>Loading education data...</div>);
    }
};

export default Education