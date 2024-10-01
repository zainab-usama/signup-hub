// src/components/Signup.js
import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../firebaseConfig'; // Import the initialized app

const Signup = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const db = getFirestore(app); // Get Firestore instance

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Call Firestore to save the email
        try {
            await addDoc(collection(db, 'waitlist'), {
                email: email,
            });
            alert('Thank you for signing up!');
        } catch (err) {
            console.error('Error adding document: ', err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;
