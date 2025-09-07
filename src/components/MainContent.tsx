const MainContent = () => {
  return (
    <div className="flex-1 bg-white/95 backdrop-blur-sm p-8">
      {/* Page title and navigation */}
      <div className="mb-6">
        <h1 className="text-3xl font-light text-gray-800 mb-4">Commercial</h1>
        <div className="flex space-x-6 text-sm">
          <span className="text-gray-600">PUBLIC</span>
          <span className="text-gray-600">STUDENT</span>
          <span className="text-gray-600">CLIENT</span>
          <span className="text-gray-600">MEMBER</span>
        </div>
      </div>

      {/* Video embed area */}
      <div className="mb-8">
        <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="bg-primary text-white p-4 rounded-lg mb-4 inline-block">
              <span className="text-2xl">▶</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Tax Structuring and Commercial Litigation in 2023
            </h2>
            <p className="text-gray-600">
              Watch our latest insights on tax advisory and commercial dispute resolution
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-primary text-white px-4 py-2 rounded text-sm">
                Watch Later
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded text-sm">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team photos placeholder */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Team Member {i}</span>
          </div>
        ))}
      </div>

      {/* Commercial Law Chamber info */}
      <div className="flex items-center text-sm text-gray-600">
        <span className="mr-4">Commercial Law Chamber</span>
        <span>LEGAL AND TAX COUNSELING WORLDWIDE</span>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        March 24, 2023
      </div>
    </div>
  );
};

export default MainContent;