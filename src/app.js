class IndiRact extends React.Component {
	constructor(props) {
		super(props);
		this.clearWatch = this.clearWatch.bind(this);
		this.randomCrimeWatch = this.randomCrimeWatch.bind(this);
		this.randomReadyCrime = this.randomReadyCrime.bind(this);
		this.addWatch = this.addWatch.bind(this);
		this.state = {
			title: 'TIVo Prime Guides',
			subtitle: 'Crime Documentaries',
			disclaimer:
				"All Titles Listed Here Below Are Real And Belong Exclusively To ID Discovery. So please don't judge me. Enjoy.",
			addWatchNow: 'Add WatchNow',
			randomWatch: '',
			options: ['Killer Instincts', 'Murder Comes To Town', 'Killer In-Law', 'Last Dance', 'No Happy Ending'],
		};
	} // const

	clearWatch() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	} // clearWatch

	addWatch(option) {
		if (!option) {
			return 'enter a valid value: string';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'this watchcrime already exists';
		}
		this.setState(prevState => {
			return {
				options: this.state.options.concat([option]),
			};
		});
	} // addWatch

	randomReadyCrime() {
		this.setState(() => {
			this.state.randomWatch = this.randomCrimeWatch();
			return {
				randomCrimeWatch: this.state.randomWatch,
			};
		});

		return this.state.randomWatch;
	} // random

	randomCrimeWatch() {
		const random = Math.floor(Math.random() * this.state.options.length);
		const pick = this.state.options[random];
		//console.log(pick);
		return pick;
	} //random

	render() {
		return (
			<div>
				<Header title={this.state.title} subtitle={this.state.subtitle} disclaimer={this.state.disclaimer} />
				<Action
					watchlistEmpty={this.state.options.length > 0}
					randomReady={this.randomReadyCrime}
					randomPick={this.state.randomCrimeWatch}
				/>

				<Options options={this.state.options} clearWatch={this.clearWatch} />

				<AddOption
					watchlistEmpty={this.state.options.length > 0}
					// addWatchNow={this.state.addWatchNow}
					addWatch={this.addWatch}
				/>
			</div>
		);
	} // render
} // IndiRact class

class Header extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
				<small>{this.props.disclaimer}</small>
			</div>
		);
	} // render
} // Header class

class Action extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<button
					style={{
						margin: '20px 0',
						backgroundColor: 'green',
						color: 'white',
						padding: '7px 10px',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
					onClick={this.props.randomReady}
					disabled={!this.props.watchlistEmpty}
					id="crime-pick"
				>
					{this.props.watchlistEmpty ? 'Random Crime Watch?' : 'No Crimes To Watch'}
				</button>
				<span style={{ display: 'inline-block', paddingLeft: '20px' }}>
					{this.props.randomPick !== undefined
						? 'Excellent choice!' + ' ........ ' + this.props.randomPick
						: ''}
				</span>
			</div>
		);
	} // render
} // Action class

class Options extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				{this.props.options.map((option, index) => {
					return (
						<div key={index}>
							<SingleOption key={index} singleOption={option} />
						</div>
					);
				})}
				<p>No. Shows: {this.props.options.length}</p>
				<button
					style={{
						marginBottom: '20px',
						backgroundColor: 'red',
						padding: '7px',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
					onClick={this.props.clearWatch}
				>
					Remove All
				</button>
			</div>
		);
	}
	render;
} // Options class

class SingleOption extends React.Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<span className="wn">Watch Now</span>: {this.props.singleOption}
			</div>
		);
	} //render
} // SingleOption class

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined,
		};
		this.addWatch = this.addWatch.bind(this);
	}
	addWatch(e) {
		e.preventDefault();
		const option = e.target.elements[0].value;
		const error = this.props.addWatch(option);
		e.target.elements[0].value = '';
		if (error) {
			this.setState(() => {
				console.log(error);
				return {
					error: error,
				};
			});
		} else {
         this.setState(() => {
            return {
               error: undefined
            }
         });
      }
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<form onSubmit={this.addWatch}>
					<input
						style={{ padding: '7px', outline: '1px solid lightgray' }}
						type="text"
						className="addWatch"
						placeholder={this.props.watchlistEmpty ? 'enter watch option' : 'nothing more to watch'}
					/>
					<button
						style={{
							padding: '10px',
							backgroundColor: 'blue',
							color: 'white',
							borderRadius: '4px',
							cursor: 'pointer',
							marginLeft: '10px',
						}}
						id="addWatch"
						type="submit"
					>
						Add WatchNow
					</button>
               {this.state.error && <p>{this.state.error}</p>}
				</form>
			</div>
		);
	} //render
} // AddOption class

ReactDOM.render(<IndiRact />, document.getElementById('app'));
