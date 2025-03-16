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
        fetch('https://omnisolveapi.onrender.com/signin',
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
        <article className="rounded-md border border-black/10 my-4 w-full max-w-md mx-auto shadow-md">
            <main className="p-4 text-black">
                <div className="measure">
                    <fieldset
                        id="sign_up"
                        className="border-0 p-0 m-0"
                    >
                        <legend className="text-2xl font-semibold p-0 m-0 text-white">
                            Sign In
                        </legend>
                        <div className="mt-3">
                            <label
                                className="block font-semibold leading-copy text-sm"
                                htmlFor="email-address"
                            >
                                Email
                            </label>
                            <input
                                onChange={onMailChanged}
                                className="p-2 w-full border border-gray-300 bg-transparent hover:bg-black hover:text-white transition"
                                type="email"
                                name="email-address"
                                id="email-address"
                            />
                        </div>
                        <div className="my-3">
                            <label
                                className="block font-semibold leading-copy text-sm"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                onChange={onPasswordChanged}
                                className="p-2 w-full font-bold border border-gray-300 bg-transparent hover:bg-black hover:text-white transition"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>
                        <label className="p-0 m-0 leading-copy text-sm cursor-pointer">
                        </label>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onSubmitSignIn()}
                            className="font-bold px-3 py-2 border border-black bg-transparent hover:scale-105 cursor-pointer text-sm inline-block transition"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                    <div className="leading-copy mt-3">
                        <p className="text-sm hover:opacity-75 text-black cursor-pointer" onClick={() => onRouteChange('register')}>Register</p>
                    </div>
                </div>
            </main>
        </article>
    );
}

export default SignIn;