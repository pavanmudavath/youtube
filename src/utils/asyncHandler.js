const asyncHandler = (requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandler}




//or

// const asyncHandler = (fn) => async() => {
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         resizeBy.status(err.code || 500).josn({
//             success:false,
//             message:err.message
//         })
//     }
// }

