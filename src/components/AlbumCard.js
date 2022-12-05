import React from 'react';
import Box from '@mui/material/Box';

function AlbumCard({ album }) {
	if (album) {
		return (
			<Box
				component='img'
				sx={{ backgroundColor: 'lightgreen' }}
				src={album.img}
				alt={album.name}></Box>
		);
	}
}

export default AlbumCard;
