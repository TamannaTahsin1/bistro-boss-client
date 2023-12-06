import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSocialLogin = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
<div>
        <div className='divider'>continue with</div>
        <div className='text-center'>
          <button
            onClick={() =>handleSocialLogin(googleSignIn)}
            className='btn bg-slate-200 text-black font-bold'>
            <FcGoogle></FcGoogle> Log in with Google
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;









