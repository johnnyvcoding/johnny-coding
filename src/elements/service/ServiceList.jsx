import React ,{ Component }from "react";
import { FiGithub , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';

const ServiceList = [
	{
		icon: <SiRedux />,
		title: 'Redux',
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
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
	{
		icon: <FiUsers />,
		title: 'Communication',
		description:
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
	{
		icon: <FaNodeJs />,
		title: 'Node',
		description:
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
	{
		icon: <FaReact />,
		title: 'React',
		description:
			'I throw myself down among the tall grass by the stream as I lie close to the earth.',
	},
];


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
