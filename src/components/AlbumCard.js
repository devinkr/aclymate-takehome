import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const hoverBox = {
	padding: '10px',
	borderRadius: '10px',
	'&:hover': {
		backgroundColor: 'rgba(200, 200, 200, .5)',
		transition: '.5s',
	},
};

function AlbumCard({ album }) {
	if (album) {
		return (
			<Box component='div' display='flex'>
				<Box
					component='img'
					sx={{ mr: 3, maxWidth: 140 }}
					src={album.img}
					alt={album.name}></Box>
				<Box sx={{ height: '100%' }}>
					<Typography variant='h6' component='h2'>
						{album.name}
					</Typography>
					<Typography variant='body1'>
						{album.artist} - {album.releaseDate.getFullYear()}
					</Typography>
					<Link href={album.url} sx={{ mt: 3 }}>
						View on iTunes
					</Link>
				</Box>
			</Box>
		);
	}
}

export default AlbumCard;
