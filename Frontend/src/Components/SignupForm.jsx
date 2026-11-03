export default function SignupForm(){
    return (


    

    <div class="container my-auto py-4 d-flex justify-content-center mb-5">

            <div class="w-100 bg-white border rounded-4 shadow-sm p-md-5" style="max-width: 520px;">
                    
                    <div class="mb-3">
                        <h2 class="fw-bold text-dark display-6 mb-2">Create an account</h2>
                        <p class="text-secondary small">Let's get you set up for your next adventure.</p>
                    </div>

                   
                        
                        
                        <div class="mb-4">
                            <label for="username" class="form-label fw-semibold small text-muted mb-1" style="letter-spacing: 0.05em;">USERNAME</label>
                            <input name="username" type="text" class="form-control py-2.5 rounded-3 border-secondary-subtle" id="username" placeholder="e.g. travel_bug" required />
                            <div class="invalid-feedback">Please choose a unique profile username.</div>
                        </div>

                       
                        <div class="mb-4">
                            <label for="email" class="form-label fw-semibold small text-muted mb-1" style="letter-spacing: 0.05em;">EMAIL ADDRESS</label>
                            <input name="email" type="email" class="form-control py-2.5 rounded-3 border-secondary-subtle" id="email" placeholder="you@example.com" required />
                            <div class="invalid-feedback">Please provide a valid active email configuration mapping.</div>
                        </div>

                        
                        <div class="mb-4">
                            <label for="password" class="form-label fw-semibold small text-muted mb-1" style="letter-spacing: 0.05em;">PASSWORD</label>
                            <input name="password" type="password" class="form-control py-2.5 rounded-3 border-secondary-subtle" id="password" placeholder="Minimum 8 characters" required />
                            <div class="invalid-feedback">Please write your chosen secure password string.</div>
                        </div>


                     
                        <button type="submit" class="btn btn-dark w-100 py-3 rounded-3 fw-bold text-white shadow-sm mb-4">
                            Agree and continue
                        </button>
                        
                        
                        <div class="text-center small text-secondary">
                            Already a member? <a href="/login" class="text-dark fw-bold text-decoration-underline">Log in instead</a>
                        </div>
                   

            </div>
         
    </div>
    )
}