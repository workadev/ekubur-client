import ekuburLogo from "../../assets/images/ekubur-logo.svg";

function UserNavbar() {
  return (
    <nav>
      <div className="py-5">
        <img src={ekuburLogo} alt="ekuburLogo" loading="lazy" decoding="async" />
      </div>
    </nav>
  );
}

export default UserNavbar;
