import DeviceSwitcher from "./DeviceSwitcher";
import Logo from "./Logo";
import NavbarActions from "./NavbarActions";
function Navbar() {
  return (
    <nav className="h-20 bg-slate-950 flex items-center px-6 justify-between">
      <Logo />

      <DeviceSwitcher />

      <NavbarActions />
    </nav>
  );
}

export default Navbar;
