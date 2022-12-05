import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function TopBar({ albums }) {
	const searchLabels = albums.map((album) => ({
		label: album.name,
		id: album.id,
	}));
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar
					sx={{
						bgcolor: '#000',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<Box
						component='img'
						sx={{
							display: { xs: 'none', md: 'flex' },
							maxWidth: '200px',
						}}
						alt='RWT Logo'
						src='https://aclymate.com/images/aclymate-full-logo-white-text.png'
					/>
					<Box
						component='img'
						sx={{
							display: { xs: 'flex', md: 'none' },
							maxWidth: '40px',
						}}
						alt='RWT Logo'
						src='https://aclymate.com/images/aclymate-icon.png'
					/>
					<Autocomplete
						id='move-search'
						size='small'
						options={searchLabels}
						sx={{
							width: 300,
							bgcolor: '#888888',
							margin: 1,
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								placeholder='Search Albums'
							/>
						)}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default TopBar;
