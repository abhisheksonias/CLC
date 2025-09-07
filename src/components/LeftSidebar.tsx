const LeftSidebar = () => {
  const menuItems = [
    { label: "CONTENT", active: true },
    { label: "HOME" },
    { label: "ABOUT US" },
    { label: "CLC IN THE MEDIA" },
    { label: "AREAS OF SERVICE" },
    { label: "RESEARCH AND ARTICLES" },
    { label: "OPPORTUNITIES" },
    { label: "CONTACT" },
  ];

  const grayItems = [
    { label: "CLCCLOUD" },
    { label: "CLIENT ACCESS" },
    { label: "MEMBER ACCESS" },
  ];

  const sections = [
    {
      title: "CLC Connect",
      subtitle: "Events and Calendar"
    },
    {
      title: "Proud Moments",
      subtitle: "How we perform"
    },
    {
      title: "Commercial TV",
      subtitle: "Knowledge anywhere, anytime"
    },
    {
      title: "Deal Corner",
      subtitle: "See our recent deals"
    },
    {
      title: "Deal Talk",
      subtitle: ""
    }
  ];

  return (
    <div className="w-64 bg-sidebar-bg text-sidebar-foreground min-h-screen">
      {/* Main navigation */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
              item.active 
                ? 'bg-sidebar-hover text-white' 
                : 'hover:bg-sidebar-hover'
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Gray section */}
      <div className="bg-gray-400 py-2">
        {grayItems.map((item, index) => (
          <div 
            key={index}
            className="px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-300 transition-colors"
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Bottom sections */}
      <div className="bg-gray-300 py-4">
        {sections.map((section, index) => (
          <div key={index} className="px-4 py-3 border-b border-gray-400 last:border-b-0">
            <h3 className="font-semibold text-gray-800 text-sm">{section.title}</h3>
            {section.subtitle && (
              <p className="text-xs text-gray-600 mt-1">{section.subtitle}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;