const appRoot = document.getElementById('app');
let response = '';
console.log(response);
const button = (
  <button style={{
    cursor: 'pointer',
    padding: '5px 10px',
    backgroundColor: 'orange',
    color: 'white',
    fontSize: '14px'
  }}
    onClick={(response) => toggleUp(response)}>Show details
  </button>
);

const toggle = () => {
  const template2 = (
    <section>
      <div>
        <h2>Visibility Toggle</h2>
        {button}
      </div>

      <div style={{
        marginTop: '10px',
        padding: '5px'
      }}>
        {response}
      </div>

    </section>
  );

  ReactDOM.render(template2, appRoot);
};

toggle();


const toggleUp = () => {
  const a = 'You see me';
  const b = 'Now you dont';

  if (response == '' && response !== b) {
    response = a;
  }
  else if (response == a) {
    response = b;
  }
  else if (response == b) {
    response = a;
  }

  console.log(response);
  toggle(response);

};













