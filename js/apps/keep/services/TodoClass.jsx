export default class Todo {
    constructor(status, description) { //status[undone,done]
        this.description = description
        switch (status) {
            case 'undone':
                this.status = 'undone'
                this.doneAt = null
                break;
            case 'done':
                this.status = 'done'
                this.doneAt = (new Date).getTime()
                break;

            default:
                this.status = 'undone'
                this.doneAt = null
                break;
        }
    }
}