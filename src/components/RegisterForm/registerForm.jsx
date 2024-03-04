import React from 'react';

export const RegisterForm = () => {
    return (
       
        <section>
            <form>
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Rosie Simpson"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Rosie_Simpson@gmail.com"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                />
                <button type="submit">Register</button>
            </form>
        </section>
    );
};
    
