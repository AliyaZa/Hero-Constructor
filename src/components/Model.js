import React from 'react';
import URLImage from './URLImage';

class Model extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          helmet: {
            offsetX: 13,
            offsetY: 6
          },
          chest: {
            offsetX: 17,
            offsetY: 86
          },
          glove: {
            offsetX: -32,
            offsetY: 153
          },
          boot: {
            offsetX: 0,
            offsetY: 250
          },
          weapon: {
            offsetX: -135,
            offsetY: 202
          }
        }
      }
      
      render() {
        const {user} = this.props;
        return (
          <React.Fragment>
            { user.hero.img && !user.helmet.img &&
              <URLImage src={user.hero.img} x={this.props.x} y={this.props.y}/>
            }
            { user.helmet.img && 
              <URLImage src={user.hero['alt-img']} x={this.props.x} y={this.props.y}/>
            }
            { user.helmet.img &&  
              <URLImage src={user.helmet.img} 
                        x={this.props.x + this.state.helmet.offsetX} 
                        y={this.props.y + this.state.helmet.offsetY}
              />
            }
            { user.chest.img && 
              <URLImage src={user.chest.img} 
                        x={this.props.x + this.state.chest.offsetX}
                        y={this.props.y + this.state.chest.offsetY}
              />
            }
            { user.boot.img && 
              <URLImage src={user.boot.img} 
                        x={this.props.x + this.state.boot.offsetX}
                        y={this.props.y + this.state.boot.offsetY}
              />
            }
            { user.weapon.img && 
              <URLImage src={user.weapon.img} 
                        x={this.props.x + this.state.weapon.offsetX}
                        y={this.props.y + this.state.weapon.offsetY}
              />
            }
            { user.glove.img && 
              <URLImage src={user.glove.img} 
                        x={this.props.x + this.state.glove.offsetX}
                        y={this.props.y + this.state.glove.offsetY}
              />
            }
            { !user.hero.img && 
              <URLImage x={this.props.x} y={this.props.y} src='https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg'/>
            }
          </React.Fragment>
        )
      }
}

export default Model;
