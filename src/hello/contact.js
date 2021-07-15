// Hey I am Gauri the cow Mooo Moooooo
import './contact.css'
const Contact = () => {
    return (
    <div className="canvas-whole">
    <div className= "canvas-left-part">
        <img src="./new home.jpeg" className="home-pic"></img>
    </div>
    <div className="canvas-right-part">
        <div className="inside-right">
            <div className="reach-us-at">Reach Us At</div>
            <div className="email-box">
                <div className="email-icon">
                    <img src="./email.jpeg" className="email-icon"></img>
                </div>
                <div className="email-content">aparnagauri07@gmail.com


            </div>
            
        </div>
        <div className="name-box">
            <div className="name-title">Name</div>
            <div className="input-box"></div>
        </div>
        <div className="message-box">
            <div className="name-title">Message</div>
            <div className="input-message-box"></div>
        </div>
        <div className="submit-btn">Submit</div>

    </div>
</div>
</div> 
 );
}
 
export default Contact;