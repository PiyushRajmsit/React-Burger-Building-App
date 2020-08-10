import React,{Component} from 'react';
import Modal from '../components/UI/Modal/Modal'
import Aux from './Aux';

const withErrorHandler = (WrappedComponent,axios) =>{
    return class extends Component{
        state = {
            error : null
        }
        componentWillMount(){
            axios.interceptors.response.use(req =>{
                console.log("Request Sent and Reset Done");
                this.setState({error:null});
                return req;
            });

            axios.interceptors.response.use(req => req,error=>{
                console.log("Error ->",error);
                return error;
            });

        }
        errorConfirmedHandler = () => {
            this.setState({error:null});
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} closed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }


    }

}

export default withErrorHandler;