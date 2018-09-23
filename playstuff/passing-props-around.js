class IndiRact extends React.Component {
   render() {
      const title = 'TIVo Prime Guide';
      const subtitle = 'Crime Documentaries';
      const options = ['Murder Instincts','Murder Comes To Town',
                     'Murder In Paradise', 'Killer In-Law','Last Dance',
                     'No Happy Ending'];

      return (
         <div>
            <Header
               title= {title}
               subtitle={subtitle}
             />
            <Action />
            <Options
               options={options}
             />
            <AddOption />
         </div>
      );
   }// render

}// IndiRact class

class Header extends React.Component {
   render() {

      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
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
      console.log(this.props.options);
      return (
         <div>{this.props.options.map((option,index) => {
            return (
               <div key={index}>
                  <SingleOption
                     key={index} singleOption={option}
                  />
               </div>
            );
         })}
         <p>No. Shows: {this.props.options.length}</p>



         </div>
      );

   }; render

}// Options class

class SingleOption extends React.Component {
   render() {
      return (
         <div>
            Watch Now: {this.props.singleOption}
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