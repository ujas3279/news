require('dotenv').config();

const News = require("../models/news");
const Category = require("../models/category");
const Business = require("../models/business");
const Sports = require("../models/sports");
const Entertainment = require("../models/entertainment");
const General = require("../models/general");
const Health = require("../models/health");
const Technology = require("../models/technology");
const Science = require("../models/science");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const axios = require('axios');
const { sortBy } = require("lodash");
const { networkInterfaces } = require('os');
const { url } = require('inspector');


exports.saveNews = async (req,res)=>{
    let category = req.query.category ? req.query.category : 'Business';
    var newFlag = true;
    const uri = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2b1dd5e264704c8ab24d81980d9cf267&pageSize=100`;
    let businessNews;
    if (category == 'Business') {
        businessNews = await Business.find().sort({publishedAt : -1}).limit(1).exec();
    }
    else if(category == 'Science') {
      businessNews = await Science.find().sort({publishedAt : -1}).limit(1).exec();
    }
    else if(category == 'Sports') {
        businessNews = await Sports.find().sort({publishedAt : -1}).limit(1).exec();
      }
      else if(category == 'Entertainment') {
        businessNews = await Entertainment.find().sort({publishedAt : -1}).limit(1).exec();
      }
      else if(category == 'General') {
        businessNews = await General.find().sort({publishedAt : -1}).limit(1).exec();
      }
      else if(category == 'Health') {
        businessNews = await Health.find().sort({publishedAt : -1}).limit(1).exec();
      } else {
        businessNews = await Technology.find().sort({publishedAt : -1}).limit(1).exec();
      }
    axios.get(uri)
    .then((res) =>{
        res.data.articles.forEach(news => {
          let data;
          if (businessNews[0].title !== news.title && businessNews[0].description !== news.description && newFlag){
            if ( category =='Business') {
                data = new Business({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            else if ( category =='Sports') {
                 data = new Sports({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            else if ( category =='Entertainment') {
              data = new Entertainment({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            else if ( category =='General') {
                data = new General({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            else if ( category =='Health') {
                 data = new Health({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            else if ( category =='Technology') {
               data = new Technology({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            else {
                data = new Science({
                    author : news.author,
                    content : news.content,
                    description : news.description,
                    publishedAt : news.publishedAt,
                    sourceId : news?.source?.id ?? null,
                    sourceName : news.source?.name ?? null,
                    title : news.title,
                    url : news.url,
                    urlToImage : news.urlToImage
                });
            }
            let homeNews = new News({
                author : news.author,
                content : news.content,
                description : news.description,
                publishedAt : news.publishedAt,
                sourceId : news?.source?.id ?? null,
                sourceName : news.source?.name ?? null,
                title : news.title,
                url : news.url,
                urlToImage : news.urlToImage
            });
            data.save((err,news)=>{
                if(err) {
                    console.log(err);
                } else
                console.log(news);
            });
            homeNews.save((err,news)=>{
                if(err) {
                    console.log(err);
                } else
                console.log(news);
            });
        } else {
            newFlag = false;
        }
        });
    })
    .catch(err => console.log(err))
    return res.json({
        message:"success",
        success: true,
      });
}
exports.getNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    News.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await News.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getHealthNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    Health.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await Health.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getTechnologyNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    Technology.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await Technology.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getSportsNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    Sports.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await Sports.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getGeneralNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    General.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await General.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getScienceNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    Science.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await Science.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getEntertainmentNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    Entertainment.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await Entertainment.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getBusinessNews = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    Business.find().sort({publishedAt : -1})
    .skip((page-1) * limit)
    .limit(limit)
    .exec(async (err,data)=>{
        const count = await Business.countDocuments();
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: count,
            total_page: (count%limit==0)?parseInt(count/limit):(parseInt(count/limit))+1,
            page: page,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getCategories = (req,res)=>{
    
    Category.find().exec((err,data)=>{
        return res.json({
            message:"success",
            success: true,
            data:{
            total_data: data.length,
            total_page: 1,
            page: 1,
            pageSize: data.length,
            data: data
            }
          });
    });
}

exports.getHomeNews = async (req,res)=>{
    let businessNews = await Business.find().sort({publishedAt : -1}).limit(2).exec();
    let healthNews = await Health.find().sort({publishedAt : -1}).limit(2).exec();
    let scienceNews = await Science.find().sort({publishedAt : -1}).limit(2).exec();
    let generalNews = await General.find().sort({publishedAt : -1}).limit(2).exec();
    let technologyNews = await Technology.find().sort({publishedAt : -1}).limit(2).exec();
    let entertainmentNews = await Entertainment.find().sort({publishedAt : -1}).limit(2).exec();
    let sportsNews = await Sports.find().sort({publishedAt : -1}).limit(2).exec();
    for (let index = 0; index < healthNews.length; index++) {
        businessNews.push(healthNews[index]);
        businessNews.push(scienceNews[index]);
        businessNews.push(generalNews[index]);
        businessNews.push(technologyNews[index]);
        businessNews.push(entertainmentNews[index]);
        businessNews.push(sportsNews[index]);
        
    }

    return res.json({
        message:"success",
        success: true,
        data:businessNews
      });
    
}