// import React, { useState, useEffect } from 'react';

// // --- Image Imports ---
// // IMPORTANT: Place your images in the 'src/assets/' folder.
// // Then uncomment and update these import paths to your actual image files.
// // Example:
// import profilePic from './assets/profile.JPG';
// import aboutImage from './assets/profile.JPG';

// // Placeholder images for demonstration. Replace with your actual imports.
// // const profilePic = 'https://placehold.co/150x150/1e306e/FFFFFF?text=ZA';
// // const aboutImage = 'https://placehold.co/300x300/2d3748/e2e8f0?text=About+Me';

// // --- Icon SVGs (for self-containment) ---
// // In a real React app, you would install 'lucide-react' and import these:
// // import { Home, User, Code, Briefcase, Mail, Menu, X, Linkedin, Github, Sun, Moon, ArrowRight } from 'lucide-react';
// const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
// const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
// const CodeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
// const BriefcaseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 12h.01"/></svg>);
// const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
// const MenuIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>);
// const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
// const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
// const GithubIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.1.47-2.3 1-3.5a13.39 13.39 0 0 0 .7-2c0-1.06-.5-1.06-1-1.5-1.4-.2-2.8-.2-4 0-1-.5-2-1-3-1.5-.5-.5-1-.5-1.5-.5-1.5 0-3 .5-4.5 1-1.2.5-2.5 1-3.5 1.5-1 .5-1.5.5-1.5 1.5-.5 1.2-.2 2.4 0 3.5.5 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-2.5 0-5-1.25-5-2.5s2.5-2.5 5-2.5 5 1.25 5 2.5-2.5 2.5-5 2.5z"/></svg>);
// const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>);
// const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>);
// const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);

// // Main App component
// const App = () => {
//     const [activeSection, setActiveSection] = useState('home');
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     // State for dark mode
//     const [isDarkMode, setIsDarkMode] = useState(() => {
//         // Initialize dark mode from localStorage or system preference
//         if (typeof window !== 'undefined') {
//             const savedMode = localStorage.getItem('theme');
//             if (savedMode) {
//                 return savedMode === 'dark';
//             }
//             return window.matchMedia('(prefers-color-scheme: dark)').matches;
//         }
//         return false;
//     });

//     // Effect to apply dark mode class to HTML element
//     useEffect(() => {
//         if (isDarkMode) {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('theme', 'light');
//         }
//     }, [isDarkMode]);

//     const toggleDarkMode = () => {
//         setIsDarkMode(prevMode => !prevMode);
//     };

//     const navigateTo = (section) => {
//         setActiveSection(section);
//         setIsMobileMenuOpen(false);
//         document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//     };

//     // Dark Mode Toggle Button Component
//     const DarkModeToggle = () => (
//         <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             aria-label="Toggle dark mode"
//         >
//             {isDarkMode ? <SunIcon /> : <MoonIcon />}
//         </button>
//     );

//     // Navigation component
//     const Navbar = () => (
//         <nav className="bg-primary-900 dark:bg-darkcard p-4 shadow-xl fixed w-full z-10 top-0 transition-colors duration-300">
//             <div className="container mx-auto flex justify-between items-center">
//                 <a href="#home" className="text-white text-3xl font-extrabold tracking-wide transition-colors duration-300 hover:text-secondary-300">Zeeshan Ahmad</a>
//                 {/* Desktop Navigation */}
//                 <div className="hidden md:flex items-center space-x-8">
//                     <NavItem icon={<HomeIcon />} text="Home" section="home" />
//                     <NavItem icon={<UserIcon />} text="About" section="about" />
//                     <NavItem icon={<CodeIcon />} text="Skills" section="skills" />
//                     <NavItem icon={<BriefcaseIcon />} text="Projects" section="projects" />
//                     <NavItem icon={<MailIcon />} text="Contact" section="contact" />
//                     <DarkModeToggle />
//                 </div>
//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden flex items-center space-x-4">
//                     <DarkModeToggle />
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-primary-700 transition-colors duration-300">
//                         {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
//                     </button>
//                 </div>
//             </div>
//             {/* Mobile Navigation */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden bg-primary-800 dark:bg-darkcard py-4 mt-4 rounded-b-lg shadow-lg transition-colors duration-300">
//                     <NavItem icon={<HomeIcon />} text="Home" section="home" isMobile />
//                     <NavItem icon={<UserIcon />} text="About" section="about" isMobile />
//                     <NavItem icon={<CodeIcon />} text="Skills" section="skills" isMobile />
//                     <NavItem icon={<BriefcaseIcon />} text="Projects" section="projects" isMobile />
//                     <NavItem icon={<MailIcon />} text="Contact" section="contact" isMobile />
//                 </div>
//             )}
//         </nav>
//     );

