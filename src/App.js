import TopBar from './components/TopBar';
import AlbumList from './components/AlbumList';
import albumsData from './top100.json';

function App() {
	const albums = albumsData.feed.entry.map((album) => ({
		id: album.id.label,
		name: album['im:name'].label,
		artist: album['im:artist'].label,
		img: album['im:image'][2].label,
	}));
	return (
		<>
			<TopBar albums={albums} />
			<AlbumList albums={albums} />
		</>
	);
}

export default App;
