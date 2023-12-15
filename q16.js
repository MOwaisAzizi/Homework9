class City{
    constructor(population,government){
      this.population = population;
      this.government = government;
    }
    static name() {
      console.log('every city has a name');
    }
  }
  City.name();