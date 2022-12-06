import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import AlbumCard from './AlbumCard';
import Grid from '@mui/system/Unstable_Grid';
import SearchBar from './SearchBar';
import Sort from './Sort';

function AlbumList(props) {
	const [searchInput, setSearchInput] = useState('');
	const [albums, setAlbums] = useState([]);
	const [sortMethod, setSortMethod] = useState('');

	// Fetch top 100 albums from iTunes rss feed.
	useEffect(() => {
		fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
			.then((response) => response.json())
			.then((data) => {
				const albumData = data.feed.entry.map((album) => ({
					id: album.id.attributes['im:id'],
					name: album['im:name'].label,
					artist: album['im:artist'].label,
					img: album['im:image'][2].label,
					price: album['im:price'],
					releaseDate: new Date(
						album['im:releaseDate'].attributes.label
					),
					url: album.link.attributes.href,
				}));
				setAlbums(albumData);
			});
	}, []);

	// Filter and Sort the Albums
	function albumSort(a, b) {
		switch (sortMethod) {
			case 'title': {
				return a.name > b.name ? 1 : -1;
			}
			case 'artist': {
				return a.artist > b.artist ? 1 : -1;
			}
			case 'date': {
				return Number(a.releaseDate) < Number(b.releaseDate) ? 1 : -1;
			}
			default: {
				return 1;
			}
		}
	}

	function filterAndSortAlbums(albums) {
		const searchQuery = searchInput.toLocaleLowerCase();
		const filteredAlbums = albums.filter((albums) => {
			return (
				albums.name.toLowerCase().includes(searchQuery) ||
				albums.artist.toLowerCase().includes(searchQuery)
			);
		});
		const filteredAndSortedAlbums =
			sortMethod !== '' ? filteredAlbums.sort(albumSort) : filteredAlbums;
		return filteredAndSortedAlbums;
	}

	if (albums.length > 0) {
		const filteredAndSortedAlbums = filterAndSortAlbums(albums);

		return (
			<>
				<SearchBar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
				<Sort setSortMethod={setSortMethod} />
				<Box sx={{ width: '100%' }}>
					<Grid container rowSpacing={8} columnSpacing={8}>
						{filteredAndSortedAlbums.map((album, index) => (
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
