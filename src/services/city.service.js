const { CityRepository } = require("../repository/index")

class CityService{
    constructor(){
    this.cityRepository = new this.cityRepository
    }

    async CreateCity(data){
      try {
        const city= this.cityRepository.CreateCity(data)
        return city
      } catch (error) {
      console.log("somthing went wrong")
      throw {error}
      }
    }

    async DeleteCity(cityId){
      try {
        this.cityRepository.DeleteCity(cityId)
      } catch (error) {
        console.log("somthing went wrong")
      throw {error}
      }
    }

    async GetCity(cityId){
     try {
      const city= this.cityRepository.GetCity(cityId)
      return city
     } catch (error) {
      console.log("somthing went wrong")
      throw {error}
     }
    }

    async UpdateCity(cityId, data){
     try {
      const city= this.cityRepository.UpdateCity(cityId, data)
      return city
     } catch (error) {
      console.log("somthing went wrong")
      throw {error}
     }
    }
}


module.exports= CityService