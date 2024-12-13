const {CityService}= require("../services/index")

const cityservice= new cityService()

const Create= async (req, res)=>{
 try {
    const city= await cityservice.CreateCity(req.body)
     return res.status(201).json({
        success: true,
        message: "Created Successfully",
        data: city,
        err: {}
     })
 } catch (error) {
    return res.status(500).json({
        success: false,
        message: "something went wrong",
        err: error,
        data: {}
    })
 }
 }

 const Destroy= async (req, res)=>{
    try {
       const city= await cityservice.DeleteCity(req.params.id)
        return res.status(200).json({
           success: true,
           message: "deleted Successfully",
           err: {}
        })
    } catch (error) {
       return res.status(500).json({
           success: false,
           message: "something went wrong",
           err: error,
       })
    }
    }

    const Get= async (req, res)=>{
        try {
           const city= await cityservice.GetCity(req.param.id)
            return res.status(200).json({
               success: true,
               message: "get Successfully",
               data: city,
               err: {}
            })
        } catch (error) {
           return res.status(500).json({
               success: false,
               message: "something went wrong",
               err: error,
               data: {}
           })
        }
        }

        const Update= async (req, res)=>{
            try {
               const city= await cityservice.UpdateCity(req.param.id, req.body)
                return res.status(200).json({
                   success: true,
                   message: "updated Successfully",
                   data: city,
                   err: {}
                })
            } catch (error) {
               return res.status(500).json({
                   success: false,
                   message: "something went wrong",
                   err: error,
                   data: {}
               })
            }
            }
           
       module.exports= {
        Create, Destroy, Update, Get
       }     