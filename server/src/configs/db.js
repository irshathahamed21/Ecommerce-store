const {connect} = require("mongoose")
require("dotenv").config()

module.exports = () => {
    return connect(process.env.MONGO_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        }
    )
}


