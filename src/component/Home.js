import React, { Component } from "react"
import axios from "axios"


class Home extends Component{

constructor(props){
    super(props)

this.state={
    homeState:[]
}}


componentDidMount() {

    // const config = {
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //         }
    //     };

      axios.get("https://jsonplaceholder.typicode.com/posts")
.then((data)=> {
        //console.log(data);
        this.setState({
            homeState:data
        },   ()=>{
            console.log(this.state.homeState)
        })
}).catch((error)=>{
    console.log(error);
})


}
     


  postData(){
   const data =({
    "userId":233,
    "id" :233,
    "title": 'okay dexter',
    "body":	"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

})


axios.post('https://jsonplaceholder.typicode.com/posts',data) 
   
  .then ((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

}

updateData(){

    const data={

        "userId":"2234",
        "id" :"2223",
        "title": 'okay dexter ',
        "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
     
    }
    
    axios.put('https://jsonplaceholder.typicode.com/posts/1',data)
   .then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
}



  delData(){
const data ={

    "userId":"2234",
    "id" :"2223",
    "title": 'aokay dexter New',
    "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",

}
axios.delete('https://jsonplaceholder.typicode.com/posts/1',data)
.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
})

  }



render(){
return(
<div>
<h1 className='title'>Home page</h1>
<p className='sous-title'>Welcome to Axios </p>
<button className="button" onClick={this.postData}>Submit</button>
<button className="button"  onClick={this.updateData}>Update</button>
<button className="button"  onClick={this.delData}>Delete</button>
</div>



)}






}
 
export default Home;