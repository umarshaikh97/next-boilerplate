const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h6 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Company Name
            </h6>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Delivering insights and solutions
            </p>
          </div>
          <div>
            <h6 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Quick Links
            </h6>
            <a
              href="#"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900
                dark:hover:text-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900
                dark:hover:text-gray-100"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900
                dark:hover:text-gray-100"
            >
              Reports
            </a>
          </div>
          <div>
            <h6 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Legal
            </h6>
            <a
              href="#"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900
                dark:hover:text-gray-100"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900
                dark:hover:text-gray-100"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900
                dark:hover:text-gray-100"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
