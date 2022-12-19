const express = require("express")
const router = express.Router();


const {saveNews,getNews} = require("../controllers/news");

//params
// router.param("userId", getUserById);
 //router.param("wallpaperId", getwallpaperById);


// create routes
// router.post("/wallpaper/create/", createwallpaper)
// router.get("/wallpaper/views/:wallpaperId",increaseViewCount)
// router.get("/wallpaper/search/",getAllwallpapersBySearch)
// router.get("/wallpaper/downloads/:wallpaperId",increaseDownloadCount)
//read routes
// router.get("/wallpaper/:wallpaperId",getwallpaper)

//router.get("/wallpaper/photo/:wallpaperId",photo)

//delete route
// router.delete("/wallpaper/:wallpaperId",deletewallpaper)

//update route
// router.put("/wallpaper/:wallpaperId",updatewallpaper)

//listing route
// router.get("/wallpapers", getAllwallpapers)
// router.get("/wallpapersbycategory", getAllwallpapersBycategory)

// router.get("/wallpapers/categories",getAllUniqueCategories)
router.get("/news/save", saveNews);
router.get("/news/all", getNews);
router.get("/news/business", getNews);
router.get("/news/entertainment", getNews);
router.get("/news/science", getNews);
router.get("/news/general", getNews);
router.get("/news/sports", getNews);
router.get("/news/technology", getNews);
router.get("/news/health", getNews);

module.exports = router;