//     // Navigation Item component
//     const NavItem = ({ icon, text, section, isMobile = false }) => (
//         <button
//             onClick={() => navigateTo(section)}
//             className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out
//             ${activeSection === section ? 'bg-primary-700 text-white shadow-md' : 'text-primary-200 hover:bg-primary-700 hover:text-white hover:shadow-md'}
//             ${isMobile ? 'w-full justify-center text-lg mb-2' : 'text-lg font-medium'}`}
//         >
//             {icon}
//             <span>{text}</span>
//         </button>
//     );

//     // Hero Section
//     const HeroSection = () => (
//         <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-gray-900 dark:from-darkbg dark:to-gray-950 text-white text-center p-8 pt-20 transition-colors duration-300">
//             <div className="max-w-5xl mx-auto animate-fade-in-up"> {/* Add custom animation class */}
//                 <img
//                     src={profilePic} // Using imported image
//                     alt="Zeeshan Ahmad"
//                     className="rounded-full w-40 h-40 mx-auto mb-8 border-6 border-secondary-500 shadow-2xl object-cover transition-transform duration-300 hover:scale-105"
//                 />
//                 <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight drop-shadow-lg">
//                     Zeeshan Ahmad
//                 </h1>
//                 <p className="text-3xl md:text-4xl font-semibold text-secondary-300 mb-10 drop-shadow-md">
//                     Cybersecurity Analyst & Network Engineer
//                 </p>
//                 <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto opacity-90">
//                     Passionate about securing digital landscapes and optimizing network infrastructures.
//                     Bringing robust solutions to complex challenges in the realm of information security.
//                 </p>
//                 <button
//                     onClick={() => navigateTo('contact')}
//                     className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300 text-lg"
//                 >
//                     Get In Touch
//                 </button>
//             </div>
//         </section>
//     );

//     // About Section
//     const AboutSection = () => (
//         <section id="about" className="py-20 bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-5xl font-bold text-center mb-16 text-primary-700 dark:text-primary-400">About Me</h2>
//                 <div className="flex flex-col md:flex-row items-center md:space-x-12">
//                     <div className="md:w-1/3 mb-10 md:mb-0 transform transition-transform duration-500 hover:scale-105">
//                         <img
//                             src={aboutImage} // Using imported image
//                             alt="About Zeeshan"
//                             className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-primary-300 dark:border-primary-700"
//                         />
//                     </div>
//                     <div className="md:w-2/3 text-xl leading-relaxed">
//                         <p className="mb-8">
//                             Hello! I'm Zeeshan Ahmad, a dedicated Cybersecurity Analyst and Network Engineer with a strong passion for safeguarding digital assets and building resilient network infrastructures. My journey in technology has equipped me with a comprehensive understanding of both offensive and defensive security strategies, alongside the intricacies of network design and management.
//                         </p>
//                         <p className="mb-8">
//                             I specialize in identifying vulnerabilities, implementing robust security protocols, and responding to cyber threats. My expertise extends to network architecture, configuration, and troubleshooting, ensuring seamless and secure data flow. I thrive on challenges and am constantly exploring new technologies to enhance my skills and contribute to a more secure digital world.
//                         </p>
//                         <p>
//                             Beyond the technical aspects, I am a firm believer in continuous learning and knowledge sharing. I'm eager to collaborate on innovative projects and contribute my expertise to organizations committed to excellence in cybersecurity and networking.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );

