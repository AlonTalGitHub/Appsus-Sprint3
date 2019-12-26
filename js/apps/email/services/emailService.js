import Email from "./Email.js";

export default {
    query,
    saveEmail,
    getEmailById
}

let gEmails = [new Email('hi1' , 'I love you 1, you are genius!') , new Email('hi2' , 'I love you 2, you are genius!'), new Email('hi3' , 'I love you 3, you are genius!')];

function query(filterBy){
    if (filterBy) return Promise.resolve(gEmails.filter(email=>{
        return email.subject.includes(filterBy.subject) && email.body.includes(filterBy.body)
    }))

    return Promise.resolve([...gEmails]);
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

