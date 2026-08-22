function Login(){

    return (
      <div className="min-h-[90vh] flex flex-col justify-center">
        <div className="primary-div w-xl">
          <h4 className="text-2xl mb-4">Login</h4>

          <form action="" className="flex flex-col align-center">
            <div className="grid grid-cols-2 gap-4">
                <label htmlFor="id" className="text-right">Username</label>
                <input type="text" id="id" />
                <label htmlFor="organization"className="text-right">Organization</label>
                <input type="text" id="organization" />
                <label htmlFor="password"className="text-right">Password</label>
                <input type="password" id="password" />
            </div>
            <button className="primary-btn mt-6 p-2 self-center">Login</button>
          </form>
        </div>
      </div>
    );

}

export default Login;