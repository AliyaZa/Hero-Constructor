import React from 'react';
import {connect} from 'react-redux';
import {getEquipment} from '../reducer/shop';
import {Stage, Layer} from 'react-konva';
import Model from '../components/Model';
import Stats from '../components/Stats';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          width: 400,
          height: 300
        }
    }

    componentDidMount () {
        this.setState ({
            width: document.getElementById('constructor').offsetWidth,
            height: document.getElementById('constructor').offsetHeight      
        })
    }

    render() {
        const { user } = this.props;
        return(
          <div className='block'>
            <div className='lime round'>
              {
                user.hero.img &&
                <Stage width={this.state.width} height={this.state.height * 0.85} >
                  <Layer>
                    <Model user={user} x={this.state.width * 0.35} y={10} />
                  </Layer>
                </Stage>
              }
              {
                user.hero.img &&
                <div style={{backgroundImage: user.hero.img, width: '100%', height: '100%'}}>
                  <Stats user={user}/>
                </div>
              }
            </div>
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      user: getEquipment(state)
    }
}

export default connect(mapStateToProps)(Hero);
