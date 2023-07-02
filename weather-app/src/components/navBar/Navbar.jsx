import "./navBar.css";
import aboutPage from "../About/About";
function HeaderNav(){


    return (

        function onClickAbout() {
          // kattintásra a aboutPage jelenjen meg, illetve landing page-kent is
        },

        function onClickSeach() {
          // kattintásra bejön a Search Weather felület  
        },

        function onClickSupport() {
            // kattintásra bejön a Support
        },

        <nav className="navbar">
            <section className="navigation">
                <a href="/" onClick={aboutPage}>About</a>
                <a href="/">Search Weather</a>
                <a href="/">Support</a>
            </section>
         </nav>

    )
}

export default HeaderNav;