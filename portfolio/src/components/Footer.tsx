const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className=" border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-500 transition-colors duration-300">
             Felipe Stawinski Suzuki © {new Date().getFullYear()}
          </p>
        </div>
    </footer>
  );
};

export default Footer;