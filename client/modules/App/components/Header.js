import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ArrowDow from 'material-ui/svg-icons/navigation/arrow-drop-down'
import Paper from 'material-ui/Paper';
import ActionAndroid from 'material-ui/svg-icons/action/android';

// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import Typography from 'material-ui/styles/typography'

import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
// import white from 'material-ui/styles/colors';
import { Toolbar ,ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import image from 'material-ui/svg-icons/image/image';
import {lightWhite , red500, white} from 'material-ui/styles/colors';


class Header extends React.Component {

    render() {
        const auth = true;
        const {styles} = this.props;

        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                // maxHeight: 57,
                textAlign: 'center',

            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20,
            },
        };

        return (
            <div>
                
                 <AppBar
                    style = {styles}
                    title="Title"
                    // iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={
                        // <FontIcon color={red500} hoverColor={red500} className="muidocs-icon-action-home" style = {{marginRight:24}}/>
                        // <IconButton><FontIcon color={red500} hoverColor={red500} className="muidocs-icon-action-home" style = {{marginRight:24}}/></IconButton>

                        // <IconButton><FontIcon color={red500} className="muidocs-icon-action-home"/></IconButton>
                        // <FlatButton label="Save" />
                        
                        // <RaisedButton label="Secondary" />
                        // <RaisedButton label="Secondary" secondary={true} style = {{padding: 12}} />
                        // <FlatButton label="Nguyen Vu Anh" secondary = {true} style = {{marginTop:8}} />
                        //      <RaisedButton   icon={<ActionAndroid />} buttonStyle = {{marginTop :8}} />
                        <div>
                            <RaisedButton   label="Nguyen Vu Anh" secondary = {true} style = {{margin:8}}  overlayStyle = {{paddingTop :8}} />
                            {/* <IconMenu
                                iconButtonElement={
                                <IconButton><FontIcon color={red500} className="muidocs-icon-action-home"/></IconButton>
                                }
                            /> */}

                            <IconMenu
                                color={white}
                                iconButtonElement={
                                <IconButton><MoreVertIcon color={white}/></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="Thông tin cá nhân" />
                                <MenuItem primaryText="Đăng Xuất" />
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default Header;