//     // Skills Section
//     const SkillsSection = () => (
//         <section id="skills" className="py-20 bg-white dark:bg-darkcard text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-5xl font-bold text-center mb-16 text-primary-700 dark:text-primary-400">My Skills</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     <SkillCard title="Cybersecurity" skills={["Penetration Testing", "Vulnerability Assessment", "Incident Response", "SIEM", "Firewall Configuration", "Threat Intelligence", "Security Audits"]} />
//                     <SkillCard title="Network Engineering" skills={["Network Design", "Routing & Switching (Cisco, Juniper)", "TCP/IP", "VPNs", "Wireless Networking", "Network Troubleshooting", "Load Balancing"]} />
//                     <SkillCard title="Tools & Technologies" skills={["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Kali Linux", "Splunk", "Active Directory", "Virtualization (VMware, VirtualBox)"]} />
//                     <SkillCard title="Programming & Scripting" skills={["Python", "Bash Scripting", "PowerShell", "JavaScript (Basic)"]} />
//                     <SkillCard title="Operating Systems" skills={["Linux (Ubuntu, CentOS)", "Windows Server", "macOS"]} />
//                     <SkillCard title="Cloud Security (Basic)" skills={["AWS Security", "Azure Security", "Cloud Access Security Brokers (CASB)"]} />
//                 </div>
//             </div>
//         </section>
//     );

//     // Skill Card component
//     const SkillCard = ({ title, skills }) => (
//         <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600">
//             <h3 className="text-3xl font-semibold text-primary-700 dark:text-primary-300 mb-6 text-center">{title}</h3>
//             <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
//                 {skills.map((skill, index) => (
//                     <li key={index} className="flex items-center">
//                         <span className="text-secondary-500 dark:text-secondary-400 mr-3 text-xl">•</span> {skill}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );

//     // Projects Section
//     const ProjectsSection = () => {
//         const [generatedProjectIdea, setGeneratedProjectIdea] = useState(null);
//         const [showProjectIdeaModal, setShowProjectIdeaModal] = useState(false);
//         const [isLoadingIdea, setIsLoadingIdea] = useState(false);
//         const [error, setError] = useState(null);

//         // Function to fetch a new project idea from Gemini API
//         const fetchProjectIdea = async () => {
//             setIsLoadingIdea(true);
//             setGeneratedProjectIdea(null);
//             setError(null);

//             const prompt = "As a highly experienced cybersecurity analyst and network engineer, suggest an innovative and practical project idea that combines both cybersecurity and network engineering principles. The idea should be suitable for a portfolio and demonstrate advanced skills. Provide only the project title and a brief, concise description (max 3 sentences). Format the response as: 'Title: [Project Title]\nDescription: [Project Description]'";

//             let chatHistory = [];
//             chatHistory.push({ role: "user", parts: [{ text: prompt }] });
//             const payload = { contents: chatHistory };
//             const apiKey = ""; // Leave as empty string; Canvas will provide it at runtime
//             const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

//             try {
//                 const response = await fetch(apiUrl, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(payload)
//                 });

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const result = await response.json();

//                 if (result.candidates && result.candidates.length > 0 &&
//                     result.candidates[0].content && result.candidates[0].content.parts &&
//                     result.candidates[0].content.parts.length > 0) {
//                     const text = result.candidates[0].content.parts[0].text;
//                     // Parse the response text into title and description
//                     const titleMatch = text.match(/Title: (.+)/);
//                     const descriptionMatch = text.match(/Description: (.+)/s); // 's' flag for dotall to match newlines

//                     const title = titleMatch ? titleMatch[1].trim() : "No Title Found";
//                     const description = descriptionMatch ? descriptionMatch[1].trim() : "No Description Found";

//                     setGeneratedProjectIdea({ title, description });
//                     setShowProjectIdeaModal(true); // Show the modal
//                 } else {
//                     setError("Could not generate a project idea. Please try again.");
//                 }
//             } catch (e) {
//                 console.error("Error fetching project idea:", e);
//                 setError("Failed to fetch project idea. Network error or API issue.");
//             } finally {
//                 setIsLoadingIdea(false);
//             }
//         };

//         // Custom Modal component for Tailwind CSS
//         const ProjectIdeaModal = ({ show, onClose, idea, loading, error }) => {
//             if (!show) return null;

