import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        conPassword: ''
    });

    const { username, email, password, conPassword } = formData;

    const handler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="divOuter"> 
            <div className="mb-3">
                         <h2 className="fw-bold text-dark display-6 mb-2">Create an account</h2>
                         <p className="text-secondary small">Let's get you set up for your next adventure.</p>
                    </div>

                    <div className="mb-4">
                             <label htmlFor="username" className="form-label fw-semibold small text-muted mb-1">USERNAME</label>
                             <input name="username" type="text" class="form-control py-2.5 rounded-3 border-secondary-subtle" id="username" placeholder="e.g. travel_bug" required />
                            
                       </div>

                       <div className="mb-4">
                            <label htmlFor="email" className="form-label fw-semibold small text-muted mb-1">EMAIL ADDRESS</label>
                            <input name="email" type="email" className="form-control py-2.5 rounded-3 border-secondary-subtle" id="email" placeholder="you@example.com" required />
                             
                         </div>

                         <div className="mb-4">
                          <label htmlFor="password" className="form-label fw-semibold small text-muted mb-1">PASSWORD</label>
                             <input name="password" type="password" className="form-control py-2.5 rounded-3 border-secondary-subtle" id="password" placeholder="Minimum 8 characters" required />
                            
                         </div>

                         <button type="submit" className="btn btn-dark w-100 py-3 rounded-3 fw-bold text-white shadow-sm mb-4">
                         Agree and continue
                         </button>
                        
                        
                         <div className="text-center small text-secondary">
                            Already a member? <a href="/login" class="text-dark fw-bold text-decoration-underline">Log in instead</a>
                         </div>

                        

         
        </div>
    );
}
