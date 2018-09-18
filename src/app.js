console.log('app.js running');


const app = {
  title: 'IndiRact app',
  subtitle: 'This is JSX from app.js',
  options: ['One','Two']
};

const getOptions = (options) => {
  if (options.length > 0) {
    return (
      <ol>
        <li>{app.options[0]}</li>
        <li>{app.options[1]}</li>
      </ol>
    );
  }

};


var template = (
  <div>
    <div>
      <h1>{app.title}</h1>
      {(app.subtitle) && <p>{app.subtitle}</p>}
    </div>
    {getOptions(app.options)}
  </div>
);



const user = {
  name: 'Michael',
  age: 33,
  location: 'London'
};

const getLocation = (location) => {
  if(location) {
    return <p>Location: {location}</p>;
  }
};//location

var template2 = (
  <div>
    <h1>{(user.name) ? user.name : 'john doe'}</h1>
    {user.age > 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);



