import React from 'react'

const Contacts = ({contacts}) => {
    if(contacts.contactInfoView!==undefined){
    return (
        <div>
            <center><h1>Contact List</h1></center>
            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{contacts.contactInfoView.email}</h5>
                    </div>
                </div>
            
        </div>
    )}else{
        return(<div>Loading resume data...</div>)
    }
};

export default Contacts