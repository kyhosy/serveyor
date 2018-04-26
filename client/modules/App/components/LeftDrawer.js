import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {red500} from 'material-ui/styles/colors';

export function LeftDrawer(props, context) {
    
  return (
            <Drawer 
            docked={true}
            open={true} >
            <div>
              This is a test
              <IconButton><FontIcon color={red500} hoverColor={red500} className="muidocs-icon-action-home" style = {{marginRight:24}}/></IconButton>
              </div>
            </Drawer>
  );
}
export default LeftDrawer;
