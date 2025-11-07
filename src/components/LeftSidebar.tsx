import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LeftSidebarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const LeftSidebar = ({ activeSection = "home", setActiveSection }: LeftSidebarProps) => {
  const navigate = useNavigate();

  // Map section keys to routes
  const sectionToRoute: Record<string, string> = {
    'home': '/',
    'about': '/about',
    'career': '/career',
    'expertise': '/expertise',
    'team': '/team',
    'insights': '/insights',
    'contact': '/contact',
    'content': '/news-updates',
  };

  const handleNavigation = (key: string) => {
    const route = sectionToRoute[key] || '/';
    navigate(route);
    if (setActiveSection) {
      setActiveSection(key);
    }
  };

  const menuItems = [
    { label: "HOME", key: "home", active: activeSection === "home", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
    { label: "ABOUT CLC", key: "about", active: activeSection === "about", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { label: "EXPERTISE", key: "expertise", active: activeSection === "expertise", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.25 5.4375H16.3125V4.5C16.3125 3.95299 16.0952 3.42839 15.7084 3.04159C15.3216 2.6548 14.797 2.4375 14.25 2.4375H9.75C9.20299 2.4375 8.67839 2.6548 8.29159 3.04159C7.9048 3.42839 7.6875 3.95299 7.6875 4.5V5.4375H3.75C3.4019 5.4375 3.06806 5.57578 2.82192 5.82192C2.57578 6.06806 2.4375 6.4019 2.4375 6.75V18.75C2.4375 19.0981 2.57578 19.4319 2.82192 19.6781C3.06806 19.9242 3.4019 20.0625 3.75 20.0625H20.25C20.5981 20.0625 20.9319 19.9242 21.1781 19.6781C21.4242 19.4319 21.5625 19.0981 21.5625 18.75V6.75C21.5625 6.4019 21.4242 6.06806 21.1781 5.82192C20.9319 5.57578 20.5981 5.4375 20.25 5.4375ZM8.8125 4.5C8.8125 4.25136 8.91127 4.0129 9.08709 3.83709C9.2629 3.66127 9.50136 3.5625 9.75 3.5625H14.25C14.4986 3.5625 14.7371 3.66127 14.9129 3.83709C15.0887 4.0129 15.1875 4.25136 15.1875 4.5V5.4375H8.8125V4.5ZM15.1875 6.5625V18.9375H8.8125V6.5625H15.1875ZM3.5625 18.75V6.75C3.5625 6.70027 3.58225 6.65258 3.61742 6.61742C3.65258 6.58225 3.70027 6.5625 3.75 6.5625H7.6875V18.9375H3.75C3.70027 18.9375 3.65258 18.9177 3.61742 18.8826C3.58225 18.8474 3.5625 18.7997 3.5625 18.75ZM20.4375 18.75C20.4375 18.7997 20.4177 18.8474 20.3826 18.8826C20.3474 18.9177 20.2997 18.9375 20.25 18.9375H16.3125V6.5625H20.25C20.2997 6.5625 20.3474 6.58225 20.3826 6.61742C20.4177 6.65258 20.4375 6.70027 20.4375 6.75V18.75Z" fill="#1E1E1E"/>
      </svg>
      },
    { label: "OUR TEAM", key: "team", active: activeSection === "team", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
    { label: "PUBLICATIONS", key: "insights", active: activeSection === "insights", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3125 21.75C16.3125 21.8992 16.2532 22.0422 16.1477 22.1477C16.0423 22.2532 15.8992 22.3125 15.75 22.3125H8.25C8.10082 22.3125 7.95774 22.2532 7.85225 22.1477C7.74676 22.0422 7.6875 21.8992 7.6875 21.75C7.6875 21.6008 7.74676 21.4577 7.85225 21.3522C7.95774 21.2467 8.10082 21.1875 8.25 21.1875H15.75C15.8992 21.1875 16.0423 21.2467 16.1477 21.3522C16.2532 21.4577 16.3125 21.6008 16.3125 21.75ZM20.0625 9.74999C20.0657 10.9719 19.7896 12.1785 19.2554 13.2775C18.7211 14.3765 17.9429 15.3389 16.98 16.0912C16.7735 16.2499 16.606 16.4537 16.4904 16.6871C16.3747 16.9204 16.3138 17.1771 16.3125 17.4375V18C16.3125 18.3481 16.1742 18.6819 15.9281 18.9281C15.6819 19.1742 15.3481 19.3125 15 19.3125H9C8.6519 19.3125 8.31806 19.1742 8.07192 18.9281C7.82578 18.6819 7.6875 18.3481 7.6875 18V17.4375C7.68724 17.1798 7.62797 16.9255 7.51421 16.6943C7.40045 16.463 7.23524 16.2609 7.03125 16.1034C6.07133 15.3559 5.29398 14.3998 4.758 13.3075C4.22202 12.2153 3.94145 11.0154 3.9375 9.79874C3.91312 5.42905 7.44281 1.79249 11.8059 1.68749C12.8809 1.6616 13.9503 1.85102 14.951 2.2446C15.9516 2.63817 16.8635 3.22795 17.6329 3.97921C18.4022 4.73048 19.0135 5.62805 19.4308 6.61911C19.848 7.61016 20.0628 8.67467 20.0625 9.74999ZM18.9375 9.74999C18.9378 8.82465 18.7529 7.9086 18.3938 7.05578C18.0347 6.20295 17.5087 5.43058 16.8466 4.78414C16.1845 4.13769 15.3998 3.63022 14.5386 3.29162C13.6775 2.95301 12.7573 2.7901 11.8322 2.81249C8.07844 2.90624 5.04187 6.03186 5.0625 9.78936C5.06605 10.8363 5.30759 11.8688 5.76885 12.8087C6.23011 13.7486 6.89901 14.5713 7.725 15.2147C8.06418 15.4773 8.33859 15.8143 8.52712 16.1997C8.71565 16.585 8.81328 17.0085 8.8125 17.4375V18C8.8125 18.0497 8.83225 18.0974 8.86742 18.1326C8.90258 18.1677 8.95027 18.1875 9 18.1875H11.4375V13.7334L8.6025 10.8975C8.50314 10.7909 8.44905 10.6498 8.45162 10.5041C8.45419 10.3584 8.51322 10.2193 8.61628 10.1163C8.71934 10.0132 8.85838 9.95418 9.00411 9.9516C9.14983 9.94903 9.29087 10.0031 9.3975 10.1025L12 12.705L14.6025 10.1025C14.7091 10.0031 14.8502 9.94903 14.9959 9.9516C15.1416 9.95418 15.2807 10.0132 15.3837 10.1163C15.4868 10.2193 15.5458 10.3584 15.5484 10.5041C15.551 10.6498 15.4969 10.7909 15.3975 10.8975L12.5625 13.7334V18.1875H15C15.0497 18.1875 15.0974 18.1677 15.1326 18.1326C15.1677 18.0974 15.1875 18.0497 15.1875 18V17.4375C15.1886 17.0069 15.2881 16.5823 15.4781 16.196C15.6682 15.8096 15.944 15.4718 16.2844 15.2081C17.1134 14.5608 17.7835 13.7324 18.2433 12.7864C18.7032 11.8404 18.9406 10.8018 18.9375 9.74999Z" fill="#1E1E1E"/>
      </svg>
       },
    { label: "NEWS AND UPDATES", key: "content", active: activeSection === "content", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0625 10.5C17.0625 10.6492 17.0032 10.7923 16.8977 10.8977C16.7923 11.0032 16.6492 11.0625 16.5 11.0625H9C8.85082 11.0625 8.70774 11.0032 8.60225 10.8977C8.49676 10.7923 8.4375 10.6492 8.4375 10.5C8.4375 10.3508 8.49676 10.2077 8.60225 10.1023C8.70774 9.99676 8.85082 9.9375 9 9.9375H16.5C16.6492 9.9375 16.7923 9.99676 16.8977 10.1023C17.0032 10.2077 17.0625 10.3508 17.0625 10.5ZM16.5 12.9375H9C8.85082 12.9375 8.70774 12.9968 8.60225 13.1023C8.49676 13.2077 8.4375 13.3508 8.4375 13.5C8.4375 13.6492 8.49676 13.7923 8.60225 13.8977C8.70774 14.0032 8.85082 14.0625 9 14.0625H16.5C16.6492 14.0625 16.7923 14.0032 16.8977 13.8977C17.0032 13.7923 17.0625 13.6492 17.0625 13.5C17.0625 13.3508 17.0032 13.2077 16.8977 13.1023C16.7923 12.9968 16.6492 12.9375 16.5 12.9375ZM21.5625 6V17.25C21.5625 17.797 21.3452 18.3216 20.9584 18.7084C20.5716 19.0952 20.047 19.3125 19.5 19.3125H3C2.45445 19.3125 1.93112 19.0964 1.54457 18.7114C1.15802 18.3264 0.939732 17.804 0.9375 17.2584V8.25C0.9375 8.10082 0.996763 7.95774 1.10225 7.85225C1.20774 7.74676 1.35082 7.6875 1.5 7.6875C1.64918 7.6875 1.79226 7.74676 1.89775 7.85225C2.00324 7.95774 2.0625 8.10082 2.0625 8.25V17.25C2.0625 17.4986 2.16127 17.7371 2.33709 17.9129C2.5129 18.0887 2.75136 18.1875 3 18.1875C3.24864 18.1875 3.4871 18.0887 3.66291 17.9129C3.83873 17.7371 3.9375 17.4986 3.9375 17.25V6C3.9375 5.6519 4.07578 5.31806 4.32192 5.07192C4.56806 4.82578 4.9019 4.6875 5.25 4.6875H20.25C20.5981 4.6875 20.9319 4.82578 21.1781 5.07192C21.4242 5.31806 21.5625 5.6519 21.5625 6ZM20.4375 6C20.4375 5.95027 20.4177 5.90258 20.3826 5.86742C20.3474 5.83225 20.2997 5.8125 20.25 5.8125H5.25C5.20027 5.8125 5.15258 5.83225 5.11742 5.86742C5.08225 5.90258 5.0625 5.95027 5.0625 6V17.25C5.0629 17.576 4.98544 17.8974 4.83656 18.1875H19.5C19.7486 18.1875 19.9871 18.0887 20.1629 17.9129C20.3387 17.7371 20.4375 17.4986 20.4375 17.25V6Z" fill="#1E1E1E"/>
      </svg>
       },
    { label: "CONTACT", key: "contact", active: activeSection === "contact", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> },
    { label: "CAREERS", key: "career", active: activeSection === "career", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
  ];

  // const grayItems = [
  //   // { label: "CLCCLOUD", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg> },
  //   { label: "CLIENT ACCESS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> },
  //   { label: "MEMBER ACCESS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg> },
  // ];

  const sections = [
    // { title: "CLC Connect", subtitle: "Events and Calendar" },
    { title: "CLC in News", subtitle: "How we perform" },
    // { title: "Commercial TV", subtitle: "Knowledge anywhere, anytime" },
    { title: "CLC Matter Updates", subtitle: "See our recent matters" },
    { title: "Matter Talk", subtitle: "Latest discussions" }
  ];

  return (
    <div className="left-sidebar w-full lg:w-auto bg-white text-gray-800 h-fit flex flex-col  sticky top-0 self-start lg:max-h-screen overflow-y-auto">
      <div className="py-4">
        {/* Main navigation */}
        <nav className="space-y-2 w-[181px] sm:w-[200px]">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.key)}
              className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors border ${
                item.active 
                  ? 'bg-[#779E5A] text-white border-none' 
                  : 'bg-white text-gray-800 border-black hover:bg-gray-50'
              }`}
            >
              <div className="h-5 w-5 mr-3 flex-shrink-0 flex items-center justify-center">{item.icon}</div>
              <span className="text-left flex-1 leading-tight">{item.label}</span>
            </button>
          ))}
        </nav>
        <hr className="my-4 " />
      </div>

      {/* Bottom sections */}
      <div className="bg-white p-2  mt-auto">
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div key={index} className="px-3 py-2.5 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">{section.title}</h3>
              {section.subtitle && (
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{section.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
