var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement(Main, null),
          React.createElement(Author, null)));


    } }]);return App;}(React.Component);var


Main = function (_React$Component2) {_inherits(Main, _React$Component2);
  function Main(props) {_classCallCheck(this, Main);var _this2 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this,
    props));
    _this2.state = { playerCount: 0, player1: 0, player2: 0, turn: 0, info: 0, cell: ',,,,,,,,' };

    _this2.playerCount = _this2.playerCount.bind(_this2);
    _this2.back = _this2.back.bind(_this2);
    _this2.choose = _this2.choose.bind(_this2);
    _this2.reset = _this2.reset.bind(_this2);
    _this2.fill = _this2.fill.bind(_this2);
    _this2.splitArray = _this2.splitArray.bind(_this2);return _this2;

  }_createClass(Main, [{ key: 'playerCount', value: function playerCount(

    e) {
      this.setState({ playerCount: e.target.getAttribute('value') });
    } }, { key: 'back', value: function back()

    {
      this.setState({ playerCount: 0 });
    } }, { key: 'choose', value: function choose(

    e) {
      if (e.target.getAttribute('value') == 'x')
      this.setState({ player1: e.target.getAttribute('value'), player2: 'o', turn: 1 });else

      this.setState({ player1: e.target.getAttribute('value'), player2: 'x', turn: 1 });
    } }, { key: 'reset', value: function reset()

    {
      this.setState({ playerCount: 0, player1: 0, player2: 0, turn: 0, info: 0, cell: ',,,,,,,,' });
    } }, { key: 'fill', value: function fill(

    e) {
      if (this.state.player1 != 0) {

        var symbol = '';
        var info = '';

        if (this.state.playerCount == 1) {
          var arr = void 0;
          arr = this.state.cell.split(',');

          info = 'Uh oh, you lost ...';

          if (this.state.turn == 1) {
            if (arr[e.target.getAttribute('value')] === '') {
              this.setState({ turn: 2 });
              symbol = this.state.player1;
              info = 'Yeah, you win ...';

              arr[e.target.getAttribute('value')] = symbol;
              this.setState({ cell: arr.join(',') });

              if (arr[0] == symbol && arr[1] == symbol && arr[2] == symbol ||
              arr[3] == symbol && arr[4] == symbol && arr[5] == symbol ||
              arr[6] == symbol && arr[7] == symbol && arr[8] == symbol ||
              arr[0] == symbol && arr[3] == symbol && arr[6] == symbol ||
              arr[1] == symbol && arr[4] == symbol && arr[7] == symbol ||
              arr[2] == symbol && arr[5] == symbol && arr[8] == symbol ||
              arr[0] == symbol && arr[4] == symbol && arr[8] == symbol ||
              arr[2] == symbol && arr[4] == symbol && arr[6] == symbol) {
                this.setState({ turn: 0, info: info });
              } else {
                if (arr[0] != '' && arr[1] != '' && arr[2] != '' && arr[3] != '' && arr[4] != '' && arr[5] != '' && arr[6] != '' && arr[7] != '' && arr[8] != '') {
                  this.setState({ turn: 0, info: 'It was a draw ...' });
                }
              }

            }

            //}else{
            this.setState({ turn: 1 });
            symbol = this.state.player2;
            info = 'Uh oh, you lost ...';

            if (arr[0] == this.state.player1 && arr[1] == this.state.player1 && arr[2] === '') {
              arr[2] = symbol;
            } else if (arr[0] == this.state.player1 && arr[2] == this.state.player1 && arr[1] === '') {
              arr[1] = symbol;
            } else if (arr[1] == this.state.player1 && arr[2] == this.state.player1 && arr[0] === '') {
              arr[0] = symbol;
            } else if (arr[3] == this.state.player1 && arr[4] == this.state.player1 && arr[5] === '') {
              arr[5] = symbol;
            } else if (arr[3] == this.state.player1 && arr[5] == this.state.player1 && arr[4] === '') {
              arr[4] = symbol;
            } else if (arr[4] == this.state.player1 && arr[5] == this.state.player1 && arr[3] === '') {
              arr[3] = symbol;
            } else if (arr[6] == this.state.player1 && arr[7] == this.state.player1 && arr[8] === '') {
              arr[8] = symbol;
            } else if (arr[6] == this.state.player1 && arr[8] == this.state.player1 && arr[7] === '') {
              arr[7] = symbol;
            } else if (arr[7] == this.state.player1 && arr[8] == this.state.player1 && arr[6] === '') {
              arr[6] = symbol;
            } else if (arr[0] == this.state.player1 && arr[3] == this.state.player1 && arr[6] === '') {
              arr[6] = symbol;
            } else if (arr[0] == this.state.player1 && arr[6] == this.state.player1 && arr[3] === '') {
              arr[3] = symbol;
            } else if (arr[3] == this.state.player1 && arr[6] == this.state.player1 && arr[0] === '') {
              arr[0] = symbol;
            } else if (arr[1] == this.state.player1 && arr[4] == this.state.player1 && arr[7] === '') {
              arr[7] = symbol;
            } else if (arr[1] == this.state.player1 && arr[7] == this.state.player1 && arr[4] === '') {
              arr[4] = symbol;
            } else if (arr[4] == this.state.player1 && arr[7] == this.state.player1 && arr[1] === '') {
              arr[1] = symbol;
            } else if (arr[2] == this.state.player1 && arr[5] == this.state.player1 && arr[8] === '') {
              arr[8] = symbol;
            } else if (arr[2] == this.state.player1 && arr[8] == this.state.player1 && arr[5] === '') {
              arr[5] = symbol;
            } else if (arr[5] == this.state.player1 && arr[8] == this.state.player1 && arr[2] === '') {
              arr[2] = symbol;
            } else if (arr[0] == this.state.player1 && arr[4] == this.state.player1 && arr[8] === '') {
              arr[8] = symbol;
            } else if (arr[0] == this.state.player1 && arr[8] == this.state.player1 && arr[4] === '') {
              arr[4] = symbol;
            } else if (arr[4] == this.state.player1 && arr[8] == this.state.player1 && arr[0] === '') {
              arr[0] = symbol;
            } else if (arr[2] == this.state.player1 && arr[4] == this.state.player1 && arr[6] === '') {
              arr[6] = symbol;
            } else if (arr[2] == this.state.player1 && arr[6] == this.state.player1 && arr[4] === '') {
              arr[4] = symbol;
            } else if (arr[4] == this.state.player1 && arr[6] == this.state.player1 && arr[2] === '') {
              arr[2] = symbol;
            } else {
              if (arr[4] === '') {
                arr[4] = symbol;
              } else if (arr[0] === '') {
                arr[0] = symbol;
              } else if (arr[2] === '') {
                arr[2] = symbol;
              } else if (arr[6] === '') {
                arr[6] = symbol;
              } else if (arr[8] === '') {
                arr[8] = symbol;
              } else if (arr[1] === '') {
                arr[1] = symbol;
              } else if (arr[3] === '') {
                arr[3] = symbol;
              } else if (arr[5] === '') {
                arr[5] = symbol;
              } else if (arr[7] === '') {
                arr[7] = symbol;
              }
            }
          }

          this.setState({ cell: arr.join(',') });

          if (arr[0] == symbol && arr[1] == symbol && arr[2] == symbol ||
          arr[3] == symbol && arr[4] == symbol && arr[5] == symbol ||
          arr[6] == symbol && arr[7] == symbol && arr[8] == symbol ||
          arr[0] == symbol && arr[3] == symbol && arr[6] == symbol ||
          arr[1] == symbol && arr[4] == symbol && arr[7] == symbol ||
          arr[2] == symbol && arr[5] == symbol && arr[8] == symbol ||
          arr[0] == symbol && arr[4] == symbol && arr[8] == symbol ||
          arr[2] == symbol && arr[4] == symbol && arr[6] == symbol) {
            this.setState({ turn: 0, info: info });
          } else {
            if (arr[0] != '' && arr[1] != '' && arr[2] != '' && arr[3] != '' && arr[4] != '' && arr[5] != '' && arr[6] != '' && arr[7] != '' && arr[8] != '') {
              this.setState({ turn: 0, info: 'It was a draw ...' });
            }
          }

        } else {

          var _arr = void 0;
          _arr = this.state.cell.split(',');

          if (_arr[e.target.getAttribute('value')] === '') {

            if (this.state.turn == 1) {
              this.setState({ turn: 2 });
              symbol = this.state.player1;
              info = 'Player 1 wins!! :D';
            } else {
              this.setState({ turn: 1 });
              symbol = this.state.player2;
              info = 'Player 2 wins!! :D';
            }

            _arr[e.target.getAttribute('value')] = symbol;
            this.setState({ cell: _arr.join(',') });

            if (_arr[0] == symbol && _arr[1] == symbol && _arr[2] == symbol ||
            _arr[3] == symbol && _arr[4] == symbol && _arr[5] == symbol ||
            _arr[6] == symbol && _arr[7] == symbol && _arr[8] == symbol ||
            _arr[0] == symbol && _arr[3] == symbol && _arr[6] == symbol ||
            _arr[1] == symbol && _arr[4] == symbol && _arr[7] == symbol ||
            _arr[2] == symbol && _arr[5] == symbol && _arr[8] == symbol ||
            _arr[0] == symbol && _arr[4] == symbol && _arr[8] == symbol ||
            _arr[2] == symbol && _arr[4] == symbol && _arr[6] == symbol) {
              this.setState({ turn: 0, info: info });
            } else {
              if (_arr[0] != '' && _arr[1] != '' && _arr[2] != '' && _arr[3] != '' && _arr[4] != '' && _arr[5] != '' && _arr[6] != '' && _arr[7] != '' && _arr[8] != '') {
                this.setState({ turn: 0, info: 'It was a draw ...' });
              }
            }

            /*
              let win;
               win = 0;
              if(arr[0] == symbol)
                win++;
              if(arr[1] == symbol)
                win++;
              if(arr[2] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[3] == symbol)
                win++;
              if(arr[4] == symbol)
                win++;
              if(arr[5] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[6] == symbol)
                win++;
              if(arr[7] == symbol)
                win++;
              if(arr[8] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[0] == symbol)
                win++;
              if(arr[3] == symbol)
                win++;
              if(arr[6] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[1] == symbol)
                win++;
              if(arr[4] == symbol)
                win++;
              if(arr[7] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[2] == symbol)
                win++;
              if(arr[5] == symbol)
                win++;
              if(arr[8] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[0] == symbol)
                win++;
              if(arr[4] == symbol)
                win++;
              if(arr[8] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
               win = 0;
              if(arr[2] == symbol)
                win++;
              if(arr[4] == symbol)
                win++;
              if(arr[6] == symbol)
                win++;
               if(win == 3){
                this.setState({ turn: 0, info: 'Player ' + win_player + ' wins!! :D' });
              }
              */
















          }
        }
      }
    } }, { key: 'splitArray', value: function splitArray(

    i) {
      return this.state.cell.split(',')[i];
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'main' },
          React.createElement('div', { className: this.state.turn != 0 && this.state.turn == 1 ? "player1-label player-label-up" : "player1-label player-label-down" }, this.state.player1 + ': ', this.state.playerCount == 1 ? "Your turn!" : "Go Player 1!"),
          React.createElement('div', { className: this.state.turn != 0 && this.state.turn == 2 ? "player2-label player-label-up" : "player2-label player-label-down" }, this.state.player2 + ': ', this.state.playerCount == 1 ? "Computer's turn" : "Go Player 2!"),
          this.state.info != 0 &&
          React.createElement('div', { className: 'infos' },
            this.state.info),


          this.state.playerCount == 0 &&
          React.createElement('div', { className: 'infos' }, 'How do you want to play?',

            React.createElement('div', { className: 'answer' },
              React.createElement('span', { value: '1', onClick: this.playerCount }, 'One Player'),
              React.createElement('span', { value: '2', onClick: this.playerCount }, 'Two Player'))),



          this.state.playerCount != 0 && this.state.player1 == 0 &&
          React.createElement('div', { className: 'infos' },
            this.state.playerCount == 2 ? 'Player 1 : ' : '', 'Would you like to be',
            React.createElement('span', { className: 'symbol' }, ' x'), ' or ', React.createElement('span', { className: 'symbol' }, 'o'), '?',
            React.createElement('div', { className: 'answer' },
              React.createElement('span', { value: 'x', onClick: this.choose }, 'x'),
              React.createElement('span', { value: 'o', onClick: this.choose }, 'o'))),



          this.state.playerCount != 0 && this.state.player1 == 0 &&
          React.createElement('div', { className: 'back', onClick: this.back }, React.createElement('i', { className: 'fa fa-arrow-left' }), ' Back'),


          React.createElement('div', { className: 'grid-container' },
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '0', onClick: this.fill }, this.splitArray(0)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '1', onClick: this.fill }, this.splitArray(1)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '2', onClick: this.fill }, this.splitArray(2)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '3', onClick: this.fill }, this.splitArray(3)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '4', onClick: this.fill }, this.splitArray(4)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '5', onClick: this.fill }, this.splitArray(5)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '6', onClick: this.fill }, this.splitArray(6)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '7', onClick: this.fill }, this.splitArray(7)),
            React.createElement('div', { className: this.state.turn == 0 ? 'grid-item grid-item-opacity' : 'grid-item pointer', value: '8', onClick: this.fill }, this.splitArray(8))),

          this.state.player1 != 0 &&
          React.createElement('div', { className: 'reset', onClick: this.reset }, 'Reset All')));



    } }]);return Main;}(React.Component);var


Author = function (_React$Component3) {_inherits(Author, _React$Component3);function Author() {_classCallCheck(this, Author);return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));}_createClass(Author, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'author' }, 'Designed and Coded By',
          React.createElement('br', null),
          React.createElement('a', { target: '_blank', href: 'https://codepen.io/dashzeveg' }, 'Dashzeveg')));


    } }]);return Author;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/*
                                                                                 $(document).ready(function(){
                                                                                   $('#app').click(function() {
                                                                                     $(this).css('color', 'red');
                                                                                   });
                                                                                 });
                                                                                 */