//             return (
//                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
//                     <div className="bg-white dark:bg-darkcard rounded-2xl shadow-2xl max-w-md w-full p-8 relative transition-colors duration-300">
//                         <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
//                             <h3 className="text-3xl font-bold text-primary-700 dark:text-primary-400">✨ New Project Idea</h3>
//                             <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
//                                 <XIcon />
//                             </button>
//                         </div>
//                         <div className="py-4">
//                             {loading && <p className="text-center text-lg text-gray-700 dark:text-gray-300">Generating a brilliant idea...</p>}
//                             {error && <p className="text-center text-lg text-accent-500">{error}</p>}
//                             {idea && !loading && (
//                                 <>
//                                     <h4 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-3">{idea.title}</h4>
//                                     <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{idea.description}</p>
//                                 </>
//                             )}
//                         </div>
//                         <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-right mt-4">
//                             <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500">
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             );
//         };


//         return (
//             <section id="projects" className="py-20 bg-gray-100 dark:bg-darkbg text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
//                 <div className="container mx-auto max-w-5xl">
//                     <h2 className="text-5xl font-bold text-center mb-16 text-primary-700 dark:text-primary-400">My Projects</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                         <ProjectCard
//                             title="Network Security Audit Tool"
//                             description="Developed a Python-based tool to automate network security audits, scanning for common vulnerabilities and misconfigurations."
//                             link="#" // Replace with actual project link
//                         />
//                         <ProjectCard
//                             title="Incident Response Playbook"
//                             description="Created a comprehensive incident response playbook for common cyber threats, outlining steps for detection, containment, eradication, and recovery."
//                             link="#" // Replace with actual project link
//                         />
//                         <ProjectCard
//                             title="Home Lab Network Setup"
//                             description="Designed and implemented a secure home lab network with VLANs, firewall rules, and VPN access for personal learning and experimentation."
//                             link="#" // Replace with actual project link
//                         />
//                         <ProjectCard
//                             title="Automated Log Analysis Script"
//                             description="A Bash script to parse and analyze system logs for suspicious activities, generating alerts for predefined patterns."
//                             link="#" // Replace with actual project link
//                         />
//                     </div>
//                     <div className="text-center mt-12">
//                         <button
//                             onClick={fetchProjectIdea}
//                             className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 text-lg"
//                             disabled={isLoadingIdea}
//                         >
//                             {isLoadingIdea ? 'Generating...' : '✨ Generate New Project Idea'}
//                         </button>
//                     </div>
//                     <p className="text-center text-xl mt-16 text-gray-600 dark:text-gray-400">
//                         More projects coming soon! Check back for updates.
//                     </p>
//                 </div>
//                 <ProjectIdeaModal
//                     show={showProjectIdeaModal}
//                     onClose={() => setShowProjectIdeaModal(false)}
//                     idea={generatedProjectIdea}
//                     loading={isLoadingIdea}
//                     error={error}
//                 />
//             </section>
//         );
//     };

//     // Project Card component
//     const ProjectCard = ({ title, description, link }) => (
//         <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600">
//             <h3 className="text-3xl font-semibold text-primary-700 dark:text-primary-300 mb-4">{title}</h3>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
//             <a
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-200 font-medium transition-colors duration-200 text-lg"
//             >
//                 View Project
//                 <ArrowRightIcon />
//             </a>
//         </div>
//     );

//     // Contact Section
//     const ContactSection = () => (
//         <section id="contact" className="py-20 bg-white dark:bg-darkcard text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
//             <div className="container mx-auto max-w-3xl">
//                 <h2 className="text-5xl font-bold text-center mb-16 text-primary-700 dark:text-primary-400">Get In Touch</h2>
//                 <p className="text-center text-xl mb-10">
//                     I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
//                 </p>
//                 <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600">
//                     <form className="space-y-8">
//                         <div>
//                             <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 className="mt-1 block w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white text-lg"
//                                 placeholder="Your Name"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="mt-1 block w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white text-lg"
//                                 placeholder="your.email@example.com"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 rows="6"
//                                 className="mt-1 block w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white text-lg"
//                                 placeholder="Your message..."
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 text-xl"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                     <div className="mt-12 text-center text-gray-700 dark:text-gray-300">
//                         <p className="mb-4 text-xl">You can also find me on:</p>
//                         <div className="flex justify-center space-x-8">
//                             {/* Replace # with your actual social media links */}
//                             <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200 transform hover:scale-110">
//                                 <LinkedinIcon />
//                             </a>
//                             <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200 transform hover:scale-110">
//                                 <GithubIcon />
//                             </a>
//                             <a href="mailto:your.email@example.com" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200 transform hover:scale-110">
//                                 <MailIcon />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );

