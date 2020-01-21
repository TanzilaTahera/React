import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor (props){
    super(props);
    this.onChangefname = this.onChangefname.bind(this);
    this.onChangelname = this.onChangelname.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onsubmit = this.onsubmit.bind(this);

    this.state = {
      f_name:'', 
      l_name:'',
      email: ''
    }
  }
    onChangefname(e){
      this.setState({
        f_name: e.target.value
      });
    }

    onChangelname(e){
      this.setState({
        l_name: e.target.value
      });
    }

        onChangeemail(e){
      this.setState({
        email: e.target.value
      });
    }

    onsubmit(e){
      e.preventDefault(e);
      const obj = {
        f_name : this.state.f_name,
        l_name : this.state.l_name,
        email : this.state.email

      }

      axios.post("/signUp.php",obj).then(res => console.log(res.data));

      //console.log(obj);
    }


  

 
  render() {
    return (
      <div className="App">
      <p>Contact Me</p>
      <div>
      <form onSubmit = {this.onsubmit}>
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." value ={this.state.f_name} onChange={this.onChangefname} />
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." value ={this.state.l_name} onChange={this.onChangelname}/>
  
  
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" value ={this.state.email} onChange={this.onChangeemail}/>
  
  
      <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
    );
  }
}

export default App;
