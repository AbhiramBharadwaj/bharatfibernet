"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: 2, href: "who-we-are", title: "Who We Are" },
  {
    id: 3,
    href: "what-we-do",
    title: "What We Do",
    children: [
      { id: "what-1", href: "system-integration", title: "System Integration" },
      { id: "what-2", href: "network-services", title: "Network Services" },
      {
        id: "what-3",
        href: "data-center-cloud",
        title: "Data center and cloud services",
      },
      {
        id: "what-4",
        href: "cybersecurity-services",
        title: "Cybersecurity services",
        children: [
          {
            id: "cyber-1",
            href: "firewall-rental-services",
            title: "Firewall Rental Services",
          },
        ],
      },
      {
        id: "what-5",
        href: "internet-leased-lines",
        title: "Internet leased lines",
      },
      { id: "what-7", href: "crm", title: "CRM" },
      {
        id: "what-8",
        href: "gaming-connectivity",
        title: "Gaming Connectivity",
      },
      {
        id: "what-9",
        href: "event-connectivity-solutions",
        title: "Event Connectivity Solutions",
      },
    ],
  },
  { id: 4, href: "knowledge", title: "Knowledge" },
  { id: 5, href: "career", title: "Career" },
  {
    id: 6,
    href: "help-support",
    title: "Help & support",
    children: [
      { id: "help-1", href: "internet-connection", title: "Internet Connection" },
      { id: "help-2", href: "billing-payments", title: "Billing & Payments" },
      { id: "help-3", href: "router-setup-login", title: "Router Setup & Login" },
      {
        id: "help-4",
        href: "account-access-issues",
        title: "Account Access Issues",
      },
      {
        id: "help-5",
        href: "relocation-disconnection",
        title: "Relocation / Disconnection",
      },
    ],
  },
  { id: 7, href: "contact", title: "Contact" },
];
const Header = ({ header }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;
    case 5:
      return <Header5 />;
    case 6:
      return <Header6 />;
    default:
      return <Header6 />;
  }
};
export default Header;

const Menu = ({ menu }) => {
  const menuItems = menu ?? NAV_ITEMS;
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      <ul>
        {menuItems.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          return (
            <li
              key={item.id}
              className={hasChildren ? "has-dropdown" : ""}
            >
              <Link href={item.href}>
                {item.title}
                {hasChildren && <i className="fas fa-angle-down" />}
              </Link>
              {hasChildren && (
                <ul className="submenu">
                  {item.children.map((child) => {
                    const hasNestedChildren = child.children && child.children.length > 0;
                    return (
                      <li key={child.id} className={hasNestedChildren ? "has-dropdown" : ""}>
                        <Link href={child.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>{child.title}</span>
                          {hasNestedChildren && <i className="fas fa-chevron-right" style={{ marginLeft: '8px', fontSize: '0.75em' }} />}
                        </Link>
                        {hasNestedChildren && (
                          <ul className="submenu">
                            {child.children.map((nestedChild) => (
                              <li key={nestedChild.id}>
                                <Link href={nestedChild.href}>{nestedChild.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const MobileMenu = ({ menu }) => {
  const menuItems = menu ?? NAV_ITEMS;
  const [activeMenu, setActiveMenu] = useState("");
  const [activeNestedMenu, setActiveNestedMenu] = useState("");
  const toggleMenu = (value) =>
    setActiveMenu((prev) => (prev === value ? "" : value));
  const toggleNestedMenu = (value) =>
    setActiveNestedMenu((prev) => (prev === value ? "" : value));
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            {menuItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <li
                  key={item.id}
                  className={`${hasChildren ? "has-dropdown" : ""} ${
                    activeMenu === item.id ? "active" : ""
                  }`}
                >
                  <Link href={item.href}>{item.title}</Link>
                  {hasChildren && (
                    <>
                      <ul
                        className="submenu"
                        style={{
                          display: activeMenu === item.id ? "block" : "none",
                        }}
                      >
                        {item.children.map((child) => {
                          const hasNestedChildren = child.children && child.children.length > 0;
                          return (
                            <li key={child.id} className={hasNestedChildren ? "has-dropdown" : ""}>
                              <Link href={child.href}>{child.title}</Link>
                              {hasNestedChildren && (
                                <>
                                  <ul
                                    className="submenu"
                                    style={{
                                      display: activeNestedMenu === child.id ? "block" : "none",
                                      paddingLeft: "20px",
                                    }}
                                  >
                                    {child.children.map((nestedChild) => (
                                      <li key={nestedChild.id}>
                                        <Link href={nestedChild.href}>{nestedChild.title}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                  <a
                                    className="mean-expand"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleNestedMenu(child.id);
                                    }}
                                  >
                                    <i
                                      className={`far ${
                                        activeNestedMenu === child.id ? "fa-minus" : "fa-plus"
                                      }`}
                                    />
                                  </a>
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu(item.id);
                        }}
                      >
                        <i
                          className={`far ${
                            activeMenu === item.id ? "fa-minus" : "fa-plus"
                          }`}
                        />
                      </a>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
                Connecting Andhra Pradesh and Telangana with high-speed fiber internet solutions. 
                From homes to enterprises, we deliver reliable connectivity that powers your digital life.
              </p>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="https://maps.google.com/?q=Jyothi+Flora+Kavuri+Hills+Madhapur+Hyderabad">
                        Jyothi Flora, 4th Floor, Kavuri Hills, Phase 2, Madhapur, Hyderabad, Telangana 500033
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@bharatvoip.com">info@bharatvoip.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mon-Friday, 09am - 06pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+917799906341">+91 7799906341</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    Contact Us
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/BharatFiberNetHyd?rdid=j4wsBerLi992ZsX9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjhF4jETM%2F#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.linkedin.com/company/bharatfibernet/?originalSubdomain=in">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const Header1 = ({ menu }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="header-top-bar">
          <div className="container-fluid">
            <div className="header-top-inner">
              <div className="header-top-left">
                <a className="top-link" href="tel:+917799906341">
                  <i className="fas fa-phone-alt" />
                  Call: +91 7799906341
                </a>
                <a className="top-link" href="mailto:info@bharatvoip.com">
                  <i className="far fa-envelope" />
                  info@bharatvoip.com
                </a>
              </div>
              <div className="header-top-right">
                <a href="https://www.facebook.com/BharatFiberNetHyd?rdid=j4wsBerLi992ZsX9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjhF4jETM%2F#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/company/bharatfibernet/?originalSubdomain=in" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img
                    src="assets/img/logo/logo.png"
                    alt="logo-img"
                    className="logo-1"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="assets/img/logo/logo.png"
                    alt="logo-img"
                    className="logo-2"
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu menu={menu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+00012345688">+91 7799906341</a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        menu={menu}
      />
    </Fragment>
  );
};

const Header2 = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="assets/img/logo/logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
      />
    </Fragment>
  );
};

const Header3 = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="assets/img/logo/logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+00012345688">+91 7799906341</a>
                    </h4>
                  </div>
                </div>
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
      />
    </Fragment>
  );
};

const Header5 = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-6">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/" className="logo-1">
                  <img src="assets/img/logo/logo.png" alt="logo-img" />
                </Link>
                <Link href="/" className="logo-2">
                  <img src="assets/img/logo/logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
      />
    </Fragment>
  );
};

const Header6 = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="assets/img/logo/logo.png" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
      />
    </Fragment>
  );
};
