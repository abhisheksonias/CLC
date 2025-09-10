const RightSidebar = () => {
  return (
    <div className="w-full lg:w-auto bg-white border-l border-gray-200 sticky top-0 self-start">
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex">
          <input 
            type="text" 
            placeholder="Search Articles" 
            className="flex-1 px-3 py-2 border border-gray-300 text-sm"
          />
          <button className="px-4 py-2 bg-gray-600 text-white text-sm">
            SEARCH
          </button>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="border-b border-gray-200">
        <div className="bg-gray-600 text-white px-4 py-2">
          <h3 className="text-sm font-semibold">INSIGHTS AND PUBLICATIONS</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700">Distinctly Different</p>
        </div>
      </div>

      {/* What's New */}
      <div className="border-b border-gray-200">
        <div className="bg-white px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-red-600">WHAT'S NEW</h3>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-1">
              CLC Advises on the Formation of the India Deep Tech Investment Alliance (IDTA) with $1 Billion Commitments
            </h4>
            <p className="text-xs text-gray-500">Deal Corner · September 02 2025</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-1">
              Decoding Downstream Investment
            </h4>
            <p className="text-xs text-gray-500">New Publication · August 28 2025</p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="border-b border-gray-200">
        <div className="bg-white px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">EVENTS</h3>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-red-600 mb-2">WEBINARS</h4>
            <div>
              <h5 className="text-sm font-semibold text-gray-800 mb-1">
                The Next Big Play: Regulation and Opportunities in Online Social Games & E-Sports
              </h5>
              <p className="text-xs text-gray-500">September 09 2025 - September 09 2025</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-red-600 mb-2">SEMINAR</h4>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-xs text-gray-500 text-center">
        Commercial Law Chamber®2016 All rights reserved.
      </div>
    </div>
  );
};

export default RightSidebar;