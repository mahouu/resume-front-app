import React from 'react'

const Education = ({education}) => {

    if(education!==undefined){

        const items = [];

        for (const [value] of education.educationInfo.entries()) {
            items.push(<div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Language: {education.educationInfo[value].language}</h5>
                        <h5 className="card-title">Date: {education.educationInfo[value].date}</h5>
                        <h5 className="card-title">Title: {education.educationInfo[value].title}</h5>
                        <h5 className="card-title">SubTitle: {education.educationInfo[value].subTitle}</h5>
                        <h5 className="card-title">Description: {education.educationInfo[value].description}</h5></div></div>);
        }
        return (<div><center><h1>Education</h1></center> 
            {items}
        </div>);                   
    }else{
        return (<div>Loading education data...</div>);
    }
};

export default Education