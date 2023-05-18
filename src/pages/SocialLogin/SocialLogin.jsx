import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="text-center mt-0">
      <button>
        <FcGoogle className="text-4xl mr-4" />
      </button>
      <button>
        <FaGithub className="text-4xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
