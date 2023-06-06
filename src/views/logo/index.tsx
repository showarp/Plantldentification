import "./logo.scss";
import Logoimg from '../../images/logo.png';

const styleLogoimg = {
    backgroundImage: `url(${Logoimg})`,
    display: 'inline-block',
}
function Logo() {
    return (
        <div className="logo-box" >
            <div style={styleLogoimg} className="logo"></div>
            <div className="logo-text">花开富贵 | 植物表型特征识别</div>
        </div>
    )
}
export default Logo;