//     // Footer component
//     const Footer = () => (
//         <footer className="bg-primary-900 dark:bg-darkcard text-white py-8 text-center text-md shadow-inner transition-colors duration-300">
//             <div className="container mx-auto">
//                 &copy; {new Date().getFullYear()} Zeeshan Ahmad. All rights reserved.
//             </div>
//         </footer>
//     );

//     // Main App render
//     return (
//         <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-darkbg transition-colors duration-300">
//             <Navbar />
//             <main className="flex-grow pt-20"> {/* Adjusted padding-top for fixed header */}
//                 {(() => {
//                     switch (activeSection) {
//                         case 'home':
//                             return <HeroSection />;
//                         case 'about':
//                             return <AboutSection />;
//                         case 'skills':
//                             return <SkillsSection />;
//                         case 'projects':
//                             return <ProjectsSection />;
//                         case 'contact':
//                             return <ContactSection />;
//                         default:
//                             return <HeroSection />;
//                     }
//                 })()}
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default App;
import React, { useState, useEffect } from 'react';

// --- Image Imports ---
// IMPORTANT: Place your images in the 'src/assets/' folder.
// Then UNCOMMENT and UPDATE these import paths to your actual image files.
 
import profilePic from './assets/profile.JPG';
import aboutImage from './assets/profile.JPG';

// --- Icon SVGs (for self-containment) ---
// In a real React app, you would install 'lucide-react' and import these:
// import { Home, User, Code, Briefcase, Mail, Menu, X, Linkedin, Github, Sun, Moon, ArrowRight } from 'lucide-react';
const HomeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const CodeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const BriefcaseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 12h.01"/></svg>);
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const MenuIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>);
const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
const LinkedinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const GithubIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.1.47-2.3 1-3.5a13.39 13.39 0 0 0 .7-2c0-1.06-.5-1.06-1-1.5-1.4-.2-2.8-.2-4 0-1-.5-2-1-3-1.5-.5-.5-1-.5-1.5-.5-1.5 0-3 .5-4.5 1-1.2.5-2.5 1-3.5 1.5-1 .5-1.5.5-1.5 1.5-.5 1.2-.2 2.4 0 3.5.5 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-2.5 0-5-1.25-5-2.5s2.5-2.5 5-2.5 5 1.25 5 2.5-2.5 2.5-5 2.5z"/></svg>);
const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>);
const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>);
const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);

