
import './App.css';
import News from './Components/News';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import { 
BrowserRouter  as Router,
Route,
Routes
} from 'react-router-dom';


export default class App extends Component {
  
  state={
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      
      <div>
        <Router>
         <Navbar/>
         <LoadingBar
         height={3}
        color='#f11946'
        progress={this.state.progress}
      />
         
         <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="general"/>}/>
          <Route exact path='/business' element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="business"/>}/>
          <Route exact path='/entertainment'element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="entertainment"/>}/>
          <Route exact path='/general'element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="general"/>}/>
          <Route exact path='/health'element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="health"/>}/>
          <Route exact path='/science' element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="science"/>}/>
          <Route exact path='/sport' element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="sport"/>}/>
          <Route exact path='/technology' element={<News setProgress={this.setProgress}  pageSize={5} country="in" category="technology"/>}/>
         </Routes>
         
         </Router>
      </div>
      
    )
  }
}
