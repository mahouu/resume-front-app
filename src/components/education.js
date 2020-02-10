import React from 'react'

const Education = ({education}) => {

    if(education!==undefined){
    return (
        <div>
            <center><h1>Education</h1></center>
            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name: {education.education}</h5>
                    </div>
                </div>
            
        </div>
    )}else{
        return(<div>Loading education data...</div>)
    }
};

export default Education