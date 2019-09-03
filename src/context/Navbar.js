import React from 'react';

import FlagIcon from './styles/FlagIcon';
import { AppBar, Switch, InputBase } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles/NavbarStyles';
import IOSSwitch from './styles/IOS';

import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
	english: {
		search: 'Search',
		flag: 'gb'
	},
	french: {
		search: 'Chercher',
		flag: 'fr'
	},
	spanish: {
		search: 'Buscar',
		flag: 'es'
	},
	zambian: {
		search: 'Sakani',
		flag: 'zm'
	}
};

function Navbar() {
	const classes = useStyles();
	const { isDarkMode, toggle } = React.useContext(ThemeContext);
	const { language } = React.useContext(LanguageContext);
	const { search, flag } = content[language];
	return (
		<div className={classes.root}>
			<AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit">
						<span>
							{' '}
							<FlagIcon code={flag} size={'lg'} />
						</span>
					</IconButton>
					<Typography className={classes.title} variant="h6" color="inherit">
						{`${language} App Title`}
					</Typography>
					<IOSSwitch onChange={toggle} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={`${search}......`}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
