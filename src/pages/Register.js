import React from 'react';

function Register() {
  return (
    <div>
      <form>
        <h2>Register</h2>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
