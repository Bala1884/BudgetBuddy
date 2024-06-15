import model from '../models/model.js'

//post:/api/categories
const createCategories=async (req,res)=>{
   const Create = new model.Categories({
    type:"Savings",
    color:'#1f3b5c'
   })

   await Create.save((err)=>{
    if(!err) return res.json(Create)
    return res.status(400).json({message:`Error while creating categories ${err}`})
   });
}

//get:/api/categories
const getCategories=async(req,res)=>{
    let data = await model.Categories.find({})
    let filter=await data.map(v=>Object.assign({},{type:v.type,color:v.color}))
    return res.json(filter);
}
//post:/api/transaction
const createTransaction = async (req, res) => {
    try {
      if (!req.body) return res.status(400).json("Post HTTP data not provided");
  
      const { name, type, amount } = req.body;
  
      const create = new model.Transaction({
        name,
        type,
        amount,
        date: new Date()
      });
  
      const savedTransaction = await create.save();
      return res.json(savedTransaction);
    } catch (err) {
      return res.status(400).json({ message: `Error while creating transaction ${err}` });
    }
  };
  

//get:/api/transaction
const getTransaction=async(req,res)=>{
    let data=await model.Transaction.find({});
    return res.json(data);
}

//delete:/api/transaction
const deleteTransaction = async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).json({ message: "Request body not found" });
      }
  
      const deleteResult = await model.Transaction.deleteOne(req.body);
  
      if (deleteResult.deletedCount === 1) {
        return res.json({ message: "Record Deleted" });
      } else {
        return res.json({ message: "Record not found or already deleted" });
      }
    } catch (err) {
      return res.status(400).json({ message: `Error while deleting Transaction Record: ${err}` });
    }
  };
  

//get:/api/transaction
const getLabels=async(req,res)=>{
    model.Transaction.aggregate([
        {
            $lookup:{
                from:"categories",
                localField:'type',
                foreignField:'type',
                as:'categoriesInfo'
            }
        },
        {
            $unwind:"$categoriesInfo"
        }
    ]).then(result=>{
        let data=result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categoriesInfo['color']}))
        res.json(data);
    }).catch(error=>{
        res.status(400).json("Lookup Collection Error")
    })
}
export default{
    createCategories,
    getCategories,
    createTransaction,
    getTransaction,
    deleteTransaction,
    getLabels
}