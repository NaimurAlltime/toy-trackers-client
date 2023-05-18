import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200  text-base-content mt-8 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <div>
              <div className="flex mt-3 items-center">
                <img className="w-[42px]" src="/logo1.png" alt="" />
                <h2 className="text-2xl font-bold">Toy Trackers</h2>
              </div>
              <p>
                Toy Trackers Ltd.
                <br />
                Providing reliable tech since 2016
              </p>
            </div>
          </div>

          <div className="w-full mt-3 md:w-1/4">
            {/* Contact Information */}
            <p className="text-lg font-semibold">Contact</p>
            <p>Phone: (+880) 17456-78901</p>
            <p>Email: toytrackers@gmail.com</p>
          </div>

          <div className="w-full mt-3 md:w-1/4">
            {/* Social Media Links */}
            <p className="text-lg font-semibold">Follow Us</p>
            <div className="flex mt-2">
              <FaFacebook className="text-2xl me-3" />
              <FaTwitter className="fs-4 me-3" />
              <FaYoutube className="text-2xl me-3" />
              <FaLinkedin className="text-2xl me-3" />
              <FaInstagram className="text-2xl me-3" />
            </div>
          </div>

          <div className="w-full mt-3 md:w-1/4">
            {/* Address */}
            <p className="text-lg font-semibold">Address</p>
            <p>Sector #07, Uttara Model Town, Dhaka 1230</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          {/* Copyright */}
          <p className="mt-2">
            © {new Date().getFullYear()} Copyright: All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
