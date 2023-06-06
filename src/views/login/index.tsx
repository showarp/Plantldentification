import "./login.scss"
import LoginBG from "../../images/banner.jpg";
import Text from '../text';
import Weather from '../weather';
import Logo from '../logo';
import Identify from '../identify';
import ImageRecognition from '../imageRecognition';
import DragAndDropUploader from '../temp';

const styleLoginBG = {
    backgroundImage: `url(${LoginBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'block',
    opacity: '2'
}
function Login(){
    return (
        <div className="body-box">
            <div className="login-container" style={styleLoginBG}>
                <div className='cover' >
                </div>
            </div>
            <section className="header-box">
                <Logo />
                <Weather />
            </section>
            <section>
                {/* <Identify /> */}
                {/* <ImageRecognition /> */}
                <div className="App">
                    <DragAndDropUploader />
                </div>
            </section>
            <footer>
                <Text />
            </footer>
            
        </div>
    )
}
export default Login;