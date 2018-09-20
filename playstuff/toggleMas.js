let toggle = false;

const render = () => {
  const jsx = (
    <div>
      <h2>Visibility toggle</h2>
      <button onClick={toggleUp}>
        {toggle ? 'show contents' : 'hide contents'}
      </button>
      {
        toggle && (
          <div>
            <p>show this message</p>
          </div>
        )
      }
    </div>

  );

  ReactDOM.render(jsx, document.getElementById('app'));

};// render


const toggleUp = () => {
  console.log('clicked');
  toggle = !toggle;
  render();

};// toggleUp


render();

