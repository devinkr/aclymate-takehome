import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AlbumCard from './AlbumCard';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';

function AlbumList({ albums }) {
	if (albums.length > 0) {
		return (
			<Container maxWidth='xl'>
				<Typography
					variant='h2'
					component='h1'
					sx={{ m: 8, textAlign: 'center' }}>
					iTunes Top100 Albums
				</Typography>
				<Box sx={{ width: '100%' }}>
					<Grid container rowSpacing={8} columnSpacing={8}>
						{albums.map((album, index) => (
							<Grid
								xs={12}
								md={6}
								lg={4}
								key={`AlbumGrid-${index}`}>
								<AlbumCard album={album} key={album.id} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		);
	}
}

export default AlbumList;
