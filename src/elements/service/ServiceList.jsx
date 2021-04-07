import React, { Component } from 'react';
import { FiGithub, FiLayers, FiUsers, FiMonitor } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { DiPostgresql, DiCss3 } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

const ServiceList = [
	{
		icon: <FaReact />,
		title: 'React',
		description:
			'Build reusable JSX components that can facilitate maintenance, scalability, and single-page applications (SPA).',
	},
	{
		icon: <FaNodeJs />,
		title: 'Node',
		description:
			'Build fast and scalable network applications. The back-end will be able to handle many concurrent requests with ease, thus making it a viable back-end language. ',
	},
	{
		icon: <SiRedux />,
		title: 'Redux',
		description:
			'Whether small or large applications, Redux is great at managing state in one object, which can help when it comes to scaling an application.',
	},
	{
		icon: <FaCss3Alt />,
		title: 'CSS3',
		description:
			"CSS3 is great for styling components and making them responsive. No matter how big or small your device's screen is, CSS3 will allow your device to have a pleasant visual experience.",
	},

	{
		icon: <DiPostgresql />,
		title: 'PostgreSQL',
		description:
			'PostgreSQL is an object-relational database system that uses and extends the SQL language, which can safely store and scale the most complicated data workloads.',
	},
	{
		icon: <FiGithub />,
		title: 'Github Management',
		description:
			'Knowing how to work as a team facilitates creativity and boosts productivity.',
	},
];

class ServiceThree extends Component {
	render() {
		const { column } = this.props;
		const ServiceContent = ServiceList.slice(0, this.props.item);

		return (
			<React.Fragment>
				<div className='row'>
					{ServiceContent.map((val, i) => (
						<div className={`${column}`} key={i}>
							<a
								href='https://drive.google.com/file/d/123HHeoFNDnz2xs4J-YTEc06QmmZ-huR6/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='service service__style--2'>
									<div className='icon'>{val.icon}</div>
									<div className='content'>
										<h3 className='title'>{val.title}</h3>
										<p>{val.description}</p>
									</div>
								</div>
							</a>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}
export default ServiceThree;
