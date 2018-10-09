import React from "react";
import {connect} from 'react-redux';
import {getPlanetData} from '../store/actions/getPlanetData';
import Loading from './LoadingPage';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isLoading: false,
      error: null,
      items: [],
      selectedData:[]
    };
    
  }
  handleInputChange=()=>
   {
    if(this.search.value === ''){
      this.reset()
    }else{ 
      this.setState({
        value: this.search.value
      }, () => {
          this.fetchData(this.search.value);
      })
    }    
  }
 

  handleClick = (item) => {
    console.log(item)
    this.setState({selectedData:item})    
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.planetdata.count){
      this.setState({
        items: nextProps.planetdata.results,
        isLoading:false, 
        error:''           
      })
    }
  }

  fetchData(id)
  {
    console.log(id)
    let url = `https://swapi.co/api/planets/?search=${id}`;
    this.props.dispatch(getPlanetData(url));
  }

  reset = () =>{
    this.setState({selectedData:[],items:[]})
  }

  render() {
    console.log(this.state.selectedData)
    const { error,isLoading, items } = this.state;
    console.log(items)
    {/*Displaying error if any has occurred */}
    if (error) 
    {
      return <div>Error: {this.state.error}</div>;
    }else if(Object.keys(this.state.selectedData).length){
      {/*Displaying More info about the component when clicked */}
      return (
        <div style={{borderStyle:"groove",marginLeft:450,width:350,borderColor:"mediumpurple"}}>
          <b>Name:</b>{this.state.selectedData.name} <br/>
          <b>Climate:</b>{this.state.selectedData.climate} <br/>
          <b>Rotation Period:</b> {this.state.selectedData.rotation_period} <br/>
          <b>Orbital Period:</b> {this.state.selectedData.orbital_period} <br/>
          <b>Diameter:</b> {this.state.selectedData.diameter} <br/>
          <b>Climate:</b> {this.state.selectedData.climate} <br/>
          <b>Gravity: </b>{this.state.selectedData.gravity} <br/>
          <b>Terrain:</b>{this.state.selectedData.terrain} <br/>
          <b>Surface Water:</b>{this.state.selectedData.surface_water} <br/>
          <b>Population:</b>{this.state.selectedData.population} <br/>
          <button type="button" className="button" onClick={this.reset}>Go Back</button>
        </div>      
      )      
    }else{ {/*Displaying all the planets info based on search parameters */}      
      return (
        <div id="outer">
          <form>
              <input
              placeholder="Search Planets..."
              ref={input => this.search = input}
              style={{width:450,marginLeft:400}}
              onChange={this.handleInputChange}
              /><br/>
              <span style={{marginLeft:400,color:"red",fontSize:15}}>*Planets font-size is decreasing fashion as per the population size</span>                       
          </form>

          <div>
            <ul style={{marginLeft:400}}>
              {items.sort((a, b) => b.population - a.population)
              .map((item,idx) => (
              <li key={item.name} onClick={this.handleClick.bind(this, item)}>
                <h4 style={{fontSize:30-idx}}>
                  {item.name} <br/>
                </h4>                  
              </li>            
              ))}
            </ul>
          </div>
          {/*Displaying Loading GIF while data is coming from store */}
          {isLoading === true && <Loading />}
        </div>
      );
    }    
  }
}

const mapStateToProps = state => {
  return {
    planetdata: state.getPlanetInfo.planetdata,
    error: state.getUserInfo.error
  }
};

export default connect(mapStateToProps)(Search);