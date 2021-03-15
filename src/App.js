import React from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import ToggleableForm from './components/ToggleableForm'


// Overall, you want to be able to switch between forms.
// 1) Turn the Login/Signup forms into controlled components
// 2) Make just one form show up at a time
// 3) Make the buttons toggle which component is rendered
// 4) Forward the ref from the ToggleableForm to the components
// 5) Make a form's first input toggled when it is active using a side effect


const App = () => {

    let data = [
      { name: 'Log in', component: LoginForm },
      { name: 'Sign up', component: SignupForm }
    ]

    return (
      <section>
        <h2>Log in / Sign up</h2>
        <ToggleableForm 
            options={data} 
        />
      </section>
    )
  }

  export default App