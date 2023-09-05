const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:w-8/12">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:p-4">
          <div className="card-body">
            <h1 className="font-bold text-center uppercase text-2xl text-red-600">
              Sign In
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">{/* <p>Error</p> */}</label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 hover:bg-red-600 text-white font-semibold">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
