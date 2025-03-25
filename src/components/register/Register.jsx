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
        <div className="relative min-h-screen bg-[#080710]">
      {/* Background Shapes */}
      <div className="absolute left-1/2 top-1/2 w-[430px] h-[520px] -translate-x-1/2 -translate-y-1/2">
        <div 
          className="absolute rounded-full" 
          style={{ 
            left: '-80px', 
            top: '-80px', 
            width: '200px', 
            height: '200px', 
            background: 'linear-gradient(#1845ad, #23a2f6)' 
          }}
        ></div>
        <div 
          className="absolute rounded-full" 
          style={{ 
            right: '-30px', 
            bottom: '-80px', 
            width: '200px', 
            height: '200px', 
            background: 'linear-gradient(to right, #ff512f, #f09819)' 
          }}
        ></div>
      </div>

      {/* Form */}
      <form 
        onSubmit={(e) => { e.preventDefault(); onSubmitRegister(); }}
        className="absolute left-1/2 top-1/2 w-[400px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-2 border-white/10 shadow-[0_0_40px_rgba(8,7,16,0.6)] p-[50px_35px] bg-[rgba(255,255,255,0.13)]"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <h3 className="text-[32px] font-medium leading-[42px] text-center">Register Here</h3>
        
        <label htmlFor="name" className="block mt-[30px] text-[16px] font-medium">
          Name
        </label>
        <input 
          type="text" 
          id="name" 
          placeholder="Your Name" 
          value={registerName}
          onChange={onRegisterNameChanged}
          className="block h-[50px] w-full bg-[rgba(255,255,255,0.07)] rounded-[3px] px-[10px] mt-[8px] text-[14px] font-light placeholder:text-[#e5e5e5]"
        />

        <label htmlFor="email" className="block mt-[30px] text-[16px] font-medium">
          Email
        </label>
        <input 
          type="email" 
          id="email" 
          placeholder="Email" 
          value={registerEmail}
          onChange={onRegisterMailChanged}
          className="block h-[50px] w-full bg-[rgba(255,255,255,0.07)] rounded-[3px] px-[10px] mt-[8px] text-[14px] font-light placeholder:text-[#e5e5e5]"
        />

        <label htmlFor="password" className="block mt-[30px] text-[16px] font-medium">
          Password
        </label>
        <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          value={registerPassword}
          onChange={onRegisterPasswordChanged}
          className="block h-[50px] w-full bg-[rgba(255,255,255,0.07)] rounded-[3px] px-[10px] mt-[8px] text-[14px] font-light placeholder:text-[#e5e5e5]"
        />

        <button 
          type="submit" 
          className="mt-[50px] w-full bg-white text-[#080710] py-[15px] text-[18px] font-semibold rounded-[5px] cursor-pointer"
        >
          Register
        </button>

        <div className="social mt-[30px] flex">
          <div className="go w-[150px] rounded-[3px] pt-[5px] pr-[10px] pb-[10px] pl-[5px] bg-[rgba(255,255,255,0.27)] text-[#eaf0fb] text-center hover:bg-[rgba(255,255,255,0.47)] cursor-pointer">
            <i className="fab fa-google mr-[4px]"></i> Google
          </div>
          <div className="fb w-[150px] rounded-[3px] pt-[5px] pr-[10px] pb-[10px] pl-[5px] bg-[rgba(255,255,255,0.27)] text-[#eaf0fb] text-center hover:bg-[rgba(255,255,255,0.47)] cursor-pointer ml-[25px]">
            <i className="fab fa-facebook mr-[4px]"></i> Facebook
          </div>
        </div>
      </form>
    </div>
    );
}

export default Register;