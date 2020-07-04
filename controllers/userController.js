const user = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync")
const AppError = require("./../utils/appError")

//get all user 
exports.getAllUsers = catchAsync( async (req, res,next) => {
    const users = await user.find(); 
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    }); 
})

//get the user
  exports.getUser = catchAsync(async (req, res, next) => {
    
      // console.log(req.params.id);
    const reqUser = await user.findById(req.params.id); 

    if(!reqUser){
      return next(new AppError('No user found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        reqUser
      }
    });
  });

  //create new user
  exports.createUser = catchAsync(async (req, res,next) => {
    const newUser = await user.create(req.body);
    res.status(201).json({
        status:"success",
        data:newUser
    })
  });

//update the user with given id
  exports.updateUser = catchAsync( async (req, res,next) => {

      const User = await user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      
      if(!User){
        return next(new AppError('No user found with that ID', 404));
      }

      res.status(200).json({
        status: 'success',
        data: {
          User
        }
      });
  });

  //delete the user with given id
  exports.deleteUser = catchAsync(async (req, res) => {
      const deleteduser = await user.findByIdAndDelete(req.params.id);
      
      if(!deleteduser){
        return next(new AppError('No user found with that ID', 404));
      }
      res.status(204).json({
        status: 'success',
        data: null
      });
  });
  