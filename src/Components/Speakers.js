import React from 'react';
import { Avatar } from 'antd';
import './About.css';
import elMekki from '../assets/elMekki.PNG';
import dradhmed from '../assets/DrAhmed.JPG';
import majed from '../assets/majed.jpg';
import omars from '../assets/omars.JPG';
import yasmin from '../assets/Yasmin.JPG';
import kaiser from '../assets/kaiser.jpg';
import ammar from '../assets/ammar.PNG';

import { bioElmekki, bioYasmin, bioAlShukri, bioMajed, bioOmar, bioKaiser, bioAhemd } from '../bios';

import './Montserrat.css';

class About extends React.Component {
	render() {
		return (
			<div>
				<Avatar size={150} src={majed} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Ustadh Majed Mahmoud</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Al-Maghrib Institute Instructor</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioMajed}
				</div>
				<Avatar size={150} src={elMekki} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Shaykh Kamal El Mekki</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Instructor/Specialist in Seerah and Dawah</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioElmekki}
				</div>
				<Avatar size={150} src={yasmin} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Ustadha Yasmin Mogahed</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Author and International Speaker</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioYasmin}
				</div>
				<Avatar size={150} src={kaiser} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Chaplain Kaiser Aslam</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Chaplain at Rutgers University</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioKaiser}
				</div>
				<Avatar size={150} src={ammar} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Shaykh Ammar AlShukri</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Author, Imam, and Resident Scholar</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioAlShukri}
				</div>
				<Avatar size={150} src={omars} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Dr. Omar Suleiman</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Founder and President of the Yaqeen Institute for Islamic Research</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioOmar}
				</div>

				<Avatar size={150} src={dradhmed} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Dr. Ahmed Mohammed</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Director of Youth and Young Adults at ISCJ</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioAhemd}
				</div>
			</div>
		);
	}
}

export default About;
