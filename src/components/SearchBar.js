import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar({ searchInput, setSearchInput }) {

	return (
		<>
			<Typography
				variant='h2'
				component='h1'
				sx={{ mt: 8, mb: 3, textAlign: 'center' }}>
				iTunes Top100 Albums
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<TextField
					onChange={(event) => setSearchInput(event.target.value)}
					label='Search by artist or album'
					id='search-bar'
					sx={{ mb: 10, width: '100ch' }}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Box>
		</>
	);
}

export default SearchBar;
