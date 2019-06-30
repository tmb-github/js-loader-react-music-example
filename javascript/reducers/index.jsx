const combineReducers = Redux.combineReducers;

const musicReducer = () => {
	return [
		{ title: 'The Rite of Spring', composer: 'Igor Stravinsky', ensemble: 'The Cleveland Orchestra', conductor: 'Pierre Boulez', duration: '33:00' },
		{ title: 'Symphony No. 4', composer: 'Charles Ives', ensemble: 'The Chicago Symphony', conductor: 'Michael Tilson Thomas', duration: '30:00' },
		{ title: 'Amériques', composer: 'Edgar Varèse', ensemble: 'The Cleveland Orchestra', conductor: 'Christoph von Dohnanyi', duration: '23:00' },
		{ title: 'String Quintet Op. 111', composer: 'Johannes Brahms', ensemble: 'Boston Symphony Chamber Players', conductor: '[none]', duration: '27:00' }
	]
};

const selectedMusicReducer = (selectedMusic = null, action) => {
	if (action.type === 'MUSIC_SELECTED') {
		return action.payload
	} else {
		return selectedMusic;
	}
};

const reducers = combineReducers({
	music: musicReducer,
	selectedMusic: selectedMusicReducer
});

export default reducers;
