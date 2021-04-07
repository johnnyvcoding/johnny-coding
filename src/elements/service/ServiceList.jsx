import React ,{ Component }from "react";
import { FiGithub , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
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
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
	{
		icon: <SiRedux />,
		title: 'Redux',
		description:
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
	{
		icon: <FaCss3Alt />,
		title: 'CSS3',
		description:
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},

	{
		icon: <DiPostgresql />,
		title: 'Postgresql',
		description:
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
	{
		icon: <FiGithub />,
		title: 'Github Management',
		description:
			'Knowing how to work as a team facilitates creativity and boosts productivity.',
	},
];


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

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
