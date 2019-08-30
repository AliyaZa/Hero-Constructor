import React from 'react';
import {Select} from 'react-materialize';

const SelectedItems = props => {

    function wrapp(event) {
      props.onChange(props.data[event.target.value]);
    }
  
    return(
      <Select defaultValue="first" onChange={wrapp}>
        <option value='first' disabled>
          Select {props.name}
        </option>
        {props.data.map(
          (element) => (<option 
                          key={element.id} 
                          value={element.id}
                          data-icon={element.img}
                        >
                          {element.name}
                        </option>
                        )
          )
        }
      </Select>
    )
  };

  export default SelectedItems;
