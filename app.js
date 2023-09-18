$(document).ready(() => {
	
	const cardsContainer = $('#card-container')

	// Function to fetch and render coffee menu data
	function fetchCoffeeData() {
		const coffeeAPI = 'https://api.sampleapis.com/coffee/hot'
		fetch(coffeeAPI)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then((data) => {
				cardsContainer.empty()

				const limitCardShow = data.slice(0, 6)
				limitCardShow.forEach((coffee) => {
					const card = $('<div>').addClass('card')

					const name = $('<h2>').text(coffee.name)
					const image = $('<img>')
						.addClass('card-img')
						.attr('src', coffee.image)
					const description = $('<p>').text(coffee.description)
					

					card.append(name, image, description)
					cardsContainer.append(card)
				})
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error)
			})
	}
	fetchCoffeeData()
	function fetchCoffeeImages() {
                const coffeeAPI = 'https://api.sampleapis.com/coffee/hot';
                fetch(coffeeAPI)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                   
                        cardsContainer.empty();
                        data.forEach((coffee) => {
                            const image = $('<img>')
                                .addClass('menu-img')
                                .attr('src', coffee.image);
    const ingredients= $('<p>').text(`ingredients${coffee.ingredients}`).addClass('ingredients')
                            cardsContainer.append(image,ingredients);
                        });
                    })
                    .catch((error) => {
                        console.error('There was a problem with the fetch operation:', error);
                    });
            }
    
           
            $('#menu_id').on('click', () => {
                fetchCoffeeImages();
            });
		
        });



	
