'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndiRact = function (_React$Component) {
	_inherits(IndiRact, _React$Component);

	function IndiRact(props) {
		_classCallCheck(this, IndiRact);

		var _this = _possibleConstructorReturn(this, (IndiRact.__proto__ || Object.getPrototypeOf(IndiRact)).call(this, props));

		_this.clearWatch = _this.clearWatch.bind(_this);
		_this.randomCrimeWatch = _this.randomCrimeWatch.bind(_this);
		_this.randomReadyCrime = _this.randomReadyCrime.bind(_this);
		_this.addWatch = _this.addWatch.bind(_this);
		_this.state = {
			title: 'TIVo Prime Guides',
			subtitle: 'Crime Documentaries',
			disclaimer: "All Titles Listed Here Below Are Real And Belong Exclusively To ID Discovery. So please don't judge me. Enjoy.",
			addWatchNow: 'Add WatchNow',
			randomWatch: '',
			options: ['Killer Instincts', 'Murder Comes To Town', 'Killer In-Law', 'Last Dance', 'No Happy Ending']
		};
		return _this;
	} // const

	_createClass(IndiRact, [{
		key: 'clearWatch',
		value: function clearWatch() {
			this.setState(function () {
				return {
					options: []
				};
			});
		} // clearWatch

	}, {
		key: 'addWatch',
		value: function addWatch(option) {
			var _this2 = this;

			if (!option) {
				return 'enter a valid value: string';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'this watchcrime already exists';
			}
			this.setState(function (prevState) {
				return {
					options: _this2.state.options.concat([option])
				};
			});
		} // addWatch

	}, {
		key: 'randomReadyCrime',
		value: function randomReadyCrime() {
			var _this3 = this;

			this.setState(function () {
				_this3.state.randomWatch = _this3.randomCrimeWatch();
				return {
					randomCrimeWatch: _this3.state.randomWatch
				};
			});

			return this.state.randomWatch;
		} // random

	}, {
		key: 'randomCrimeWatch',
		value: function randomCrimeWatch() {
			var random = Math.floor(Math.random() * this.state.options.length);
			var pick = this.state.options[random];
			//console.log(pick);
			return pick;
		} //random

	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle, disclaimer: this.state.disclaimer }),
				React.createElement(RandomAction, {
					watchlistEmpty: this.state.options.length > 0,
					randomReady: this.randomReadyCrime,
					randomPick: this.state.randomCrimeWatch
				}),
				React.createElement(Options, { options: this.state.options, clearWatch: this.clearWatch }),
				React.createElement(AddOption, {
					watchlistEmpty: this.state.options.length > 0
					// addWatchNow={this.state.addWatchNow}
					, addWatch: this.addWatch
				})
			);
		} // render

	}]);

	return IndiRact;
}(React.Component); // IndiRact class

var Header = function Header(props) {
	return React.createElement(
		'div',
		{ style: { textAlign: 'center' } },
		React.createElement(
			'h1',
			null,
			props.title
		),
		React.createElement(
			'h2',
			null,
			props.subtitle
		),
		React.createElement(
			'small',
			null,
			props.disclaimer
		)
	);
}; // Header fn

var RandomAction = function (_React$Component2) {
	_inherits(RandomAction, _React$Component2);

	function RandomAction() {
		_classCallCheck(this, RandomAction);

		return _possibleConstructorReturn(this, (RandomAction.__proto__ || Object.getPrototypeOf(RandomAction)).apply(this, arguments));
	}

	_createClass(RandomAction, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { textAlign: 'center' } },
				React.createElement(
					'button',
					{
						style: {
							margin: '20px 0',
							backgroundColor: 'green',
							color: 'white',
							padding: '7px 10px',
							borderRadius: '4px',
							cursor: 'pointer'
						},
						onClick: this.props.randomReady,
						disabled: !this.props.watchlistEmpty,
						id: 'crime-pick'
					},
					this.props.watchlistEmpty ? 'Random Crime Watch?' : 'No Crimes To Watch'
				),
				React.createElement(
					'span',
					{ style: { display: 'inline-block', paddingLeft: '20px' } },
					this.props.randomPick !== undefined ? 'Excellent choice!' + ' ........ ' + this.props.randomPick : ''
				)
			);
		} // render

	}]);

	return RandomAction;
}(React.Component); // RandomAction class

var Options = function (_React$Component3) {
	_inherits(Options, _React$Component3);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { textAlign: 'center' } },
				this.props.options.map(function (option, index) {
					return React.createElement(
						'div',
						{ key: index },
						React.createElement(SingleOption, { key: index, singleOption: option })
					);
				}),
				React.createElement(
					'p',
					null,
					'No. Shows: ',
					this.props.options.length
				),
				React.createElement(
					'button',
					{
						style: {
							marginBottom: '20px',
							backgroundColor: 'red',
							padding: '7px',
							borderRadius: '4px',
							cursor: 'pointer'
						},
						onClick: this.props.clearWatch
					},
					'Remove All'
				)
			);
		}
	}]);

	return Options;
}(React.Component); // Options class

var SingleOption = function SingleOption(props) {
	return React.createElement(
		'div',
		{ style: { textAlign: 'center' } },
		React.createElement(
			'span',
			{ className: 'wn' },
			'Watch Now'
		),
		': ',
		props.singleOption
	);
}; // SingleOption fn

var AddOption = function (_React$Component4) {
	_inherits(AddOption, _React$Component4);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this6.state = {
			error: undefined
		};
		_this6.addWatch = _this6.addWatch.bind(_this6);
		return _this6;
	}

	_createClass(AddOption, [{
		key: 'addWatch',
		value: function addWatch(e) {
			e.preventDefault();
			var option = e.target.elements[0].value;
			var error = this.props.addWatch(option);
			e.target.elements[0].value = '';
			if (error) {
				this.setState(function () {
					console.log(error);
					return {
						error: error
					};
				});
			} else {
				this.setState(function () {
					return {
						error: undefined
					};
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { textAlign: 'center' } },
				React.createElement(
					'form',
					{ onSubmit: this.addWatch },
					React.createElement('input', {
						style: { padding: '7px', outline: '1px solid lightgray' },
						type: 'text',
						className: 'addWatch',
						placeholder: this.props.watchlistEmpty ? 'enter watch option' : 'nothing more to watch'
					}),
					React.createElement(
						'button',
						{
							style: {
								padding: '10px',
								backgroundColor: 'blue',
								color: 'white',
								borderRadius: '4px',
								cursor: 'pointer',
								marginLeft: '10px'
							},
							id: 'addWatch',
							type: 'submit'
						},
						'Add WatchNow'
					),
					this.state.error && React.createElement(
						'p',
						null,
						this.state.error
					)
				)
			);
		} //render

	}]);

	return AddOption;
}(React.Component); // AddOption class


ReactDOM.render(React.createElement(IndiRact, null), document.getElementById('app'));
