'use strict';

console.log('app.js running');

var app = {
  title: 'IndiRact app',
  subtitle: 'This is JSX from app.js',
  options: ['One', 'Two']
};

var getOptions = function getOptions(options) {
  if (options.length > 0) {
    return React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        app.options[0]
      ),
      React.createElement(
        'li',
        null,
        app.options[1]
      )
    );
  }
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    )
  ),
  getOptions(app.options)
);

var user = {
  name: 'Michael',
  age: 33,
  location: 'London'
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}; //location

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'john doe'
  ),
  user.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
