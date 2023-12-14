const {constant} = require("../constant")
const errorHandler = (err , req ,res , next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    // res.json({massege : err.massege, stackTrace : err.stack})

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({
                title : "validation failed",
                massage :err.massage,
                stackStrace : err.stack,
            });
            
        case constant.NOT_FOUND: 
            res.json({
                title : "not found",
                massage :err.massage,
                stackTrace : err.stack,
            })

        case constant.UNAUTHORIZED:
            res.json({
                title : "unauthorized",
                massage :err.massage,
                stackTrace : err.stack,
            })
        case constant.FORBIDDEN:
            res.json({
                title : "forbidden",
                massage :err.massage,
                stackTrace : err.stack,
            })
        case constant.SERVR_ERROR:
            res.json({
                title : "server error",
                massage :err.massage,
                stackTrace : err.stack,
            })
            
        default: 
            // console.log("no Error, All Good!")
            res.json({massage:err.stack}) 
            break;
    }

};

module.exports = errorHandler;