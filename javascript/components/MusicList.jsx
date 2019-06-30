const Component = React.Component;
const connect = ReactRedux.connect;
import {selectMusic} from '../actions/index';

class MusicList extends Component {
	renderList() {
		return this.props.music.map((music) => {
			return (
				<div className="item" key={music.title}>
					<div className="right floated content">
						<button 
							className="ui button primary"
							onClick={() => this.props.selectMusic(music)}
						>
							Select
						</button>
					</div>
					<div className="content">{music.title}</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div className="ui divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {music: state.music};
}

export default connect(mapStateToProps, {selectMusic})(MusicList);