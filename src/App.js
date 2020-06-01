
import './App.css';
import React, { Component } from "react"
import axios from "axios"



class App extends Component{


  state={
    persons:[],
    name:'',

}



delete(e,id) {
  //e.preventDefault();
 // console.log(e.id)
  axios.delete(`http://localhost:3000/posts${e.id}`)
    .then((res) => console.log(res.data));
  
}




 handleDelete=event=>{

   this.setState({id:event.target.value});
  
 };




handleChange=event=>{

  this.setState({name:event.target.value});
  
};

  handelSubmit=event=>{
    event.preventDefault()
    const title =this.state.name;
    
console.log(title)
 axios.post(`	http://localhost:3000/posts` , {title}) 
   
  .then ((res) => {     
      console.log(res);
      console.log(res.data)
   })  
   
   window.location.reload(false);
}





 updateData(){

    
   axios.put(`	http://localhost:3000/posts`)
  .then((res)=>{
   console.log(res.data);
 })

 }












componentDidMount(){
  axios.get(`http://localhost:3000/posts`)

  .then((res) => {
    
    this.setState({persons:res.data})
    
  })
  

}  




















render(){
 
return(
<div className='App'>
 
<form onSubmit={this.handelSubmit} >

    <label>

        <div className='title'>list-todo:</div>
        <input className='input' type='text' name='name' onChange={this.handleChange}/>
    </label>
   
    <button className='button'  type='submit'>Add</button>

     
    
</form>







{this.state.persons.map(person => 
  <li key={person.id}>{person.title} <button className='btn'  onClick={(e)=>this.delete(e.person)} type="submit">Delete</button> </li>
 ) }
  




</div>

)}






}
 
export default App;
