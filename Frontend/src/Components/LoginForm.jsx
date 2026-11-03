export default function LoginForm() {
  return (
    <>
      <div className="container my-auto py-5 d-flex justify-content-center" style={{width:"50%",height:"90%"}}>
        <div
          className="w-100 bg-white border rounded-4 shadow-sm p-4 p-md-5"
          
        >
          <div className="mb-4">
            <h3 className="mb-1" style={{textAlign:"center",color:"#240763"}}>Welcome back</h3>
            <p className="text-secondary small" style={{textAlign:"center"}}>
              Enter your credentials to access your dashboard.
            </p>
          </div>

         
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label fw-semibold small text-secondary mb-1"
              >
                EMAIL
              </label>
              <input
                name="email"
                type="email"
                className="form-control py-2.5 border-secondary-subtle"
                id="email"
                placeholder="abc@gmail.com"
                required
              />
              
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <label
                  htmlFor="password"
                  className="form-label fw-semibold small text-secondary m-0"
                >
                  PASSWORD
                </label>
                <a
                  href="/forgot-password"
                  className="small text-muted text-decoration-none"
                >
                  ForgotPassword?
                </a>
              </div>
              <input
                name="password"
                type="password"
                className="form-control py-2.5 border-secondary-subtle"
                id="password"
                placeholder="*******"
                required
              />
              <div class="invalid-feedback">Please enter your password.</div>
            </div>

            <button
              type="submit"
              className="w-100 py-3 fw-bold text-white shadow-sm mb-4"
              style={{backgroundColor:"#25036F"}}
              
            >
              Log in
            </button>

            <hr className="text-muted opacity-25 my-4" />

            <div className="text-center small text-secondary">
              First time using Wanderlust?{" "}
              <a
                href="/signup"
                className=" fw-bold text-decoration-underline"
                style={{color:"#25036F"}}
              >
                Create an account
              </a>
            </div>
          
        </div>
      </div>
    </>
  );
}
