fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

//Ici nous indiquons que nous voulons les données des 30 pays avec la plus grande population trié par ordre croissant
function sortByCountryPopulation(data) {
  data.sort((a, b) => b.population - a.population);
}
 function run_visualization(data) {
  sortByCountryPopulation(data);
  const countries = data.slice(0,30).map((p) => p.country);
  const populations = data.slice(0, 30).map((p) => p.population);


//Nous allons créer le graphique à présent

  const trace = {
    x: countries,
    y: populations,
    type: 'bar'
  };

  const layout = {
      title: 'Les 30 pays les plus peuplés par ordre croissant',
      xaxis: {
          title: 'Country'
      },
      yaxis: {
          title: 'Population'
    }
  };
  const dataPlot = [trace];
  Plotly.newPlot('data-viz', dataPlot, layout);
}