# IndiRact


## Setup workflow

#### Initial folders

```

    > public
      > scripts
        + app.js

    > src
      - app.js

```

> linking to cdn gives u access to globals: React,ReactDOM

#### terminal

- npm init
- installed live-server (g)
  + `live-server` to run server
- installed babel-cli (g)
- babel-preset-react@6.24.1
- babel-preset-env@1.5.2

> src/app.js --> contains `jsx`
> public/app.js ----> auto-generated file w/babel transformations

##### babel In order to compile JSX and ES6 code config

- path to code to compile
  + `src/app.js`
- path to output file
  + `--out-file=public/scripts/app.js`
- presets
  + `--presets=env,react --watch`


<kbd>here:</kbd>

```
      > babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

<br/>

- in a separate tab:
  + `live-server public`


<hr/>

<br/>

#### VS-Code Annoying typescript highlighting errors

`[ts] , expected`

Disabling every avail TS setting would not get rid of it.
Go to Extension view, search for @builtin javascript, and disable TypeScript Language Features.


<hr/>

<br />



`classes`: super/extends to add up properties from another constructor, re-write methods
  in parent class, pass events from parent/child classes & viceversa .
`jsx` component rendering, and often used patterns like inline rendering using ternary
  operators, and double negatives with booleans- jsx always returns undefined when no value.

<br />

<kbd>v3</kbd>

![](public/images/watch-crime.png)

<br />



### another todo list
.. but this time built off a `component-based` layout structure and jsx for class rendering inner-components:
header, list-options, single-option and add-option.

crime documentary watch guide listing some memorable titles available in ID Discovery channel:

 + `murder-instincts`,
 + `murder-comes-to-town`,
 + `murder-in-paradise`,
 + `kosher-killer -e`,
 + `killer-in-law -e`,
 + `last-dance -e`, and
 + `no-happy-ending -e`)




### components props
- allow components to comunicate with one another

```
   ex:
      //creating an instance of header component, allows you to re-use the
      //component, but if you want to custom the header component so that
      //it says contact us in the contact page or about us in the about page
      //you need to pass props

      //we pass data in when we initialize an instance of a component
      //this data we pass is known as `props`

      //props are passed in key-value pairs
      //key can be anything u want

      <Header
            title="test value"
            subtitle={'subtitle'}   //same
      />

      //key is title
      //value is 'test value'

      //How to access it in Header instance

      //this inside class Header refers to the current instance of the component

   //inside class Header
   ...
      render() {
         console.log(this.props);
         return (
            ...
         );
      }

      //this.props in console gives you

      {title: "Tivo Prime}


```

#### why adding bind(this) to methods

 + method functions have this clearly defined but
 + if a method is assigned to variable of the same name and later call you would
   get an error because:
 + you can't pass context from the obj to fn
 + this on a function will return undefined


 ```
      const obj = {
         name: 'joe',
         getName() {
            return this.name
         }
      }
      //here it's easy to see that this refers to the obj
      // but if you do
      const getName = obj.getName;

      //and then call the fn
      console.log(getName());   // that's where u encounter the error

      // u can bind directly to the event
         this.getName.bind(this)  //and it will bind to the class render method
      // or specify an obj anything

      //gen purpose ex:

      const getName = () => console.log(this);    //returns undefined

      //generally in react binding is done in constructor.

 ```

#### component state

- essential for component interactivity
- it allows components to manage some data
- when data changes automatically re-renders to reflect those changes


##### state steps:

- [01] when setting up state you need to come up with a default set of values
   + counter 0 (default state value)
   + array [] empty array ( default state value)

- [02] Component rendered with default state values

- [03] State changes based off of some event/user interaction like a button

- [04] The application re-renders itself. It brings the UI up-to-date with a
       component state.



```
   //without component state, you would need to manually call render method like this:

   const onDoSomething() => {
      some.options = [];
      render();
   }

```

### setState method call in component instances

- call like this:
- it gets call with a single argument that is going to be a function.
- and return an object

```
      this.setState(() => {
         return {
            count: 0
         }

      });


      //this is the old way - this is asyn and I know from personal experience that
      //it can cause problems. You may or may not get ur data, it may be stale/old
      //even outdated data

      It's asyn cause there's more going on behind the scenes than just updating
      an object, creates a virtual dom representation of your components, checks what
      needs to be updated and at that time this.state is updated.

      this.setState({
         name: ''
      });

      //better to use the updated function

      this.setState(() => {
         return {
            count: name
         };
      });

```

### recommended method for updating state

- `recommended` - to use `this.setState` with `function`.
- it doesnt suffer from the same problems cause we never access this.state.
- Instead react passes `prevState`

> technique ? ::=>.. is to get the old value first and use that.
> for ex: in a count set to zero, to increment the value you would get first
> the old value, then add one and use that as your dynamic value.

> Note you got access to `current state` values via the `first argument`
> which is commonly called `previous state`.

```
      this.setState((prevState) => {
         return {

            count: prevState.count + 1

         };

      });

```

### data upstream

- when u have children components that need to manipulate the state up
  in the parent.
- for ex: add option needs to be able to get that data text from the user to the
  parent component, just as the state (in parent) in order to add to array
  options needs to be able to remove an individual watch crime

- so the idea is to run some code at parent level based on events that are going
  to happen at their children components level.

- `props` are just a one-way street, they dont do upstream

- To pass data `upstream`, we have to `pass` `functions` in as `props`


### Reverses Data Flow (child-parent)
   + by first passing down functions to the children
   + children can then call the functions which are defined at parent level
   + as a result, you now can react to events in child components and while at the
     same time use functions at parent component

### Reversing data flow, but also passing data upstream

- the same way as with reversing data flow, but this time creating another function within the child
  component - do whatever calc are needed - then passing this data to the funcion in the parent component.



## stateless functional components
- we cannot use state inside functional components
- we can use props
- they are faster than state components
- so when u can u should use them


```
   ex: class User

      const User = (props) => {
         return (
            <div>
               <p>Name: {props.name}</p>
               <p>Age: {props.age}</p>
            </div>
         );

      };// User class

      ReactDOM.render(<User name='Joe' age={35} />, document.getElementById('app'));

```