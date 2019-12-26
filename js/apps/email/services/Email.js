import {getRandomID} from './utils.js'

export default class Email{
    constructor(subject, body, isStarred){
        this.id = getRandomID(),
        this.subject = subject,
        this.body = body,
        this.isRead = false,
        this.isStarred = isStarred,
        this.sentAt = Date.now()
    }
}