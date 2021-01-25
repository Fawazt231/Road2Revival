import React, {Component} from 'react';
import { Avatar } from 'antd';
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
import ismael from '../assets/ismael.jpg';
import qa from '../assets/QA.jpg';

import salah from '../assets/salah.jpg';
import presentation from '../assets/presentation.jpg';
import quran from '../assets/Quran.jpg';
import registration from '../assets/registration.png';
import conclusion from '../assets/conclusion.jpg';

import {Tabs, Tab} from 'react-bootstrap';
import './program.css';


const images = [
	registration,
	ismael,
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
	registration,
	quran,
	ammar,
	salah,
	omars,
	presentation,
	food, 
	ahmed, 
	salah, 
	ahmed, 
	conclusion
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
	'Welcome',
	'Quran Recitation',
	'Introduction to Conquering From Within',
	'Intentions',
	'Dhuhr Salah',
	'How to Deal with Hardships',
	'Islamic Relief USA Presentation',
	'Break/Lunch',
	'Relationship with Oneself and Allah(SWT)',
	'Asr Salah',
	'Q&A',
	'closing'
]
const events2 = [
	'Welcome',
	'Quran Recitation',
	'Relationships with Family Members, Friends, and Others',
	'Dhuhr Salah',
	'Conquering From Within', 
	'Helping Hand Presentation',
	'Break/Lunch', 
	'Reaching our Final Destination', 
	'Asr Salah', 
	'Q&A', 
	'Closing'
];

const speakers = [
	'',
	'Shaykh Ismael Essa',
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
	
	'',
	'Mashud Hussain',
	'Shaykh Ammar AlShukri',
	'',
	'Dr. Omar Suleiman',
	'', 
	'', 
	'Dr. Ahmed Mohamed',
	'', 
	'with Dr. Ahmed Mohamed',
	''
];

class Program extends React.Component {
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
				<div className="container" style={{ height: 250 }}>
					<img id="gif" alt="example" src={'https://wallpapercave.com/wp/wp3284839.gif'} />
					<div
						className="program"
						style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
					>
						Program
					</div>
					<Tabs defaultActiveKey="dayOne">
            			<Tab eventKey="dayOne" title="Saturday">
                			<div className="tab-item-wrapper">
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
             			 </Tab>

						<Tab eventKey="dayTwo" title="Sunday">
							<div className="tab-item-wrapper">
							<VerticalTimeline layout="1-column">
									{times2.map((time, i) => {
										const event = events2[i];
										const speaker = speakers2[i];
										const image = images2[i];
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
						</Tab>

					</Tabs>
				
							
				</div>
			</div>
		);
	}
}

export default Program;
