export default function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light container-fluid position-fixed">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
    </nav>
  );
}
