import TopBar from './components/TopBar';
import AlbumList from './components/AlbumList';
import albumsData from './top100.json';

function App() {
	const albums = albumsData.feed.entry.map((album) => ({
		id: album.id.attributes['im:id'],
		name: album['im:name'].label,
		artist: album['im:artist'].label,
		img: album['im:image'][2].label,
		price: album['im:price'],
		releaseDate: new Date(album['im:releaseDate'].attributes.label),
		url: album.link.attributes.href,
	}));
	return (
		<>
			<TopBar albums={albums} />
			<AlbumList albums={albums} />
		</>
	);
}

export default App;
