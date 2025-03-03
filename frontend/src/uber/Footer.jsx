const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold">Uber</h2>
            <a href="#" className="text-gray-400 hover:text-white">Visit Help Center</a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Our Offerings</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Ride</a></li>
              <li><a href="#" className="hover:text-white">Drive</a></li>
              <li><a href="#" className="hover:text-white">Deliver</a></li>
              <li><a href="#" className="hover:text-white">Eat</a></li>
              <li><a href="#" className="hover:text-white">Uber for Business</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Travel</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Reserve</a></li>
              <li><a href="#" className="hover:text-white">Airports</a></li>
              <li><a href="#" className="hover:text-white">Cities</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Accessibility</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="google-play-badge.png" alt="Google Play" className="h-10" />
            <img src="app-store-badge.png" alt="App Store" className="h-10" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;