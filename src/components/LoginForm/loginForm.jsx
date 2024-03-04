import React from 'react';

export const LoginForm = () => {

    return (
        <section>
            <form>
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
    
