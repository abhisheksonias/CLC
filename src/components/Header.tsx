const Header = () => {
  const locations = [
    "MUMBAI", "BENGALURU" ,"NEW DELHI"  ];

  return (
    <header className="w-full">
      {/* Top teal header */}
      <div className="bg-white/70 backdrop-blur-lg text-black">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/clc-logo.png" alt="commercial law firm" className="h-14 w-auto" />
            </div>
            <div className="text-center flex-1">
              <p className="text-sm md:text-base tracking-wider">Advocates and Solicitors</p>
            </div>
            <div className="w-14 md:w-32"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Location tabs */}
      <div className="bg-blue-800/60 border-b">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-center space-x-8 py-2">
            {locations.map((location) => (
              <button
                key={location}
                className="text-xs text-white hover:text-primary transition-colors py-1"
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