import './weather.scss';
import area from '../../images/weizhi.png';
import Weatherimg from '../../images/yin.png';
const stylearea = {
    backgroundImage: `url(${area})`,
    display: 'inline-block',
}
const styleWeatherimg = {
    backgroundImage: `url(${Weatherimg})`,
    display: 'block'

}

function Weather() {
    return (
        <div className="Weather-box">
            <header>
                <div>
                    <div className='inline-block'>南海区</div>
                    <div className="Weather" style={stylearea}></div>
                </div>
                <div>
                    <div style={styleWeatherimg} className='Weatherimg'></div>
    
                </div>
            </header>
            <footer>
                <div className="weatherFooterBox">
                    <div style={styleWeatherimg} className='Weatherimg'></div>

                </div>
                
                
            </footer>
        </div>
    )
}





export default Weather;