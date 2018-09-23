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
			console.log(option);
			var arr = this.state.options;
			console.log(arr);
			arr.push(option);
			this.setState(function () {
				return {
					options: arr
				};
			});
		} // addWatch

	}, {
		key: 'randomReadyCrime',
		value: function randomReadyCrime() {
			var _this2 = this;

			this.setState(function () {
				_this2.state.randomWatch = _this2.randomCrimeWatch();
				return {
					randomCrimeWatch: _this2.state.randomWatch
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
				React.createElement(Action, {
					watchlistEmpty: this.state.options.length > 0,
					randomReady: this.randomReadyCrime,
					randomPick: this.state.randomCrimeWatch
				}),
				React.createElement(Options, { options: this.state.options, clearWatch: this.clearWatch }),
				React.createElement(AddOption
				// watchlistEmpty={(this.state.options.length > 0)}
				// addWatchNow={this.state.addWatchNow}
				, { addWatch: this.addWatch
				})
			);
		} // render

	}]);

	return IndiRact;
}(React.Component); // IndiRact class

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { textAlign: 'center' } },
				React.createElement(
					'h1',
					null,
					this.props.title
				),
				React.createElement(
					'h2',
					null,
					this.props.subtitle
				),
				React.createElement(
					'small',
					null,
					this.props.disclaimer
				)
			);
		} // render

	}]);

	return Header;
}(React.Component); // Header class

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
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

	return Action;
}(React.Component); // Action class

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

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

var SingleOption = function (_React$Component5) {
	_inherits(SingleOption, _React$Component5);

	function SingleOption() {
		_classCallCheck(this, SingleOption);

		return _possibleConstructorReturn(this, (SingleOption.__proto__ || Object.getPrototypeOf(SingleOption)).apply(this, arguments));
	}

	_createClass(SingleOption, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { textAlign: 'center' } },
				React.createElement(
					'span',
					{ className: 'wn' },
					'Watch Now'
				),
				': ',
				this.props.singleOption
			);
		} //render

	}]);

	return SingleOption;
}(React.Component); // SingleOption class

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this7.addWatch = _this7.addWatch.bind(_this7);
		return _this7;
	}

	_createClass(AddOption, [{
		key: 'addWatch',
		value: function addWatch(e) {
			e.preventDefault();
			var option = e.target.elements[0].value;
			if (option) {
				this.props.addWatch(option);
				e.target.elements[0].value = '';
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
						placeholder: !this.props.watchlistEmpty ? 'enter watch option' : 'nothing more to watch'
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
					)
				)
			);
		} //render

	}]);

	return AddOption;
}(React.Component); // AddOption class

ReactDOM.render(React.createElement(IndiRact, null), document.getElementById('app'));
