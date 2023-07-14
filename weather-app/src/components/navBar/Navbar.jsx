import "./navBar.css";
import About from "../About/About";
function NavBar(props){

  const changePage = props.changePage

  


    return (

    
        <nav className="navbar">
            <section className="navigation">
              <button onClick={ ()=>changePage("About")}>About</button>
              <button onClick={ ()=>changePage("Weather App")}>Weather App</button>
              <button onClick={()=>changePage("Support")}>Support</button>
                
            </section>
         </nav>

    )
}

export default NavBar;