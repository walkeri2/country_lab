import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{

  new Vue({

    el: "#app",

    data: {
      countryList: [],
      country: "",
      selectedCountry: null,
      favCountries: []
    },

    mounted(){
      this.fetchCountry()
    },

    computed: {
      totalPopulation: function(){
        return this.countryList.reduce((total, country) => {
          return total + country.population;
        }, 0)
      }
    },

    methods: {
      fetchCountry: function(){
        const request = fetch("http://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countryList = data)
      },
      makeFavourite: function(){
        return this.favCountries.push(this.selectedCountry.name);
      }
    }
  })
})
