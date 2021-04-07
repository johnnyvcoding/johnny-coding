import React, { Component } from 'react';

const PortfolioListContent = [
	{
		image:
			'image-3',
		category: 'Project & Team Management',
		title: 'Note-ary',
		link: 'https://www.note-ary.com/',
	},

	{
		image: 'image-2',
		category: 'Store',
		title: 'Firezon',
		link: 'https://flameazon.com',
	},
	{
		image: 'image-1',
		category: 'API Manegement',
		title: 'Twistify',
		link: 'https://twistify.net/',
	},

	// {
	// 	image: 'image-4',
	// 	category: 'Web Scrapper',
	// 	title: 'Scrappy',
	// 	link:
	// 		'https://i.pinimg.com/originals/30/75/41/3075410e0a69976beb57e0949d8007c8.png',
	// },
	// {
	// 	image: 'image-4',
	// 	category: 'Music',
	// 	title: 'Jambox',
	// 	link:
	// 		'https://i.pinimg.com/originals/30/75/41/3075410e0a69976beb57e0949d8007c8.png',
	// },
];

class PortfolioList extends Component {
	render() {
		const { column, styevariation } = this.props;
		const list = PortfolioListContent.slice(0, this.props.item);
		return (
			<React.Fragment>
				{list.map((value, index) => (
					<div className={`${column}`} key={index}>
						<div className={`portfolio ${styevariation}`}>
							<div className='thumbnail-inner'>
								<div className={`thumbnail ${value.image}`}></div>
								<div className={`bg-blr-image ${value.image}`}></div>
							</div>
							<div className='content'>
								<div className='inner'>
									<p>{value.category}</p>
									<h4>
										<a href='/portfolio-details'>{value.title}</a>
									</h4>
									<div className='portfolio-button'>
										<a className='rn-btn' href={value.link}>
											View Details
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}
export default PortfolioList;
