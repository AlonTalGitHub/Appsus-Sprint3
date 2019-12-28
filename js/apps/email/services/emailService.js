import Email from "./Email.js";

export default {
    query,
    saveEmail,
    getEmailById,
    getEmailsToRender
}

let gEmails = [new Email('hi1' , '1, you are genius!') , 
               new Email('hi2' , '2, you are genius!'), 
               new Email('hi3' , '3, you are genius!'),
               new Email('hi4' , '4, you are genius!'),
               new Email('hi5' , '5, you are genius!'),
               new Email('hi6' , '6, you are genius!'),
               new Email('hi7' , '7, you are genius!'),
               new Email('hi8' , '8, you are genius!'),
               new Email('hi9' , '9, you are genius!'),
               new Email('hi10' , '10, you are genius!'),
               new Email('hi11' , '11, you are genius!'),
               new Email('hi12' , '12, you are genius!')];

function query(filterBy){
    if (filterBy) return Promise.resolve(gEmails.filter(email=>{
        return email.subject.includes(filterBy.subject) && email.body.includes(filterBy.body)
    }))

    return Promise.resolve([...gEmails]);
}

function getEmailsToRender(folder) {
    if (folder === 'inbox') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isReceived === true
        })) 
    }
    if (folder === 'starred') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isStarred === true
        }))
    }
    if (folder === 'sent') {
        return Promise.resolve(gEmails.filter(email=>{
            return email.isSent === true
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

function saveEmail(emailDetails){;
    const email = new Email(emailDetails.subject , emailDetails.body)
    gEmails =  [...gEmails , email];
    return Promise.resolve(email)
}

