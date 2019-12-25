import {getRandomID} from './utils.js'

export default class Email{
    constructor(subject, body){
        this.id = getRandomID(),
        this.subject = subject,
        this.body = body,
        this.isRead = false,
        this.sentAt = Date.now()
    }
}