import {getRandomID} from './utils.js'

export default class Email{
    constructor(subject, body){
        this.id = getRandomID(),
        this.subject = subject,
        this.body = body,
        this.from = 'Me: ',
        this.to = 'Me: ',
        this.isRead = false,
        this.isReceived = true,
        this.isStarred = false,
        this.isDeleted = false,
        this.isSent = true,
        this.sentAt = Date.now()
    }
}