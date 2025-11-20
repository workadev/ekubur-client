import ekuburLogo from "../../assets/images/ekubur-logo.svg";

function UserNavbar() {
  return (
    <nav>
      <div className="py-5">
        <img src={ekuburLogo} alt="ekuburLogo" />
      </div>
    </nav>
  );
}

export default UserNavbar;