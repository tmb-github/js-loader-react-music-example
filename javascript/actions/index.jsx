// Action:
export const selectMusic = (music) => {
	return {
		type: 'MUSIC_SELECTED',
		payload: music
	};
};

// Doesn't work:
//export default selectMusic;