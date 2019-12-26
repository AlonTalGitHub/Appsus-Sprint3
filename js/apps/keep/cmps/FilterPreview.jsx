export default function FilterPreview(props) {
    //filterBy={this.state.filterBy} handleChange={this.handleChange}
    //state = { filterValue: 'none' }
    var gCurrField='title'//document.querySelector('select#sortKeepsBy').value;
    const handleFilterField=(ev)=> {
        gCurrField=ev.target.value;
    }
    const inputChange=(ev)=> {
        const value = ev.target.value;
        const field=document.querySelector('select#sortKeepsBy').value;
        gCurrField=field;
        var filterByObj={};
        var keys=['title','text','color']
        for(var i=0;i<keys.length;i++){
            var key=keys[i];
            if(key===gCurrField){
                filterByObj={...filterByObj,[key]:value}
            }
            else{
                filterByObj={...filterByObj,[key]:''}
 
            }
        }
        props.handleChange(filterByObj)
    }
    return (<div className="sort-keeps-div">
        <select onChange={handleFilterField} id="sortKeepsBy">
            <option value="title">title</option>
            <option value="text">text</option>
            <option value="color">color</option>
        </select>
        <input type="text" onChange={inputChange}></input>
    </div>)// style={{ color: props.car.color }}
}
// export default function Filter(props){

//     function inputChange(ev){
//         const field = ev.target.name;
//         const value = ev.target.value;
//         props.handleChange({[field]:value})
//     }

//     return <div>
//         <input type="text" value={props.filterBy.name} name="name" onChange={inputChange}></input>
//         <input type="text" value={props.filterBy.color} name="color" onChange={inputChange}></input>
//     </div>
// }