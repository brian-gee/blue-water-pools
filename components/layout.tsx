import Nav from "./navBar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
