class IndiRact extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
         </div>
      );
   }// render

}// IndiRact class

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>TIVo Guide</h1>
            <h2>Crime Documentaries</h2>
         </div>
      );
   };// render

}// Header class

class Action extends React.Component {
   render() {
      return (
         <div>
            <button>What to watch?</button>
         </div>
      );

   };// render

}// Action class

class Options extends React.Component {
   render() {
      return (
         <div>
            <p>Options Component here</p>
            <div>
               <SingleOption />
            </div>
         </div>
      );

   }; render

}// Options class

class SingleOption extends React.Component {
   render() {
      return (
         <div>
            <p>Single option component</p>
         </div>
      );

   }//render

}// SingleOption class


class AddOption extends React.Component {
   render() {
      return (
         <div>
            <p>AddOption component</p>
         </div>
      );
   }//render

}// AddOption class



ReactDOM.render(
   <IndiRact />,
   document.getElementById('app')
);