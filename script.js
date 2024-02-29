fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
  .then(res => res.json())
  .then(data => {
    const cityContainer = document.getElementById('cityContainer');
    var data = JSON.stringify([{ "model": "cityDetails", "fields": { "state": "city.state", "area": "city.area","area": "city.area" } }]);
    data = JSON.parse(data);
    data.forEach(city => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('city-card');
      const cityName = document.createElement('div');
      cityName.classList.add('city-name');
      cityName.textContent = city.name;
      const cityDetails = document.createElement('div');
      cityDetails.classList.add('city-details');

      cityDetails.innerHTML = `<p>State: ${city.state}</p>
                            <p>Population: ${city.population}</p>
                            <p>Area: ${city.area}</p>`;
      cityCard.appendChild(cityName);
      cityCard.appendChild(cityDetails);
      cityContainer.appendChild(cityCard);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
