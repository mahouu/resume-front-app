import React from 'react'

const Contacts = ({contacts}) => {
    if(contacts.contactInfoView!==undefined){
    return (
        <div>
            <center><h1>Contact List</h1></center>
            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name: {contacts.contactInfoView.name}</h5>
                        <h5 className="card-title">Email: {contacts.contactInfoView.email}</h5>
                        <h5 className="card-title">Surname: {contacts.contactInfoView.surname}</h5>
                        <h5 className="card-title">Git URL: {contacts.contactInfoView.gitUrl}</h5>
                        <h5 className="card-title">Sonar URL:{contacts.contactInfoView.sonarUrl}</h5>
                        <h5 className="card-title">Phone number: {contacts.contactInfoView.phoneNumber}</h5>
                        <h5 className="card-title">Resume URL: {contacts.contactInfoView.resumeOnlineUrl}</h5>
                    </div>
                </div>
            
        </div>
    )}else{
        return(<div>Loading resume data...</div>)
    }
};

export default Contacts