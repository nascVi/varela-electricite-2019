import React, { useEffect, useState } from 'react';
import './App.scss';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
	settings: {
		overlayColor: 'black',
		autoplaySpeed: 3000,
		transitionSpeed: 1000
	},
	buttons: {
		backgroundColor: 'light-grey',
		iconColor: 'black'
	},
	caption: {
		captionColor: 'transparent',
		captionFontFamily: 'Raleway, sans-serif',
		captionFontWeight: '300',
		captionTextTransform: 'uppercase'
	},
	progressBar: {
		height: '20px',
		fillColor: 'rgb(144, 242, 252)',
		backgroundColor: 'transparent'
	}
};

function App() {
	const [tag, setTag] = useState('Professionnels');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'Toutes' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<div className="App">
			<br /><br /><br />
			<h1>Quelques Réalisations</h1>
			<div className="tags">
				<TagButton name="Toutes" tagActive={tag === 'Toutes' ? true : false} handleSetTag={setTag} /> |
				<TagButton name="Professionnels" tagActive={tag === 'Professionnels' ? true : false} handleSetTag={setTag} /> |
				<TagButton name="Particuliers" tagActive={tag === 'Particuliers' ? true : false} handleSetTag={setTag} /> |
				<TagButton name="Materiels" tagActive={tag === 'Materiels' ? true : false} handleSetTag={setTag} />
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