const countries = [
    { name: 'Afghanistan', continent: 'Asia' },
    { name: 'Albania', continent: 'Europe' },
    { name: 'Afghanistan', continent: 'Asia' },
  { name: 'Bangladesh', continent: 'Asia' },
  { name: 'China', continent: 'Asia' },
  { name: 'India', continent: 'Asia' },
  { name: 'Indonesia', continent: 'Asia' },
  { name: 'Japan', continent: 'Asia' },
  { name: 'Malaysia', continent: 'Asia' },
  { name: 'Pakistan', continent: 'Asia' },
  { name: 'Philippines', continent: 'Asia' },
  { name: 'Singapore', continent: 'Asia' },
  { name: 'South Africa', continent: 'Africa'},
  { name: 'Nigeria', continent: 'Africa'},
  { name: 'Kenya', continent: 'Africa'},
  {name: 'Morocco', continent: 'Africa'},
  {name: 'Ghana', continent: 'Africa'},
  {name: 'Senegal', continent: 'Africa'},
  {name: 'Niger', continent: 'Africa'},
  {name: 'Tanzania', continent: 'Africa'},
  {name: 'Ethiopia', continent: 'Africa'},
  {name: 'Mali', continent: 'Africa'},
  {name: 'Italy', continent: 'Europe'},
  {name: 'Germany', continent: 'Europe'},
  {name: 'United Kingdom', continent: 'Europe'},
  {name: 'France', continent: 'Europe'},
  {name: 'Switzerland', continent: 'Europe'},
  {name: 'Netherland', continent: 'Europe'},
{name: 'Greece', continent: 'Europe'},
{name: 'Poland', continent: 'Europe'},
{name: 'Ukraine', continent: 'Europe'},
{name: 'United States', continent: 'North America'},
{name: 'Canada', continent: 'North America'},
{name: 'Mexico', continent: 'North America'},
{name: 'Greenland', continent: 'North America'},
{name: 'Cuba', continent: 'North America'},
{name: 'Panama', continent: 'North America'},
{name: 'Jamaica', continent: 'North America'},
{name: 'Haiti', continent: 'North America'},
{name: 'Costa Rica', continent: 'North America'},
{name: 'Puerto Rico', continent: 'North America'},
{name: 'Australia', continent: 'Oceania'},
{name: 'New Zealand', continent: 'Oceania'},
{name: 'Samoa', continent: 'Oceania'},
{name: 'Fiji', continent: 'Oceania'},
{name: 'Tonga', continent: 'Oceania'},
{name: 'Micronesia', continent: 'Oceania'},
{name: 'Papua New Guinea', continent: 'Oceania'},
{name: 'Vanuatu', continent: 'Oceania'},
{name: 'Solomon Island', continent: 'Oceania'},
{name: 'Kiribati', continent: 'Oceania'},
{name: 'Brazil', continent: 'South America'},
{name: 'Argentina', continent: 'South America'},
{name: 'Peru', continent: 'South America'},
{name: 'Colombia', continent: 'South America'},
{name: 'Chile', continent: 'South America'},
{name: 'Venezuela', continent: 'South America'},
{name: 'Bolivia', continent: 'South America'},
{name: 'Guyana', continent: 'South America'},
{name: 'Ecuador', continent: 'South America'},
{name: 'Uruguay', continent: 'South America'},
{name: 'Paraguay', continent: 'South America'},
   // Add more countries with their respective continents
    // Example: { name: 'Country Name', continent: 'Continent Name' }
  ];
  
  function filterCountries() {
    const selectedContinent = document.getElementById('continents').value;
    const countryList = document.getElementById('countryList');
  
    // Clear previous country list
    countryList.innerHTML = '';
  
    // Filter countries based on selected continent or show all countries
    const filteredCountries = selectedContinent === 'all' ?
      countries :
      countries.filter(country => country.continent === selectedContinent);
  
    // Create list items for countries and append to the country list
    filteredCountries.forEach(country => {
      const listItem = document.createElement('li');
      listItem.textContent = country.name;
      countryList.appendChild(listItem);
    });
  }
  

