import React,{Component} from 'react';
import Styles from './App.module.css';
import Layout from './components/Layout/Layout'
class App extends Component{


  render(){
    return(
      <Layout>
        <div className={Styles.AppHeader}>
            <p> We are Working with React </p>
            <p> Here We go!!..</p>
        </div>
      </Layout>
    );
  }



}

export default App;
