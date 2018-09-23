class Visibility extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false
      };
      this.toggleHandle = this.toggleHandle.bind(this);
   }// const

   toggleHandle() {
      this.setState((prevState) => {
         return {
            show: !prevState.show
         };
      });
   }// toggleHandle

   render() {
      const showmePlease = 'Show me some details here please';
      return (
         <div>
            <h1>Visibility Toggle1</h1>
            <div>
               <button
                  onClick={this.toggleHandle}
                  id='showme'>Show details</button>
                  <p>
                     {
                        (this.state.show) && showmePlease
                     }
                  </p>
            </div>
         </div>

      );

   }// render


}// Visibility class


ReactDOM.render(

   <Visibility />,
   document.getElementById('app')

);

