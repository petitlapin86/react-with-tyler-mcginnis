import react from 'react'
import reactDom from 'react-dom' //react dom allows us to render a react element to the dom
import './index.css'

//pieces of a component:
//Component
//state
//lifescycle
//UI
class App extends React.Component { //define a component
  render() {
    return (
      <div>Hello World</div>
      )
  }
}


ReactDom.render(
  <App/>, // now use the above component
  document.getElementById('app')
  //react element
  //where to render the element to
)
