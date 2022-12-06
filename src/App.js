import TopBar from './components/TopBar';
import AlbumList from './components/AlbumList';
import Container from '@mui/material/Container';

function App() {
	return (
		<>
			<TopBar />
			<Container maxWidth='xl'>
				<AlbumList />
			</Container>
		</>
	);
}

export default App;
