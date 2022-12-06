import { useState } from 'react';
import Box from '@mui/material/Box';
import AlbumCard from './AlbumCard';
import Grid from '@mui/system/Unstable_Grid';
import SearchBar from './SearchBar';
import albumsData from '../top100.json';

function AlbumList(props) {
	const [searchInput, setSearchInput] = useState('');
	const albums = albumsData.feed.entry.map((album) => ({
		id: album.id.attributes['im:id'],
		name: album['im:name'].label,
		artist: album['im:artist'].label,
		img: album['im:image'][2].label,
		price: album['im:price'],
		releaseDate: new Date(album['im:releaseDate'].attributes.label),
		url: album.link.attributes.href,
	}));
	const searchQuery = searchInput.toLocaleLowerCase();
	const filteredAlbums = albums.filter((albums) => {
		return (
			albums.name.toLowerCase().includes(searchQuery) ||
			albums.artist.toLowerCase().includes(searchQuery)
		);
	});

	if (filteredAlbums.length > 0) {
		return (
			<>
				<SearchBar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
				<Box sx={{ width: '100%' }}>
					<Grid container rowSpacing={8} columnSpacing={8}>
						{filteredAlbums.map((album, index) => (
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
			</>
		);
	}
}

export default AlbumList;
