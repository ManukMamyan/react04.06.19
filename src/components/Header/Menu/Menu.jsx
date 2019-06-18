import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link} from 'react-router-dom';

const Menu = () => (
    <div>
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out"/>
        </IconMenu>
    </div>
);

export default Menu;
