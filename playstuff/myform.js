
let item = '';
let list = [];

const submitNewItem = (e) => {
  e.preventDefault();
  item = e.target.elements[0].value;
  list.push(item);
  addItem(item);
  item = e.target.elements[0].value = '';

};

const appRoot = document.getElementById('app');

const addItem = () => {

  const template1 = (
    list.map((item, index) => {
      return (
        <div key={index}>
          {index + 1}: {item.charAt(0).toUpperCase() + item.slice(1)}
        </div>
      );
    })
  );

  const template2 = (
    <section>
      <div>
        <h1>Do list:</h1>
        {template1}
      </div>
      <form
        onSubmit={submitNewItem}>
        <input type="text" name="option" />
        <button type="submit">Add item</button>
      </form>
    </section>
  );

  ReactDOM.render(template2, appRoot);
};

addItem();
