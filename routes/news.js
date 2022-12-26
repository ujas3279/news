const express = require("express")
const router = express.Router();


const {getHomeNews,saveNews,getNews,getBusinessNews,getEntertainmentNews,getScienceNews,getGeneralNews,getSportsNews,getTechnologyNews,getCategories,getHealthNews} = require("../controllers/news");


router.get("/news/save", saveNews);
router.get("/news/all", getNews);
router.get("/news/business", getBusinessNews);
router.get("/news/entertainment", getEntertainmentNews);
router.get("/news/science", getScienceNews);
router.get("/news/general", getGeneralNews);
router.get("/news/sports", getSportsNews);
router.get("/news/technology", getTechnologyNews);
router.get("/news/health", getHealthNews);
router.get("/news/categories", getCategories);
router.get("/news/saveCategories", getCategories);
router.get("/news/home", getHomeNews);

module.exports = router;