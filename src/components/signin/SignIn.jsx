import React, { useState } from 'react';

function SignIn({ onRouteChange, loadUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onMailChanged = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChanged = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitSignIn = () => {
        fetch('http://localhost:4000/signin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user[0].id) {
                    loadUser(user);
                    onRouteChange('home');
                }
            })
    }

    return (
        <article className="br3 ba b--black-10 mv4 w-30 shadow-5 mw6 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset
                        id="sign_up"
                        className="ba b--transparent ph0 mh0"
                    >
                        <legend className="f2 fw6 ph0 mh0">
                            Sign In
                        </legend>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="email-address"
                            >
                                Email
                            </label>
                            <input
                                onChange={onMailChanged}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                            />
                        </div>
                        <div className="mv3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                onChange={onPasswordChanged}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer">
                        </label>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onSubmitSignIn()}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer" onClick={() => onRouteChange('register')}>Register</p>
                    </div>
                </div>
            </main>
        </article>
    );
}

export default SignIn;
