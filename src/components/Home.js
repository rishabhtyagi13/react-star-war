import React from 'react';
import {connect} from 'react-redux';
import {getUserData} from '../store/actions/getUserData';
import Loading from './LoadingPage';

class Home extends React.Component{
    constructor(props){
        super(props);
        if(Object.keys(props.userdata).length){
            this.state = {
                username: props.userdata.results[0].name,
                password:'',
                error: '',
                isLoading: false,
                passed:true
            };
        }else{
            this.state = {
                username:'',
                password:'',
                error: '',
                isLoading: false,
                passed:''
            };
        }
    }
    dismissError=()=> {
        this.setState({ error: '' });
    }
    handleUserChange=(evt)=> {
        this.setState({
          username: evt.target.value,
        });
    };
    handlePassChange=(evt)=> {
        this.setState({
          password: evt.target.value,
        });
    }
    handleClick = (evt) => {
        evt.preventDefault();
        this.setState({
            isLoading : true
        });
        if (!this.state.username || !this.state.password) {
            return this.setState({ error: 'Please fill in both the fields' });
        }else{
            let url = `https://swapi.co/api/people/?search=${this.state.username}`;
            this.props.dispatch(getUserData(url));            
            
        }

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.userdata.count){
          this.setState({
            passed:true,
            isLoading:false, 
            error:''           
          })
        }else if(nextProps.userdata.count === 0){
            this.setState({
                isLoading:false,
                error:'Invalid Login'            
            }) 
        }
      }
    render() {
        {/* Creating Home page login form and displaying the user name if authenticated */}
        return (             
        <div >
            {this.state.isLoading === true && <Loading />}
            {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
                </h3>
            }
            {this.state.passed !== true?
            <div style={{justifyContent:"center",display:"flex"}}>
            <form onSubmit={this.handleClick} style={{display:"table"}}>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}}>User Name:</label>
                    <input style={{display:"table-cell"}} required type="text" value={this.state.username} onChange={this.handleUserChange}/><br/>
                </p>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}}>Password:</label>
                    <input style={{display:"table-cell"}} required type="password" value={this.state.password} onChange={this.handlePassChange} /><br/>
                </p>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}}></label>
                    <input className="button" style={{display:"table-cell"}} type="submit" />
                </p>
            </form>
            </div>
            
            :<div>Welcome <b>{this.state.username}</b></div>
            }
        </div>
        );
    }
}



const mapStateToProps = state => {
    return {
      userdata: state.getUserInfo.userdata,
      error: state.getUserInfo.error
    }
  };
  
export default connect(mapStateToProps)(Home);

