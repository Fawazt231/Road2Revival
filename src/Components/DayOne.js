import React, {Component} from 'react';
import { Avatar } from 'antd';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Intro.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Montserrat.css';
import Footer from './Footer';
import elMekki from '../assets/elMekki.PNG';
import ahmed from '../assets/DrAhmed.JPG';
import majed from '../assets/majed.jpg';
import ammar from '../assets/ammar.PNG';
import omars from '../assets/omars.JPG';
import kaiser from '../assets/kaiser.jpg';
import yasmin from '../assets/Yasmin.JPG';
import food from '../assets/food.png';

import qa from '../assets/QA.jpg';

import salah from '../assets/salah.jpg';
import presentation from '../assets/presentation.jpg';
import quran from '../assets/Quran.jpg';
import registration from '../assets/registration.png';
import conclusion from '../assets/conclusion.jpg';



const images = [
	registration,
	quran,
	kaiser,
	majed,
	salah, 
	elMekki, 
	presentation,
	food, 
	yasmin,
	salah,
	yasmin, 
	conclusion
];
const images2 =[
	ammar,
	omars,
	presentation,
	ahmed,
	qa,
	conclusion,
	salah
];

const times = [
	'11:00am to 11:20am',
	'11:20am to 11:25am',
	'11:30am to 11:45am',
	'11:50am to 12:30pm',
	'12:40pm to 12:50pm',
	'12:50pm to 1:30pm',
	'1:40pm to 1:50pm',
	'1:50pm to 2:25pm',
	'2:30pm to 3:00pm',
	'3:00pm to 3:10pm',
	'3:10pm to 3:40pm',
	'3:40pm to 3:50pm',
];
const times2 = [
	'11:00am to 11:20am',
	'11:20am to 11:25am',
	'11:30am to 12:10pm',
	'12:20pm to 12:30pm',
	'12:30pm to 1:00pm',
	'1:10pm to 1:20pm',
	'1:25pm to 2:10pm',
	'2:15pm to 2:45pm',
	'2:55pm to 3:05pm',
	'3:05pm to 3:35pm',
	'3:35pm to 3:45pm',
];

const events = [
	'Sign In',
	'Quran Recitation',
	'Introduction to Conquering From Within',
	'Intentions',
	'Dhuhr Prayer',
	'How to Deal with Hardships',
	'Islamic Relief USA Presentation',
	'Break/Lunch',
	'Relationship with Oneself and Allah(SWT)',
	'Asr Salah',
	'Q&A',
	'closing'
]
const events2 = [
	'Presentation',
	'Practical Tips to Purify the Heart',
	'Q&A',
	'Closing Remarks',
	'Ishaa Salah'
];

const speakers = [
	'',
	'Mashhud Hussain',
	'Chaplain Kaiser',
	'Ustadh Majed Mahmoud',
	'',
	'Shaykh Kamal El Mekki',
	'',
	'',
	'Ustadha Yasmin Mogahed',
	'',
	'with Ustadha Yasmin Mogahed',
	''
]
const speakers2 = [
	
	'Dr. Omar Suleiman',
	'',
	'Dr. Ahmed Mohammed',
	'With Dr. Ahmed Mohammed',
	'Arshad Vohra',
	''
];

class DayOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	

	render() {
		//

		return (
			<div>
				<div className="container">
					<div className="container">
						<VerticalTimeline layout="1-column">
							{times.map((time, i) => {
								const event = events[i];
								const speaker = speakers[i];
								const image = images[i];
								let left = -(this.state.width / 10);
								let size = 0;
								if (this.state.width >= 1476) {
									left = -(this.state.width / 10);
									size = 150;
								} else if (this.state.width >= 1270) {
									left = -50;
									size = 100;
								} else if (this.state.width >= 1000) {
									left = -30;
									size = 80;
								} else if (this.state.width >= 700) {
									left = -12;
									size = 70;
								} else if (this.state.width >= 500) {
									left = -12;
									size = 70;
								} else {
									left = -7;
									size = 60;
								}
								return (
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										contentStyle={{ background: 'white', color: 'black' }}
										contentArrowStyle={{ borderRight: '7px solid  black' }}
										date={time}
										icon={<Avatar size={size} src={image} />}
										iconStyle={{
											background: 'white',
											left: left
										}}
									>
										<h2 style={{ fontSize: '26px', fontWeight: 'bold' }}>{event}</h2>
										<p>{speaker}</p>
									</VerticalTimelineElement>
								);
							})}
						</VerticalTimeline>
						<Footer />
					</div>
					
				</div>
			</div>
		);
	}
}

export default DayOne;
