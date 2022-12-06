import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Sort({ setSortMethod }) {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				mb: 8,
			}}>
			<Typography>Sort By: </Typography>
			<Button onClick={() => setSortMethod('title')}>Album Title</Button>
			<Button onClick={() => setSortMethod('artist')}>Artist Name</Button>
			<Button onClick={() => setSortMethod('date')}>Release Date</Button>
		</Box>
	);
}

export default Sort;
