import React,{Component} from 'react';
import Styles from './App.module.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component{


  render(){
    return(
      
      <Layout>

        <div>
            <Layout>
              <BurgerBuilder/>
            </Layout>
        </div>
      </Layout>
    
    );
  }



}

export default App;
