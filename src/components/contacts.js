import React from 'react'

const Contacts = ({contacts}) => {
    if(contacts.contactInfoView!==undefined){
    return (
        <div>
            <center><h1>Contact List</h1></center>
            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name: {contacts.contactInfoView.nameView}</h5>
                        <h5 className="card-title">Email: {contacts.contactInfoView.emailView}</h5>
                        <h5 className="card-title">Surname: {contacts.contactInfoView.surnameView}</h5>
                        <h5 className="card-title">Git URL: {contacts.contactInfoView.gitUrlView}</h5>
                        <h5 className="card-title">Sonar URL:{contacts.contactInfoView.sonarUrlView}</h5>
                        <h5 className="card-title">Phone number: {contacts.contactInfoView.phoneNumberView}</h5>
                        <h5 className="card-title">Resume URL: {contacts.contactInfoView.resumeOnlineUrlView}</h5>
                    </div>
                </div>
            
        </div>
    )}else{
        return(<div>Loading resume data...</div>)
    }
};

export default Contacts