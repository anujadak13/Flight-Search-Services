const city = require("../models/city")
const { City } = require("../models/index")

class CityRepository{
    async CreateCity({name}){
        try {
            const city = await City.create({name})
            return city
        } catch (error) {
            console.log("Something went worng")
            throw {error}
        }
    }

    async DeleteCity(cityId){
        try {
            City.destroy({
                where:{
                    id:cityId
                }
            })
        } catch (error) {
            console.log("Something went worng")
         throw {error}   
        }
    }

    async UpdateCity(cityId, data){
        try {
          const city= await City.update(data, {
            where:{
            id: cityId
            }
          })  
          return city
        } catch (error) {
            console.log("Something went worng")
            throw{error}
        }
    }

    async getCity(cityId){
        try {
        const city= await City.findByPk(cityId)
        return city
        } catch (error) {
            console.log("Something went worng")
            throw {error}
        }
    }
}


module.exports = CityRepository