// Main App component
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State for dark mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize dark mode from localStorage or system preference
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('theme');
            if (savedMode) {
                return savedMode === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    // Effect to apply dark mode class to HTML element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const navigateTo = (section) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Dark Mode Toggle Button Component
    const DarkModeToggle = () => (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );

    // Navigation component
    const Navbar = () => (
        <nav className="bg-primary-900 dark:bg-darkcard p-4 shadow-xl fixed w-full z-10 top-0 transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" className="text-white text-3xl font-extrabold tracking-wide transition-colors duration-300 text-lime-400 hover:text-secondary-300">Zeeshan Ahmad</a>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavItem icon={<HomeIcon />} text="Home" section="home" />
                    <NavItem icon={<UserIcon />} text="About" section="about" />
                    <NavItem icon={<CodeIcon />} text="Skills" section="skills" />
                    <NavItem icon={<BriefcaseIcon />} text="Projects" section="projects" />
                    <NavItem icon={<MailIcon />} text="Contact" section="contact" />
                    <DarkModeToggle />
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <DarkModeToggle />
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-primary-700 transition-colors duration-300">
                        {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-primary-800 dark:bg-darkcard py-4 mt-4 rounded-b-lg shadow-lg transition-colors duration-300">
                    <NavItem icon={<HomeIcon />} text="Home" section="home" isMobile />
                    <NavItem icon={<UserIcon />} text="About" section="about" isMobile />
                    <NavItem icon={<CodeIcon />} text="Skills" section="skills" isMobile />
                    <NavItem icon={<BriefcaseIcon />} text="Projects" section="projects" isMobile />
                    <NavItem icon={<MailIcon />} text="Contact" section="contact" isMobile />
                </div>
            )}
        </nav>
    );

    // Navigation Item component
    const NavItem = ({ icon, text, section, isMobile = false }) => (
        <button
            onClick={() => navigateTo(section)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ease-in-out
            ${activeSection === section ? 'bg-primary-700 text-white shadow-md' : 'text-primary-200 hover:bg-primary-700 hover:text-white hover:shadow-md'}
            ${isMobile ? 'w-full justify-center text-lg mb-2' : 'text-lg font-medium'}`}
        >
            {icon}
            <span>{text}</span>
        </button>
    );

    // Hero Section
    const HeroSection = () => (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-gray-900 dark:from-darkbg dark:to-gray-950 text-white text-center p-8 pt-20 transition-colors duration-300">
            <div className="max-w-5xl mx-auto animate-slide-in-up"> {/* Applied slide-in-up animation */}
                <img
                    src={profilePic} // Using imported image
                    alt="Zeeshan Ahmad"
                    className="rounded-full w-40 h-40 mx-auto mb-8 border-6 border-secondary-500 shadow-2xl object-cover transition-transform duration-300 hover:scale-105 animate-scale-in animate-delay-200" // Added scale-in animation
                />
                <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight drop-shadow-lg gradient-text-gold-orange"> {/* Multi-color heading */}
                    Zeeshan Ahmad
                </h1>
                <p className="text-3xl md:text-4xl font-semibold text-violet-900 mb-10 drop-shadow-md animate-fade-in animate-delay-300"> {/* Fade-in animation */}
                    Cybersecurity Analyst & Network Engineer
                </p>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto opacity-90 animate-fade-in animate-delay-400"> {/* Fade-in animation */}
                    Passionate about securing digital landscapes and optimizing network infrastructures.
                    Bringing robust solutions to complex challenges in the realm of information security.
                </p>
                <button
                    onClick={() => navigateTo('contact')}
                    className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300 text-lg animate-slide-in-up animate-delay-500 animate-pulse-glow" // Added slide-in-up and pulse-glow
                >
                    Get In Touch
                </button>
            </div>
        </section>
    );

    // About Section
    const AboutSection = () => (
        <section id="about" className="py-20 bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
            <div className="container mx-auto max-w-5xl animate-fade-in"> {/* Fade-in animation for section */}
                <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 dark:text-amber-200"> {/* Multi-color heading */}
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="md:w-1/3 mb-10 md:mb-0 transform transition-transform duration-500 hover:scale-105 animate-scale-in"> {/* Scale-in animation */}
                        <img
                            src={aboutImage} // Using imported image
                            alt="About Zeeshan"
                            className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-primary-300 dark:border-primary-700"
                        />
                    </div>
                    <div className="md:w-2/3 text-xl leading-relaxed animate-slide-in-up animate-delay-200"> {/* Slide-in-up animation */}
                        <p className="mb-8">
                            Hello! I'm Zeeshan Ahmad, a dedicated Cybersecurity Analyst and Network Engineer with a strong passion for safeguarding digital assets and building resilient network infrastructures. My journey in technology has equipped me with a comprehensive understanding of both offensive and defensive security strategies, alongside the intricacies of network design and management.
                        </p>
                        <p className="mb-8">
                            I specialize in identifying vulnerabilities, implementing robust security protocols, and responding to cyber threats. My expertise extends to network architecture, configuration, and troubleshooting, ensuring seamless and secure data flow. I thrive on challenges and are constantly exploring new technologies to enhance my skills and contribute to a more secure digital world.
                        </p>
                        <p>
                            Beyond the technical aspects, I am a firm believer in continuous learning and knowledge sharing. I'm eager to collaborate on innovative projects and contribute my expertise to organizations committed to excellence in cybersecurity and networking.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

    // Skills Section
    const SkillsSection = () => (
        <section id="skills" className="py-20 bg-white dark:bg-darkcard text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
            <div className="container mx-auto max-w-5xl animate-fade-in"> {/* Fade-in animation for section */}
                <h2 className="text-5xl font-bold text-center mb-16 gradient-text-gold-orange"> {/* Multi-color heading */}
                    My Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <SkillCard title="Cybersecurity" skills={["Penetration Testing", "Vulnerability Assessment", "Incident Response", "SIEM", "Firewall Configuration", "Threat Intelligence", "Security Audits"]} />
                    <SkillCard title="Network Engineering" skills={["Network Design", "Routing & Switching (Cisco, Juniper)", "TCP/IP", "VPNs", "Wireless Networking", "Network Troubleshooting", "Load Balancing"]} />
                    <SkillCard title="Tools & Technologies" skills={["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Kali Linux", "Splunk", "Active Directory", "Virtualization (VMware, VirtualBox)"]} />
                    <SkillCard title="Programming & Scripting" skills={["Python", "Bash Scripting", "PowerShell", "JavaScript (Basic)"]} />
                    <SkillCard title="Operating Systems" skills={["Linux (Ubuntu, CentOS)", "Windows Server", "macOS"]} />
                    <SkillCard title="Cloud Security (Basic)" skills={["AWS Security", "Azure Security", "Cloud Access Security Brokers (CASB)"]} />
                </div>
            </div>
        </section>
    );

    // Skill Card component
    const SkillCard = ({ title, skills }) => (
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-slide-in-up animate-delay-100"> {/* Added slide-in-up animation */}
            <h3 className="text-3xl font-semibold text-primary-700 dark:text-primary-300 mb-6 text-center">{title}</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-secondary-500 dark:text-secondary-400 mr-3 text-xl">•</span> {skill}
                    </li>
                ))}
            </ul>
        </div>
    );

    // Projects Section
    const ProjectsSection = () => {
        const [generatedProjectIdea, setGeneratedProjectIdea] = useState(null);
        const [showProjectIdeaModal, setShowProjectIdeaModal] = useState(false);
        const [isLoadingIdea, setIsLoadingIdea] = useState(false);
        const [error, setError] = useState(null);

        // Function to fetch a new project idea from Gemini API
        const fetchProjectIdea = async () => {
            setIsLoadingIdea(true);
            setGeneratedProjectIdea(null);
            setError(null);

            const prompt = "As a highly experienced cybersecurity analyst and network engineer, suggest an innovative and practical project idea that combines both cybersecurity and network engineering principles. The idea should be suitable for a portfolio and demonstrate advanced skills. Provide only the project title and a brief, concise description (max 3 sentences). Format the response as: 'Title: [Project Title]\nDescription: [Project Description]'";

            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; // Leave as empty string; Canvas will provide it at runtime
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    // Parse the response text into title and description
                    const titleMatch = text.match(/Title: (.+)/);
                    const descriptionMatch = text.match(/Description: (.+)/s); // 's' flag for dotall to match newlines

                    const title = titleMatch ? titleMatch[1].trim() : "No Title Found";
                    const description = descriptionMatch ? descriptionMatch[1].trim() : "No Description Found";

                    setGeneratedProjectIdea({ title, description });
                    setShowProjectIdeaModal(true); // Show the modal
                } else {
                    setError("Could not generate a project idea. Please try again.");
                }
            } catch (e) {
                console.error("Error fetching project idea:", e);
                setError("Failed to fetch project idea. Network error or API issue.");
            } finally {
                setIsLoadingIdea(false);
            }
        };

        // Custom Modal component for Tailwind CSS
        const ProjectIdeaModal = ({ show, onClose, idea, loading, error }) => {
            if (!show) return null;

            return (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"> {/* Fade-in for modal */}
                    <div className="bg-white dark:bg-darkcard rounded-2xl shadow-2xl max-w-md w-full p-8 relative transition-colors duration-300 animate-scale-in"> {/* Scale-in for modal content */}
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
                            <h3 className="text-3xl font-bold text-primary-700 dark:text-primary-400">✨ New Project Idea</h3>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                                <XIcon />
                            </button>
                        </div>
                        <div className="py-4">
                            {loading && <p className="text-center text-lg text-gray-700 dark:text-gray-300">Generating a brilliant idea...</p>}
                            {error && <p className="text-center text-lg text-accent-500">{error}</p>}
                            {idea && !loading && (
                                <>
                                    <h4 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-3">{idea.title}</h4>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{idea.description}</p>
                                </>
                            )}
                        </div>
                        <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-right mt-4">
                            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            );
        };


        return (
            <section id="projects" className="py-20 bg-gray-100 dark:bg-darkbg text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
                <div className="container mx-auto max-w-5xl animate-fade-in"> {/* Fade-in animation for section */}
                    <h2 className="text-5xl font-bold text-center mb-16 text-dark dark:text-white"> {/* Multi-color heading */}
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <ProjectCard
                            title="Network Security Audit Tool"
                            description="Developed a Python-based tool to automate network security audits, scanning for common vulnerabilities and misconfigurations."
                            link="#" // Replace with actual project link
                        />
                        <ProjectCard
                            title="Incident Response Playbook"
                            description="Created a comprehensive incident response playbook for common cyber threats, outlining steps for detection, containment, eradication, and recovery."
                            link="#" // Replace with actual project link
                        />
                        <ProjectCard
                            title="Home Lab Network Setup"
                            description="Designed and implemented a secure home lab network with VLANs, firewall rules, and VPN access for personal learning and experimentation."
                            link="#" // Replace with actual project link
                        />
                        <ProjectCard
                            title="Automated Log Analysis Script"
                            description="A Bash script to parse and analyze system logs for suspicious activities, generating alerts for predefined patterns."
                            link="#" // Replace with actual project link
                        />
                    </div>
                    <div className="text-center mt-12">
                        <button
                            onClick={fetchProjectIdea}
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 text-lg animate-pulse-glow" // Added pulse-glow animation
                            disabled={isLoadingIdea}
                        >
                            {isLoadingIdea ? 'Generating...' : '✨ Generate New Project Idea'}
                        </button>
                    </div>
                    <p className="text-center text-xl mt-16 text-gray-600 dark:text-gray-400">
                        More projects coming soon! Check back for updates.
                    </p>
                </div>
                <ProjectIdeaModal
                    show={showProjectIdeaModal}
                    onClose={() => setShowProjectIdeaModal(false)}
                    idea={generatedProjectIdea}
                    loading={isLoadingIdea}
                    error={error}
                />
            </section>
        );
    };

    // Project Card component
    const ProjectCard = ({ title, description, link }) => (
        <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-600 animate-slide-in-up animate-delay-100"> {/* Added slide-in-up animation */}
            <h3 className="text-3xl font-semibold text-primary-700 dark:text-primary-300 mb-4">{title}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary-600 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-200 font-medium transition-colors duration-200 text-lg"
            >
                View Project
                <ArrowRightIcon />
            </a>
        </div>
    );

    // Contact Section
    const ContactSection = () => (
        <section id="contact" className="py-20 bg-white dark:bg-darkcard text-gray-800 dark:text-darktext p-8 pt-20 transition-colors duration-300">
            <div className="container mx-auto max-w-3xl animate-fade-in"> {/* Fade-in animation for section */}
                <h2 className="text-5xl font-bold text-center mb-16 gradient-text-purple-teal"> {/* Multi-color heading */}
                    Get In Touch
                </h2>
                <p className="text-center text-xl mb-10">
                    I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 animate-slide-in-up animate-delay-200"> {/* Slide-in-up animation */}
                    <form className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white text-lg"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white text-lg"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="mt-1 block w-full px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:text-white text-lg"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 text-xl animate-pulse-glow" // Added pulse-glow
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mt-12 text-center text-gray-700 dark:text-gray-300">
                        <p className="mb-4 text-xl">You can also find me on:</p>
                        <div className="flex justify-center space-x-8">
                            {/* Replace # with your actual social media links */}
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200 transform hover:scale-110">
                                <LinkedinIcon />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200 transform hover:scale-110">
                                <GithubIcon />
                            </a>
                            <a href="mailto:your.email@example.com" className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors duration-200 transform hover:scale-110">
                                <MailIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // Footer component
    const Footer = () => (
        <footer className="bg-primary-900 dark:bg-darkcard text-white py-8 text-center text-md shadow-inner transition-colors duration-300">
            <div className="container mx-auto">
                &copy; {new Date().getFullYear()} Zeeshan Ahmad. All rights reserved.
            </div>
        </footer>
    );

    // Main App render
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-darkbg transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-20"> {/* Adjusted padding-top for fixed header */}
                {(() => {
                    switch (activeSection) {
                        case 'home':
                            return <HeroSection />;
                        case 'about':
                            return <AboutSection />;
                        case 'skills':
                            return <SkillsSection />;
                        case 'projects':
                            return <ProjectsSection />;
                        case 'contact':
                            return <ContactSection />;
                        default:
                            return <HeroSection />;
                    }
                })()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
