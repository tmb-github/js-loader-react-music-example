import MusicList from './MusicList';
import MusicDetail from './MusicDetail';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<MusicList />
				</div>
				<div className="column eight wide">
					<MusicDetail />
				</div>
			</div>
		</div>
	);
};

export default App;