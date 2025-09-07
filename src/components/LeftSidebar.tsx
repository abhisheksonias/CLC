import React from 'react';

interface LeftSidebarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const LeftSidebar = ({ activeSection = "home", setActiveSection }: LeftSidebarProps) => {
  const menuItems = [
    { label: "CONTENT", key: "content", active: activeSection === "content", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
    { label: "HOME", key: "home", active: activeSection === "home", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
    { label: "ABOUT US", key: "about", active: activeSection === "about", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { label: "CLC IN THE MEDIA", key: "insights", active: activeSection === "insights", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg> },
    { label: "AREAS OF SERVICE", key: "expertise", active: activeSection === "expertise", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> },
    { label: "RESEARCH AND ARTICLES", key: "team", active: activeSection === "team", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
    // { label: "OPPORTUNITIES", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
    { label: "CONTACT", key: "contact", active: activeSection === "contact", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> },
  ];

  // const grayItems = [
  //   // { label: "CLCCLOUD", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg> },
  //   { label: "CLIENT ACCESS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> },
  //   { label: "MEMBER ACCESS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg> },
  // ];

  const sections = [
    // { title: "CLC Connect", subtitle: "Events and Calendar" },
    { title: "Proud Moments", subtitle: "How we perform" },
    // { title: "Commercial TV", subtitle: "Knowledge anywhere, anytime" },
    { title: "Deal Corner", subtitle: "See our recent deals" },
    { title: "Deal Talk", subtitle: "" }
  ];

  return (
    <div className="w-64 bg-slate-900/70 backdrop-blur-lg text-slate-300 h-fit flex flex-col border-r border-white/10 sticky top-0 self-start">
      <div className="p-2">
        {/* Main navigation */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveSection && setActiveSection(item.key)}
              className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active 
                  ? 'bg-blue-600/30 text-white' 
                  : 'hover:bg-slate-700/50 hover:text-slate-100'
              }`}
            >
              <div className="h-5 w-5 mr-3">{item.icon}</div>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Gray section separator and items */}
        <hr className="my-4 border-t border-slate-700/60" />

        {/* <div className="space-y-1">
          {grayItems.map((item, index) => (
            <a 
              key={index}
              href="#"
              className="flex items-center px-3 py-2 text-sm text-slate-400 cursor-pointer hover:bg-slate-700/50 hover:text-slate-100 rounded-md transition-colors"
            >
              <div className="h-5 w-5 mr-3">{item.icon}</div>
              {item.label}
            </a>
          ))}
        </div> */}
      </div>

      {/* Bottom sections */}
      <div className="bg-slate-900/50 p-2 border-t border-white/10">
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div key={index} className="px-3 py-2 rounded-md bg-slate-800/40 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <h3 className="font-semibold text-white text-sm">{section.title}</h3>
              {section.subtitle && (
                <p className="text-xs text-slate-400 mt-1">{section.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
