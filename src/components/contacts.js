import React from 'react'

const Contacts = ({contacts}) => {
    if(contacts.contactInfoView!==undefined){
    return (
        <header id="header" class="clear">
        <div>
                <h1 class="name">{contacts.contactInfoView.nameView} {contacts.contactInfoView.surnameView}</h1>
                <h2 class="label">Software developer</h2>
            </div>
            
            <span class="location">
                <span class="address">{contacts.contactInfoView.locationView.addressView},</span> 
                <span class="postalCode">{contacts.contactInfoView.locationView.postalCodeView},</span> 
                <span class="city">{contacts.contactInfoView.locationView.cityView},</span> 
                <span class="region">{contacts.contactInfoView.locationView.regionView},</span> 
                <span class="countryCode">{contacts.contactInfoView.locationView.countryCodeView}</span> 
            </span>
<div id="contact">
                <div class="website">
                    <span class="fa fa-external-link"></span>
                    <a target="_blank" href="{contacts.contactInfoView.resumeOnlineUrlView}">{contacts.contactInfoView.resumeOnlineUrlView}</a>
                </div>
                <div class="email">
                    <span class="fa fa-envelope-o"></span>
                    <a href="mailto:mauricio.miralles@gmail.com">mauricio.miralles@gmail.com</a>
                </div>
                <div class="phone">
                    <span class="fa fa-mobile"></span>
                    <a href="tel:{contacts.contactInfoView.phoneNumberView}">{contacts.contactInfoView.phoneNumberView}</a>
                </div>
            </div>
    
            <div id="profiles">
                <div class="item">
                    <div class="username">
                        <span class="fa fa-twitter twitter social"></span>
                        <span>mahouu</span>
                    </div>
                </div>
                <div class="item">
                    <div class="username">
                        <span class="fa fa-github github social"></span>
                        <span class="url">
                            <a target="_blank" href="{contacts.contactInfoView.gitUrlView}">mahouu</a>
                        </span> 
                    </div>
                </div>
                <div class="item">
                    <div class="username">
                        <span class="fa fa-instagram instagram social"></span>
                        <span class="url">
                            <a target="_blank" href="https://www.instagram.com/mahouu/">mahouu</a>
                        </span> 
                    </div>
                </div>
            </div>
            
        </header>
        
    )}else{
        return(<div>Loading resume data...</div>)
    }
};

export default Contacts