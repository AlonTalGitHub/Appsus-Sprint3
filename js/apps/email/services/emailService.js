import Email from "./Email.js";

export default {
    query,
    saveEmail,
    getEmailById,
    getStarred
}

let gEmails = [new Email('hi1' , 'I love you 1, you are genius!', true) , new Email('hi2' , 'I love you 2, you are genius!', false), new Email('hi3' , 'I love you 3, you are genius!', false)];

function query(filterBy){
    if (filterBy) return Promise.resolve(gEmails.filter(email=>{
        return email.subject.includes(filterBy.subject) && email.body.includes(filterBy.body)
    }))

    return Promise.resolve([...gEmails]);
}

function getStarred() {
    return Promise.resolve(gEmails.filter(email=>{
        return email.isStarred === true
    })) 
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

