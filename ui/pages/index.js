import Link from 'next/link'
import Layout from "../components/layout";
import Image from "../components/image"

const styles = ["login"]

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => (
    <div Id="login-form">
      <header> LeadMrktr </header>
      <ul>
        <li><input placeholder="Username" /></li>
        <li><input placeholder="Password" type="password" /></li>
        <li><span id="forgot-password">Forgot Password?</span></li>
        <li><button> Login </button></li>
        <li><span id="singup-link">Don't have an account ? Sign Up! </span></li>
      </ul>
    </div>
  )
}



class WelcomeBack extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => (
    <div Id="welcome-back">
      <Image item="welcome" style={{width:"100%"}} id="welcome-image" />
      <div id="welcome-text">
        <span>Welcome Back </span>
        <span>Please sign in using the form on the left side ...</span>
      </div>
    </div>
  )
}

export default () => (
  <Layout styles={styles} className="login-container">
    <section className="left">
      <LoginForm />
    </section>
    <section className="right">
      <WelcomeBack />
    </section>
  </Layout>
)
