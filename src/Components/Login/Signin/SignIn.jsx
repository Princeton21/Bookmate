import React, {Component} from 'react'
import Button from '../Forms/Button/Button'
import './SignIn.css'
import { signInWithGoogle } from '../../../Firebase/Utilities'

class SignIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }
    render(){
        return (
            <>
            <div className="signin">
                <div className="wrap">
                    <div className="heading">
                    <h2>
                        Login
                    </h2>
                    </div>
                    <div className="formwrap">
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="socialSignIn">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        Sign In with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
          )
    }
  
}

export default SignIn
