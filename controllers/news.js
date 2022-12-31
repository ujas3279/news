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


exports.saveNews = (req,res)=>{
    const uri = 'https://newsapi.org/v2/top-headlines?country=us&category=Sports&pageSize=100&apiKey=2b1dd5e264704c8ab24d81980d9cf267'
    axios.get(uri)
    .then((res) =>{
        res.data.articles.forEach(news => {
          let data = new News({
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
        });
    })
    .catch(err => console.log(err))
    
}
exports.getNews = (req,res)=>{
    News.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getHealthNews = (req,res)=>{
    Health.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getTechnologyNews = (req,res)=>{
    Technology.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getSportsNews = (req,res)=>{
    Sports.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getGeneralNews = (req,res)=>{
    General.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getScienceNews = (req,res)=>{
    Science.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getEntertainmentNews = (req,res)=>{
    Entertainment.find().sort({publishedAt : -1}).exec((err,data)=>{
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

exports.getBusinessNews = (req,res)=>{
    Business.find().sort({publishedAt : -1}).exec((err,data)=>{
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

    return res.json({
        message:"success",
        success: true,
        data:[
            {
                'category' : 'Business',
                data :  businessNews
            },
            {
                'category' : 'Entertainment',
                data :  entertainmentNews
            },
            {
                'category' : 'Science',
                data :  scienceNews
            },
            {
                'category' : 'Technology',
                data :  technologyNews
            },
            {
                'category' : 'General',
                data :  generalNews
            },
            {
                'category' : 'Sports',
                data : sportsNews
            },
            {
                'category' : 'Health',
                data :  healthNews
            }
        ]
      });
    
}