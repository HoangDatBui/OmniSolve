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
        <article className="rounded-md border border-black/10 my-4 w-full max-w-md mx-auto shadow-md">
            <main className="p-4 text-black">
                <div className="measure">
                    <fieldset
                        id="sign_up"
                        className="border-0 p-0 m-0"
                    >
                        <legend className="text-2xl font-semibold p-0 m-0">
                            Register
                        </legend>
                        <div className="mt-3">
                            <label
                                className="block font-semibold leading-copy text-sm"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                onChange={onRegisterNameChanged}
                                className="p-2 w-full border border-gray-300 bg-transparent hover:bg-black hover:text-white transition"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="mt-3">
                            <label
                                className="block font-semibold leading-copy text-sm"
                                htmlFor="email-address"
                            >
                                Email
                            </label>
                            <input
                                onChange={onRegisterMailChanged}
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
                                onChange={onRegisterPasswordChanged}
                                className="font-bold p-2 w-full border border-gray-300 bg-transparent hover:bg-black hover:text-white transition"
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
                            onClick={() => onSubmitRegister()}
                            className="font-bold px-3 py-2 border border-black bg-transparent hover:scale-105 cursor-pointer text-sm inline-block transition"
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