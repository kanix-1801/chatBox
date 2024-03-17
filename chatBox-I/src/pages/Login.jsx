 

const Login = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/92/a9/ed/92a9ed84e0e3a8aea07224a32ec19a88.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-slate-200 font-bold">Hello there 👋</h1>
                        <p className="mb-5 text-slate-300">Join the conversation, meet new people, and make connections in one shared room.</p>
                        <button className="btn bg-purple-300 btn-purple">Login With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login