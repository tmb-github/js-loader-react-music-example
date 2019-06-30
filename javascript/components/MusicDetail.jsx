const connect = ReactRedux.connect;

const MusicDetail = ({piece}) => {
	if (!piece) {
		return <React.Fragment><h3>Select a piece</h3></React.Fragment>;
	}
	return (
		<React.Fragment>
			<h3>Details for Piece: </h3>
			<h4>
				Title: {piece.title}
				<br/>
				Composer: {piece.composer}
				<br/>
				Ensemble: {piece.ensemble}
				<br/>
				Conductor: {piece.conductor}
				<br/>
				Duration: {piece.duration}
			</h4>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {piece: state.selectedMusic};
};

export default connect(mapStateToProps)(MusicDetail);