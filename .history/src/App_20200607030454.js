import React,{Component} from 'react';
import Styles from './App.module.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component{


  render(){
    return(
      
      <Layout>

        <div>
            <p> Tools,SideDrawer and backdrop </p>
            <BurgerBuilder/>
        </div>
      </Layout>
    
    );
  }



}

export default App;
