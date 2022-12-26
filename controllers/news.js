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
    const uri = 'https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=100&apiKey=2b1dd5e264704c8ab24d81980d9cf267'
    axios.get(uri)
    .then((res) =>{
        res.data.articles.forEach(news => {
          let data = new Science({
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
    News.find().exec((err,data)=>{
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
    Health.find().exec((err,data)=>{
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
    Technology.find().exec((err,data)=>{
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
    Sports.find().exec((err,data)=>{
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
    General.find().exec((err,data)=>{
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
    Science.find().exec((err,data)=>{
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
    Entertainment.find().exec((err,data)=>{
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
    Business.find().exec((err,data)=>{
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

