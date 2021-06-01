import React, { useEffect, useState } from 'react';
import './App.scss';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

function App() {
	const [tag, setTag] = useState('Toutes');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'Toutes' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<div className="App">
			<div className="tags">
				<TagButton name="Toutes" tagActive={tag === 'Toutes' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Entreprise" tagActive={tag === 'Entreprise' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Privé" tagActive={tag === 'Privé' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Materiel" tagActive={tag === 'Materiel' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper options={options}>
				<div className="container">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default App;