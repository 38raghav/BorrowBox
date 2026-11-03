export default function LoginForm() {
  return (
    <>
      <div class="container my-auto py-5 d-flex justify-content-center">
        <div
          class="w-100 bg-white border rounded-4 shadow-sm p-4 p-md-5"
          style="max-width: 520px;"
        >
          <div class="mb-4">
            <h3 class="fw-bold text-dark fs-3 mb-1">Welcome back</h3>
            <p class="text-secondary small">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          <form
            action="/login"
            method="POST"
            class="needs-validation"
            novalidate
          >
            <div class="mb-4">
              <label
                for="email"
                class="form-label fw-semibold small text-secondary mb-1"
              >
                EMAIL
              </label>
              <input
                name="email"
                type="email"
                class="form-control py-2.5 border-secondary-subtle"
                id="email"
                required
              />
              <div class="invalid-feedback">
                Please enter your registered email.
              </div>
            </div>

            <div class="mb-4">
              <div class="d-flex justify-content-between mb-1">
                <label
                  for="password"
                  class="form-label fw-semibold small text-secondary m-0"
                >
                  PASSWORD
                </label>
                <a
                  href="/forgot-password"
                  class="small text-muted text-decoration-none"
                >
                  Forgot?
                </a>
              </div>
              <input
                name="password"
                type="password"
                class="form-control py-2.5 border-secondary-subtle"
                id="password"
                required
              />
              <div class="invalid-feedback">Please enter your password.</div>
            </div>

            <button
              type="submit"
              class="btn btn-dark w-100 py-3 fw-bold text-white shadow-sm mb-4"
              style="background-color: #222222;"
            >
              Log in
            </button>

            <hr class="text-muted opacity-25 my-4" />

            <div class="text-center small text-secondary">
              First time using Wanderlust?{" "}
              <a
                href="/signup"
                class="text-dark fw-bold text-decoration-underline"
              >
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
