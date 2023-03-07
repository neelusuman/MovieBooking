const movieController= require("../controller/movie.controller")

module.exports = function(app){
    app.post("/mba/api/v1/movies",movieController.createMovie)
}