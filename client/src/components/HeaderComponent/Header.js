//Header.js;
import "../../scss/grids.scss";
import "./Header.scss";

export default function Header({ title }) {
  return (
    <>
      <div className="main-grid_header header">{title}</div>
    </>
  );
}
