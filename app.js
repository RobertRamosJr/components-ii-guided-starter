// Your Javascript goes in this file.
// It is attached to index.html via the <script> tag at the end of body.
// NOTE test console.log('hello')

const container = document.querySelector('.dogs')
const button = document.querySelector('#getdogs')

function DogCard(imageUrl, titleText) {
    const card = document.createElement('div')
    card.classList.add('dog-card')
    
    const image = document.createElement('img')
    image.classList.add('dog-image')
    image.src = imageUrl  
    card.appendChild(image)

    const title = document.createElement('h3')
    title.textContent = titleText
    card.appendChild(title)

    card.addEventListener('click', (event) =>{
        event.currentTarget.classList.toggle('selected')
    })
    
    return card 
}

button.addEventListener('click', () => {
	// Make a dynamic GET request without refreshing the page
	axios.get('https://dog.ceo/api/breed/husky/images/random/12')
		// Promise has resolved
		.then((response) => {
			console.log('Network request was successful')

			// Data that comes back from the server
			const imageUrls = response.data.message

			// Create components for each image returned
			imageUrls.forEach((imageUrl) => {
				const dogCard = DogCard(imageUrl, 'Husky')
				container.appendChild(dogCard)
			})
		})
		// Promise has rejecte4d
		.catch((error) => {
			console.log('Network request was unsuccessful')
			console.log(error)
		})
})