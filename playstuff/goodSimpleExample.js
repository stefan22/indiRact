// jsx static, to render putting jsx in fn
// this shows u the basic principle about rendering with react/jsx without 
// components but same idea.

// going to call render with every fn

const addOne = () => {
  count++;
  renderCounter(count);
};

const minusOne = () => {
  count--;
  renderCounter();
}

const resetCount = () => {
  count = 0;
  renderCounter();
}


let count = 0;


const renderCounter = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button
        id="someId"
        onClick={addOne}
        className="someclass">+1</button>
      <button
        id="someId"
        onClick={() => minusOne()}
        className="someclass">-1</button>
      <button
        id="someId"
        onClick={() => resetCount()}
        className="someclass">Reset</button>
    </div>
  );
  //render inside fn
  ReactDOM.render(template2, appRoot);
};


const appRoot = document.getElementById('app');

//default values by running fn
renderCounter();
