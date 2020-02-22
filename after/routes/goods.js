var express = require('express');
var goods = express.Router();

/* GET users listing. */
goods.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

goods.get('/oftenGoods', function(req, res, next) {
  res.json([
    {
      goodsId: 1,
      goodsName: "塔塔酱鲜虾米汉堡",
      price: 25
    },{
      goodsId: 2,
      goodsName: "酱烧肥牛米汉堡",
      price: 23
    },{
      goodsId: 3,
      goodsName: "香酥双鸡堡",
      price: 16
    },
    {
      goodsId: 4,
      goodsName: "咔滋小食盒",
      price: 28
    },{
      goodsId: 5,
      goodsName: "焰烤手枪腿",
      price: 18
    },{
      goodsId: 6,
      goodsName: "薯条",
      price: 10
    },
    {
      goodsId: 7,
      goodsName: "营养热豆浆",
      price: 6
    },{
      goodsId: 8,
      goodsName: "热牛奶",
      price: 7
    },{
      goodsId: 9,
      goodsName: "热咖啡",
      price: 8
    },{
      goodsId: 10,
      goodsName: "热香橙",
      price: 7
    }
  ])
});

goods.get('/typeGoods', function(req, res, next) {
  res.json([
    //0-汉堡
    [{
      goodsId: 1,
      goodsName: "塔塔酱鲜虾米汉堡",
      price: 25
    },{
      goodsId: 2,
      goodsName: "酱烧肥牛米汉堡",
      price: 23
    },{
      goodsId: 3,
      goodsName: "香酥双鸡堡",
      price: 16
    },{
      goodsId: 4,
      goodsName: "黄金Q虾堡",
      price: 19
    },{
      goodsId: 5,
      goodsName: "菠萝鸡腿堡",
      price: 19
    },{
      goodsId: 6,
      goodsName: "辣味超级鸡腿堡",
      price: 17
    },{
      goodsId: 7,
      goodsName: "超级鸡腿堡",
      price: 19
    }],
    
    //1-小食
    [
      {
        goodsId: 1,
        goodsName: "咔滋小食盒",
        price: 28
      },{
        goodsId: 2,
        goodsName: "焰烤手枪腿",
        price: 18
      },{
        goodsId: 3,
        goodsName: "薯条",
        price: 10
      },{
        goodsId: 4,
        goodsName: "焰烤闪电翅",
        price: 12
      },{
        goodsId: 5,
        goodsName: "阳光玉米杯",
        price: 8
      },{
        goodsId: 6,
        goodsName: "德克猫鸡块",
        price: 9
      },{
        goodsId: 7,
        goodsName: "孜然鸡柳",
        price: 10
      }
    ],
    //2-饮料
    [
      {
        goodsId: 1,
        goodsName: "营养热豆浆",
        price: 6
      },{
        goodsId: 2,
        goodsName: "热牛奶",
        price: 7
      },{
        goodsId: 3,
        goodsName: "热咖啡",
        price: 8
      },{
        goodsId: 4,
        goodsName: "热香橙",
        price: 7
      },{
        goodsId: 5,
        goodsName: "可乐",
        price: 10
      }
    ],
    //3-套餐
    [
      {
        goodsId: 1,
        goodsName: "基友套餐",
        price: 42
      },{
        goodsId: 2,
        goodsName: "单人套餐",
        price: 20
      },{
        goodsId: 3,
        goodsName: "全家桶",
        price: 98
      },{
        goodsId: 4,
        goodsName: "全鸡分享套餐",
        price: 65
      }
    ],
  ])
});

module.exports = goods;
