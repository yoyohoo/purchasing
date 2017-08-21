webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Cache = Cache_1 = (function () {
    function Cache() {
        /**
         * 读取缓存对象
         *
         * @memberof Cache
         */
        this.get = function (key) {
            return Cache_1.cache[key];
        };
        /**
         * 写入缓存
         *
         * @memberof Cache
         */
        this.set = function (key, value) {
            Cache_1.cache[key] = value;
        };
    }
    /**
     * 删除缓存
     *
     * @param {any} key
     * @memberof Cache
     */
    Cache.prototype.remove = function (key) {
        delete Cache_1.cache[key];
    };
    /**
     * 备份缓存
     *
     * @memberof Cache
     */
    Cache.prototype.backup = function () {
        Cache_1.lastCache = Cache_1.cache;
    };
    /**
     * 清空缓存
     *
     * @memberof Cache
     */
    Cache.prototype.clear = function () {
        Cache_1.cache = new Object();
    };
    return Cache;
}());
/**
 * 最近一次缓存
 *
 * @static
 * @memberof Cache
 */
Cache.lastCache = new Object();
/**
 * 当前缓存
 *
 * @static
 * @memberof Cache
 */
Cache.cache = new Object();
Cache = Cache_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Cache);

var Cache_1;
//# sourceMappingURL=cache.global.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstPage = (function () {
    function FirstPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = {};
    }
    return FirstPage;
}());
FirstPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\first\first.html"*/'<div style="position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f5f5f5;">\n\n  <img style="height:100%" src="assets/img/first.jpg" alt="">\n\n</div>\n\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\first\first.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], FirstPage);

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache_cache_global__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    /**
     * Creates an instance of ListPage.
     * @param {NavController} navCtrl
     * @param {ActionSheetController} actionSheetCtrl
     * @param {ToastController} toastCtrl
     * @param {ModalController} modalCtrl
     * @memberof ListPage
     */
    function ListPage(navCtrl, actionSheetCtrl, toastCtrl, dataService, cache, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.cache = cache;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.categories = this.dataService.getAll();
        // let name = navParams.get('category') && navParams.get('category').title;
        // name && this.setCategoty(name);
        // this.category = this.category || this.categories[0];
    }
    /**
     * 初始化
     *
     * @memberof ListPage
     */
    ListPage.prototype.ngOnInit = function () {
        this.category = this.categories[0];
    };
    /**
     * 显示时执行
     *
     * @memberof ListPage
     */
    ListPage.prototype.ionViewDidEnter = function () {
        var name = this.cache.get('category');
        name && this.setCategoty(name);
        this.category = this.category || this.categories[0];
    };
    /**
     * 设置分类
     *
     * @param {any} name
     * @memberof ListPage
     */
    ListPage.prototype.setCategoty = function (name) {
        var _this = this;
        this.categories.forEach(function (category) {
            name.indexOf(category.name) > -1 &&
                (_this.category = category);
        });
    };
    /**
     * 选择分类
     *
     * @param {any} category
     * @memberof ListPage
     */
    ListPage.prototype.presentCategory = function (category, search) {
        this.searchItems = [];
        this.searchName = search ? category.name : null;
        this.category = category;
    };
    /**
     * 搜索商品
     *
     * @param {any} $event
     * @memberof ListPage
     */
    ListPage.prototype.searchCategory = function ($event) {
        var name = $event.target.value;
        this.searchItems = this.categories.filter(function (category) {
            return category.name.indexOf(name) > -1;
        });
    };
    /**
     * 显示图片详情
     *
     * @param {any} items
     * @param {any} index
     * @memberof ListPage
     */
    ListPage.prototype.showDetail = function (items, index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            index: index,
            items: items
        });
        modal.present({
            animate: false,
            duration: 0
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\list\list.html"*/'<ion-header>\n  <ion-toolbar color="default">\n    <!-- <ion-buttons start>\n      <ion-icon name="content"></ion-icon>\n    </ion-buttons> -->\n    <ion-searchbar placeholder="搜索分类" [animated]="true" [autocomplete]="on" [showCancelButton]="true" [(ngModel)]="searchName"\n      (ionInput)="searchCategory($event)"></ion-searchbar>\n    <ion-list *ngFor="let category of searchItems">\n      <button ion-item (click)="presentCategory(category,true)">\n            {{category.name}}\n        </button>\n    </ion-list>\n    <!-- <ion-buttons padding end>\n      <ion-icon name="more"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid id="list-grid">\n    <ion-row style="height:100%">\n      <ion-col col-3>\n        <ion-list [ngClass]="{\'actived\': category.name==c.name }" class="left-menu" *ngFor="let c of categories">\n          <button ion-item (click)="presentCategory(c)">\n            {{c.name}}\n        </button>\n        </ion-list>\n      </ion-col>\n      <ion-col col-9>\n        <ion-grid>\n          <ion-row>\n            <ion-item>\n              {{category.name}}\n              <ion-badge item-end>{{category.items.length}}</ion-badge>\n            </ion-item>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 *ngFor="let item of category.items">\n              <img [src]="item.src" (click)="showDetail(category.items, item.index)">\n              <p>{{item.title}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\list\list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__cache_cache_global__["a" /* Cache */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_2__cache_cache_global__["a" /* Cache */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache_cache_global__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = [];
        this.cache = new __WEBPACK_IMPORTED_MODULE_2__cache_cache_global__["a" /* Cache */]();
        this.index = navParams.get('index');
        this.list = navParams.get('items');
    }
    /**
     * 返回上一级
     *
     * @memberof DetailPage
     */
    DetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\detail\detail.html"*/'<ion-slides pager [initialSlide]="index" style="width:100%;height:100%;background-color: #333;">\n\n  <ion-slide *ngFor="let d of list">\n\n    <div>\n\n      <img src="{{d.src}}" (click)="goBack()">\n\n    </div>\n\n    <h2 style="color:#fff">{{d.title}}</h2>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__(272);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx'
var DataService = (function (_super) {
    __extends(DataService, _super);
    function DataService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取所有的数据
     *
     * @returns
     * @memberof DataService
     */
    DataService.prototype.getAll = function () {
        var arr = [];
        //热销商品
        var hot = {
            name: '热销商品', items: []
        };
        hot.items = this.getHotSail()[0];
        arr.push(hot);
        //兰芝
        var lanzhi = {
            name: '兰芝', items: [{ title: '焕颜雪凝', src: 'assets/img/items/lanzhi/tz1.jpg', index: 0 },
                { title: '套装清爽型', src: 'assets/img/items/lanzhi/tz2.jpg', index: 1 },
                { title: '套装滋润型', src: 'assets/img/items/lanzhi/tz3.jpg', index: 2 },
                { title: '水乳套装1', src: 'assets/img/items/lanzhi/zh1.jpg', index: 3 },
                { title: '水乳套装2', src: 'assets/img/items/lanzhi/zh2.jpg', index: 4 },
                { title: '水乳套装3', src: 'assets/img/items/lanzhi/zh3.jpg', index: 5 },
                { title: '睡眠面膜', src: 'assets/img/items/lanzhi/mm1.jpg', index: 6 },
                { title: '睡眠面膜', src: 'assets/img/items/lanzhi/mm2.jpg', index: 7 },
                { title: '洗面奶', src: 'assets/img/items/lanzhi/xmn.jpg', index: 8 }]
        };
        arr.push(lanzhi);
        //春雨
        var chunyu = {
            name: '春雨', items: []
        };
        for (var i = 0; i < 12; i++) {
            chunyu.items.push({ title: '', src: 'assets/img/items/chunyu/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(chunyu);
        //悦诗风吟
        var yueshifengyin = {
            name: '悦诗风吟', items: []
        };
        for (var i = 0; i < 9; i++) {
            yueshifengyin.items.push({ title: '', src: 'assets/img/items/yueshifengyin/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(yueshifengyin);
        //可莱丝
        var kelaisi = {
            name: '可莱丝', items: []
        };
        for (var i = 0; i < 9; i++) {
            kelaisi.items.push({ title: '', src: 'assets/img/items/kelaisi/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(kelaisi);
        //水光
        var shuiguang = {
            name: '水光', items: []
        };
        for (var i = 0; i < 9; i++) {
            shuiguang.items.push({ title: '', src: 'assets/img/items/shuiguang/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(shuiguang);
        //蜗牛
        var woniu = {
            name: '蜗牛', items: []
        };
        for (var i = 0; i < 12; i++) {
            woniu.items.push({ title: '', src: 'assets/img/items/woniu/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(woniu);
        //雪花秀
        var xuehuaxiu = {
            name: '雪花秀', items: []
        };
        for (var i = 0; i < 4; i++) {
            xuehuaxiu.items.push({ title: '', src: 'assets/img/items/xuehuaxiu/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(xuehuaxiu);
        //后
        var hou = {
            name: '后', items: []
        };
        for (var i = 0; i < 0; i++) {
            hou.items.push({ title: '', src: 'assets/img/items/hou/' + (i + 1) + '.jpg', index: i });
        }
        arr.push(hou);
        return arr;
    };
    /**
     * 大类信息
     *
     * @returns
     * @memberof DataService
     */
    DataService.prototype.getCategories = function () {
        return [{ title: '兰芝系列', src: 'assets/img/items/lanzhi/logo.jpg' },
            { title: '春雨系列', src: 'assets/img/items/chunyu/logo.jpg' },
            { title: '悦诗风吟系列', src: 'assets/img/items/yueshifengyin/logo.jpg' },
            { title: '可莱丝系列', src: 'assets/img/items/kelaisi/2.jpg' },
            { title: '水光系列', src: 'assets/img/items/shuiguang/1.jpg' },
            { title: '蜗牛系列', src: 'assets/img/items/woniu/1.jpg' },
            { title: '雪花秀系列', src: 'assets/img/items/xuehuaxiu/logo.jpg' },
            { title: '后系列', src: 'assets/img/items/tire1.png' }];
    };
    /**
     * 获取轮播图片列表
     *
     * @returns
     * @memberof DataService
     */
    DataService.prototype.getSliders = function () {
        return ['assets/img/bars/bar1.jpg',
            'assets/img/bars/bar2.jpg',
            'assets/img/bars/bar3.jpg'];
    };
    /**
     * 获取热销商品
     *
     * @returns
     * @memberof DataService
     */
    DataService.prototype.getHotSail = function () {
        var hot = [{ title: '热销商品', name: '睡眠面膜', src: 'assets/img/items/lanzhi/mm2.jpg' },
            { title: '热销商品', name: '可莱丝面膜', src: 'assets/img/items/kelaisi/3.jpg' },
            { title: '热销商品', name: '水光面膜', src: 'assets/img/items/shuiguang/7.jpg' }];
        return [hot, hot];
    };
    return DataService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.todo = {};
    }
    ContactPage.prototype.ngOnInit = function () {
        this.code = 'addFriend';
    };
    ContactPage.prototype.presentLoading = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        setTimeout(function () {
            return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }, 3.1 * 1000);
    };
    ContactPage.prototype.logForm = function () {
        this.presentLoading();
        console.info(this.todo);
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\contact\contact.html"*/'<div padding>\n  <ion-segment [(ngModel)]="code">\n    <ion-segment-button value="addFriend">\n      加好友\n    </ion-segment-button>\n    <ion-segment-button value="payFor">\n      付款\n    </ion-segment-button>\n  </ion-segment>\n</div>\n<div [ngSwitch]="code">\n  <ion-list *ngSwitchCase="\'addFriend\'">\n    <ion-item>\n      <ion-item>\n        <img src="assets/img/jhy.jpg">\n      </ion-item>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngSwitchCase="\'payFor\'">\n    <ion-item>\n      <img src="assets/img/zhifu.jpg">\n    </ion-item>\n  </ion-list>\n</div>\n\n<ion-card>\n  <ion-card-header>\n    <ion-icon name="notifications"></ion-icon>\n    温馨小提示：\n  </ion-card-header>\n  <ion-card-content>\n    <p>\n      请长按图片，以便微信识别二维码。\n    </p>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__first_first__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cache_cache_global__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    /**
     * Creates an instance of HomePage.
     * @param {Cache} cache
     * @param {NavController} navCtrl
     * @param {DataService} dataService
     * @param {ModalController} modalCtrl
     * @memberof HomePage
     */
    function HomePage(cache, navCtrl, storage, dataService, modalCtrl) {
        this.cache = cache;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
    }
    /**
     * 初始化
     *
     * @memberof HomePage
     */
    HomePage.prototype.ngOnInit = function () {
        // this.storage.get('showFirst').then(val => {
        //   !val && this.presentModal();
        // })
        //获取轮播图片
        this.sliders = this.dataService.getSliders();
        //获取分类项目
        this.categories = this.dataService.getCategories();
        //获取热销商品
        this.hotSail = this.dataService.getHotSail();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.info('home');
    };
    /**
     * 跳转到列表
     *
     * @param {any} category
     * @memberof HomePage
     */
    HomePage.prototype.goList = function (category) {
        // this.navCtrl.push(ListPage, {
        //   category: category
        // });
        this.cache.set('category', category.title);
        this.navCtrl.parent.select(1);
    };
    /**
     * 模态窗体
     *
     * @memberof HomePage
     */
    HomePage.prototype.presentModal = function () {
        this.storage.set('showFirst', true);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__first_first__["a" /* FirstPage */]);
        modal.present({
            animate: false,
            duration: 0
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>香港代购</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of sliders">\n      <img [src]="slide">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-25 *ngFor="let category of categories.slice(0,4)" (click)="goList(category)">\n        <img [src]="category.src" style="border-radius: 50%;">\n        <p>{{category.title}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col width-25 *ngFor="let category of categories.slice(4,8)" (click)="goList(category)">\n        <img [src]="category.src">\n        <p>{{category.title}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-card-header>\n      热销商品\n    </ion-card-header>\n    <ion-card-content>\n      <ion-slides>\n        <ion-slide *ngFor="let slide of hotSail">\n          <ion-grid>\n            <ion-row>\n              <ion-col width-33 *ngFor="let hot of slide" (click)="goList(hot)">\n                <img [src]="hot.src">\n                <p>{{hot.name}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-slide>\n      </ion-slides>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\home\home.html"*/,
        styles: ['home.scss'],
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__cache_cache_global__["a" /* Cache */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__cache_cache_global__["a" /* Cache */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_first_first__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_first_first__["a" /* FirstPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                preloadModules: true
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_first_first__["a" /* FirstPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* DateTime */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_first_first__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_first_first__["a" /* FirstPage */];
        setTimeout(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }, 0 * 1000);
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype._get = function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = state_Change;
            xhr.open('GET', url, true);
            xhr.send(null);
            function state_Change() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(this.response);
                    }
                    else {
                        reject(this.response);
                    }
                }
            }
        });
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(loadingCtrl, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.user = {};
    }
    LoginPage.prototype.login = function () {
        this.presentLoading();
    };
    LoginPage.prototype.presentLoading = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Loging in...",
            duration: 3000
        });
        loader.present();
        setTimeout(function () {
            return _this.loginSuccess();
        }, 3 * 1000);
    };
    LoginPage.prototype.loginSuccess = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-toolbar color="default">\n\n    <ion-title>登录</ion-title>\n\n    <ion-buttons padding end>\n\n      <ion-icon name="cancel"></ion-icon>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)="login()" padding>\n\n    <ion-item>\n\n      <ion-label>用户名</ion-label>\n\n      <ion-input type="text" [(ngModel)]="user.name" name="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>密码</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.password" name="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>记住账号?</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <button style="margin-top:2rem;" ion-button type="submit" block>登录</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.listRoot = __WEBPACK_IMPORTED_MODULE_1__list_list__["a" /* ListPage */];
        this.contactRoot = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    ;
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homeRoot" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="listRoot" tabTitle="商品列表" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="contactRoot" tabTitle="联系我们" tabIcon="chatbubbles"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\zhuxianfu047\Desktop\ionic\purchasing\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map