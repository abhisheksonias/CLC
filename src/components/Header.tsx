const Header = () => {
  const locations = [
    "MUMBAI", "BENGALURU" ,"NEW DELHI"  ];

  return (
    <header className="w-full">
      {/* Top teal header */}
      <div className="bg-blue-600/20 backdrop-blur-lg text-black">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/clc-logo.png" alt="commercial law firm" className="h-10 w-auto" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl  font-light">Commercial Law Chamber</h1>
              <p className="text-xs tracking-wider">Leading Law Firm for Tax & Commercial Litigation</p>
            </div>
            <div className="w-32"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Location tabs */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-center space-x-8 py-2">
            {locations.map((location) => (
              <button
                key={location}
                className="text-xs text-gray-600 hover:text-primary transition-colors py-1"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;