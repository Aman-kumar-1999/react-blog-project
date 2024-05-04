import { Link } from 'react-router-dom';
import '../css/B404.css'


const B404 = () => {

    return (
        <>
            <h1 style={{color :'#8394'}}>404 Error Page </h1>
            {/* <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p> */}
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link to={'/home'} className="more-link">Visit Our website</Link>
            </div>
        </>
    )

};
export default B404;