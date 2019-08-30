import React from 'react';
import {connect} from 'react-redux';
import {getEquipment} from '../reducer/shop';
import {bindActionCreators} from 'redux';
import SelectComponent from '../components/SelectedItems'
import * as actions from '../actions/action_shop';
import {EquipmentApiService} from '../services/EquipmentApiService';


export const getDefaultModels= ()=> async dispatch => {
  let data =await EquipmentApiService.getDefaultModels();
  dispatch( );
};

class Constructor extends React.Component{
    constructor (props){
    super(props);
    const {dispatch}= props;
    this.boundActionCreators =bindActionCreators(actions, dispatch)
    this.set_Hero = this.set_Hero.bind(this)
    this.state ={
        equipment:{
            helmets:[],
            chests:[],
            gloves: [],
            boots: [],
            swords: []
            }
        };
    }

    /*componentDidMount(){
        EquipmentApiService.getDefaultModels()
        .then(response => {
            this.setState(response.data, this.set_Hero)
        })
        .catch(result => console.log);
    }*/

    
    set_Hero() {
        const {dispatch} =this.props;
        dispatch(actions.set_Hero(this.state['person']))
    }

    render () {
        const {equipment}= this.state;
        const {user} =this.props;
        let cost =0;
        for (let element in user)
        {
          if(user[element]!=undefined)
            cost += parseInt(user[element]['price']|| 0)
        };
        return (
            <div className='block'>
              <div className='flex-column lime round' id='constructor'>
                <SelectComponent name="helmet" data={equipment['helmets']} onChange={this.boundActionCreators.set_Helmet}/>
                <SelectComponent name="chest" data={equipment['chests']} onChange={this.boundActionCreators.set_Chest}/>
                <SelectComponent name="gloves" data={equipment['gloves']} onChange={this.boundActionCreators.set_Gloves}/>
                <SelectComponent name="boots" data={equipment['boots']} onChange={this.boundActionCreators.set_Boots}/>
                <SelectComponent name="weapon" data={equipment['swords']} onChange={this.boundActionCreators.set_Weapon}/>
                <div className='divider'></div>
                <div className='left'>
                  <p> Equipment cost: {cost} </p>
                </div>
              </div>
            </div>
          );
    }
}




function mapStateToProps(state) {
    return {
      user: getEquipment(state)
    };
  }
  
  export default connect(mapStateToProps)(Constructor);
