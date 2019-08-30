import React from 'react';
import {Row, Col} from 'react-materialize';

class Stats extends React.Component{
    render() {
        const {user} = this.props
        let attack = 0,
            armor = 0,
            health = 0,
            name = user.hero ? user.hero.name : 'None';
    
        for(let element in user) {
          attack += parseInt(user[element]['attack'] || 0)
          armor += parseInt(user[element]['armor'] || 0)
          health += parseInt(user[element]['health'] || 0)
        }
        return (
          <div>
            <div className='container'>
              <Row>
                <Col s={4} style={{marginTop: '18px'}}>
                  <span> Name: <b>{name}</b></span>
                </Col>
                <Col s={8}>
                  <ul className="collection">
                    <li className="collection-item avatar" style={{height: '40px'}}>
                      <img className="circle" src="images/weapon.png" alt=""/>
                      <span className="title">Attack: <b>{attack}</b></span>
                    </li>
                    <li className="collection-item avatar">
                      <img className="circle" src="images/armor.png" alt=""/>
                      <span className="title">Armor: <b>{armor}</b></span>
                    </li>
                    <li className="collection-item avatar">
                      <img className="circle" src="images/heart.jpeg" alt=""/>
                      <span className="title">Health: <b>{health}</b></span>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        )
      }
}

export default Stats;
