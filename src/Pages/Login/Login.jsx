import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'


const Login = () => {
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "user logging successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      })
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  }
  return (
    <>

      <Helmet>
        <title>Bistro boss | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleValidateCaptcha}  name='captcha' placeholder="type the text above" className="input input-bordered" required />

                <button  className="btn btn-outline btn-xs mt-2">Validate</button>
              </div>
              <div className="form-control mt-6">

                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p><small>New Here? <Link to="/signup">Create Account</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;