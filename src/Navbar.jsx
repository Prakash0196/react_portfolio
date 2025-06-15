// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// export const Navbar = () => {
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     const initialTheme = saved === "dark" ? "dark" : "light";
//     document.body.dataset.bsTheme = initialTheme;
//     document.documentElement.dataset.theme = initialTheme;
//     return initialTheme;
//   });

//   useEffect(() => {
//     document.body.dataset.bsTheme = theme;
//     document.documentElement.dataset.theme = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleToggle = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg fixed-top text-uppercase pt-2 mx-auto" style={{ display: "flex" }}>
//         <div className="container-fluid">
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div className="form-check form-switch mx-4">
//               <input
//                 className={`form-check-input p-2 ${theme === "light" ? "light-mode" : "dark-mode"}`}
//                 type="checkbox"
//                 role="switch"
//                 id="flexSwitchCheckChecked"
//                 checked={theme === "light"}
//                 onChange={handleToggle}
//                 style={{ width: "45px", height: "25px", cursor: "pointer" }}
//               />
//             </div>
//           </div>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" style={{ cursor: "pointer" }}></span>
//           </button>
//         </div>

//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ textAlign: "center" }}>
          
//           <div className="navbar-nav mx-auto">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
//               } id="nav-item"
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
//               } id="nav-item"
//             >
//               About
//             </NavLink>

//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
//               } id="nav-item"
//             >
//               Services
//             </NavLink>

//             <NavLink
//               to="/project"
//               className={({ isActive }) =>
//                 `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
//               } id="nav-item"
//             >
//               Projects
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
//               } id="nav-item"
//             >
//               Contact
//             </NavLink>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };










import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme = saved === "dark" ? "dark" : "light";
    document.body.dataset.bsTheme = initialTheme;
    document.documentElement.dataset.theme = initialTheme;
    return initialTheme;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.bsTheme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top text-uppercase pt-2 mx-auto" style={{ display: "flex" }}>
        <div className="container-fluid">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="form-check form-switch mx-4">
              <input
                className={`form-check-input p-2 ${theme === "light" ? "light-mode" : "dark-mode"}`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={theme === "light"}
                onChange={handleToggle}
                style={{ width: "45px", height: "25px", cursor: "pointer" }}
              />
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNavAltMarkup"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ cursor: "pointer" }}></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
          id="navbarNavAltMarkup"
          style={{ textAlign: "center" }}
        >
          <div className="navbar-nav mx-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
              }
              id="nav-item"
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
              }
              id="nav-item"
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
              }
              id="nav-item"
              onClick={closeMenu}
            >
              Services
            </NavLink>

            <NavLink
              to="/project"
              className={({ isActive }) =>
                `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
              }
              id="nav-item"
              onClick={closeMenu}
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link px-lg-4 rounded ${isActive ? "active" : ""}`
              }
              id="nav-item"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
