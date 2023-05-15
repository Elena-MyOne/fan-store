import React, { useState, ChangeEvent, FormEvent } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400';
  const errorStyle = 'error text-red-600';

  function handelForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="h-[87vh] flex justify-center items-center bg-gray-100">
      <div className="body bg-white p-4 border rounded w-[450px]">
        <h2 className="title text-center font-semibold text-lg mb-8">Registration</h2>
        <form className="flex items-center justify-center flex-col gap-8" onSubmit={handelForm}>
          <div className="w-full">
            <input
              type="text"
              className={`name ${inputStyles}`}
              placeholder="Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <div className={errorStyle}></div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className={`email ${inputStyles}`}
              placeholder="Email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <div className={errorStyle}></div>
          </div>
          <div className="w-full">
            <input
              type="password"
              className={`password ${inputStyles}`}
              placeholder="Password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <div className={errorStyle}></div>
          </div>
          <button
            type="submit"
            className="px-10 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
