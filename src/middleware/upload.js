const multer = require('multer');
const {response} = require("./../middleware/getDataHelpers")
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./src/image')
    },
    filename: function (req,file,cb){
        const uniq = Date.now() + Math.round(Math.random() * 1E9)
        cb(null,file.fieldname+'-'+uniq+'.png')
    }
})
const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("File format should be PNG or JPG"), false); // if validation failed then generate error
    }
  };
  
const upload = multer({storage,fileFilter})

module.exports = upload