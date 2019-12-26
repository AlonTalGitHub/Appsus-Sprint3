export default class Filter extends React.Component{

    changeInput =(ev)=>{      
        console.log(ev.target.name)  
        const field = ev.target.name
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value ;
        
        this.props.onFilter({[field] : value})
        ///{filterBy:  {title:'' , numOfLegs:4 , title: 'e'}}
    }

    render() {
        return <div>
            <input type="text" placeholder="Search mail" value={this.props.filterBy}
                onChange={this.changeInput} name="subject"></input>
        </div>
    }
}