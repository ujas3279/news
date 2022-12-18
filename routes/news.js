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
router.get("/news/all", getNews)

module.exports = router;