import YouTube from 'react-youtube'
import Btn from '../components/ui/Btn'
import { gridItems } from '../constants/elements.constants'
import { useOpenWidget } from '../hooks/useOpenWidget'

const MainPage = () => {
	const [open] = useOpenWidget()

	const VOptions = {
		height: '350',
		width: '760',
		playerVars: {
			autoplay: 1,
		},
	}

	return (
		<div className='main-page'>
			<section className='main-page__first-section'>
				<div className='main-page__first-section__left-block'>
					<h5>Most important title on the page</h5>
					<h6>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						mattis, leo et condimentum ultricies, sem urna convallis metus, vel
						suscipit nibh lacus tincidunt ante
					</h6>
				</div>
				<div className='main-page__first-section__right-block'>
					<YouTube videoId='dQw4w9WgXcQ' opts={VOptions} />
				</div>
			</section>

			<section className='main-page__second-section'>
				<h5>Also very important title</h5>
				<ul className='main-page__second-section__grid'>
					{gridItems.map(e => (
						<li
							key={Math.random()}
							className='main-page__second-section__grid__element'
						>
							<h5>{e.title}</h5>
							<h6>{e.description}</h6>
						</li>
					))}
				</ul>
				<Btn title='Contact Us' onClick={() => open('AboutUs', 'Submit Us')} />
			</section>

			<section className='main-page__third-section'>
				<h5>Less important title</h5>
				<Btn title='Contact Us' onClick={() => open('AboutUs', 'Submit Us')} />
			</section>
		</div>
	)
}

export default MainPage
