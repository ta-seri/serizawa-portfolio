import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold">Contact</h1>
  
        <div className="mt-6 text-center space-y-4">
          <p className="text-lg">お気軽にお問い合わせください！</p>
          <p>Email: <a href="mailto:iputatsuki@gmail.com" className="text-blue-500">iputatsuki@gmail.com</a></p>
          <div className="flex space-x-6 justify-center">
            <a
                href="https://x.com/seri_datasci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 text-3xl"
            >
                <FaXTwitter />
            </a>
            <a
                href="https://www.linkedin.com/in/tatsuki-serizawa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 text-3xl"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/TatsukiSerizawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 text-3xl"
            >
                <FaGithub />
            </a>
          </div>
        </div>
  
        <div className="mt-6 text-center">
          <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md">Back to Home</a>
        </div>
      </div>
    );
  }