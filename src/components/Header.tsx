import * as React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="display1" color="inherit">
                        <Link style={{color: "white"}} to="/">Weather Card</Link>
                     </Typography>
                </Toolbar>
            </AppBar>
    );
};
