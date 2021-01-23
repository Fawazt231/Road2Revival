import React from 'react';
import { Button } from 'antd';
import './Intro.css';
import './Montserrat.css';
import Footer from './Footer';
import About from './About';
import spacegif from '../assets/spacetree.gif';
// import { Link } from 'react-router-dom';
 
class Intro extends React.Component {
    state = { visible: false };
 
    showSummer = () => {
        this.setState({
            visible: true
        });
    };
 
    handleSummerOk = (e) => {
        console.log(e);
        this.setState({
            visible: false
        });
    };
 
    handleSummerCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false
        });
    };
 
    render() {
        //
 
        return (
            <div>
                <div className="container" style={{ width: '100%' }}>
                    <img id="gif" alt="example" src={require('../assets/flyer3.png')} />
                </div>
                <div className="container" style={{ width: '100%', height: 300 }}>
                    <img
                        id="gif"
                        alt="example"
						src={ 'https://i.imgur.com/Ko5YwJ8.gif'
						}
                    />
                    <div id="opacity1" style={{ width: '100%', height: '100%', backgroundColor: '#00000050' }} />
 
                    <div
                        className="program"
                        style={{ top: '15%', left: '50%', fontWeight: 900, fontSize: 32, color: 'white' }}
                    >
                        Register Online
                    </div>
                    {/* <div className="program" style={{ top: '45%', left: '50%', width: 200 }}>
                        <Button type="primary" size="large" block>
                            <Link to="/tabling">Purchase in Person</Link>
                        </Button>
                    </div> */}
 
                    <div className="program" style={{ top: '50%', left: '50%', width: 300 }}>
                        <Button type="primary" size="large" block>
                            <a
                                href="https://forms.gle/YW8AyWmUQCAZDLB8A"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click Here to Register
                            </a>
                        </Button>
                    </div>
                </div>
 
                <div className="container">
                    <About />
                </div>
 
                <Footer />
            </div>
        );
    }
}
 
export default Intro;
 

