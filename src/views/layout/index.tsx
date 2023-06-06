import {Outlet, Link} from 'react-router-dom';
import "./layout.scss";
import Aside from './aside';
function Layout(){
    return(
        <section id="container">
            
            <aside>
                <Aside />
            </aside>
            <section>
                <header>header</header>
                <main><Outlet /></main>
            </section>
        </section>
    )
}

export default Layout;