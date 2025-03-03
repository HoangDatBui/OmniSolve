import React, { useState } from 'react';

function Register({ onRouteChange, loadUser }) {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');

    const onRegisterMailChanged = (event) => {
        setRegisterEmail(event.target.value);
    }

    const onRegisterPasswordChanged = (event) => {
        setRegisterPassword(event.target.value);
    }

    const onRegisterNameChanged = (event) => {
        setRegisterName(event.target.value);
    }

    const onSubmitRegister = () => {
        fetch('https://omnisolveapi.onrender.com/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: registerName,
                    email: registerEmail,
                    password: registerPassword
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user) {
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
                            Register
                        </legend>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                onChange={onRegisterNameChanged}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="email-address"
                            >
                                Email
                            </label>
                            <input
                                onChange={onRegisterMailChanged}
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
                                onChange={onRegisterPasswordChanged}
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
                            onClick={() => onSubmitRegister()}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register"
                        />
                    </div>
                </div>
            </main>
        </article>
    );
}

export default Register;
