import Email from "./Email.js";
import storageService from "./storageService.js"
import { string } from "prop-types";

export default {
    query,
    saveEmail,
    getEmailById,
    getEmailsToRender,
    addEmail,
    deleteEmail,
    setRead
}

let gEmails = [new Email('Have a Wonderful Holiday' , 'As the year comes to a close, IMDbs Founder and CEO, Col Needham, shares his favorite movies of 2019!') , 
               new Email('Payment Sent' , 'What will bring you to the theater next year?'), 
               new Email('Your free trial' , 'Jenna Dewan takes center stage in the Netflix series.'),
               new Email('Welcome Avocode' , 'Most Popular Movies This Week'),
               new Email('Replay HOT net' , 'Most Popular Movies This Week'),
               new Email('Hi John! We think you might like these Pins' , 'The first trailer for Wonder Woman 1984 is so overloaded with Easter eggs that we can hardly sort the yolk from the shell, so lets break down what the very 80s trailer reveals about DC super-villain Maxwell Lord.'),
               new Email('Great Events' , 'Very Interesting Events for you! click below to see.'),
               new Email('Privacy Policy' , 'We’ve updated our Privacy Policy as part of our ongoing commitment to transparency and your privacy — and to explain how were complying with the new California Consumer Privacy Act (CCPA). Heres a brief overview of the updates'),
               new Email('Your free trial' , 'added information about how California residents can exercise their rights under CCPA.'),
               new Email('Great Events' , 'Very Interesting Events for you! click below to see.'),
               new Email('Avocode new version' , 'added information about how California residents can exercise their rights under CCPA.'),
               new Email('Hi my Friend!' , 'you are genius!')];

function query(filterBy){
    if (filterBy) return Promise.resolve(gEmails.filter(email=>{
        return email.subject.toLowerCase().includes(filterBy.subject) && email.body.includes(filterBy.body) && !email.isDeleted
    }))

    return Promise.resolve([...gEmails]);
}

function getEmailsToRender(folder) {
    if (folder === 'inbox') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isReceived === true && !email.isDeleted
        })) 
    }
    if (folder === 'starred') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isStarred === true && !email.isDeleted
        }))
    }
    if (folder === 'sent') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isSent === true && !email.isDeleted
        }))
    }
    if (folder === 'trash') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isDeleted === true
        }))
    }
}

function getEmailById(emailId){
    const email = gEmails.find(email=>email.id === emailId)

    return Promise.resolve({...email})
}

function addEmail(email) {
    const newEmail = new Email(email.subject, email.body)
    gEmails = [...gEmails, newEmail]

    storageService.store('emails', gEmails)

    return Promise.resolve(newEmail)
}

function deleteEmail(email) { 
    const newEmail = {...email, isDeleted: true}
    gEmails = gEmails.map(currEmail => newEmail.id === currEmail.id ? newEmail : currEmail)
    storageService.store('emails', gEmails)
        
    return Promise.resolve(gEmails)  
}

function setRead(email) { 
    const newEmail = {...email, isRead: true}
    gEmails = gEmails.map(currEmail => newEmail.id === currEmail.id ? newEmail : currEmail)
    storageService.store('emails', gEmails)
        
    return Promise.resolve(gEmails)
}

function saveEmail(emailDetails){;
    const email = new Email(emailDetails.subject , emailDetails.body)
    gEmails =  [...gEmails , email];

    return Promise.resolve(email)
}

