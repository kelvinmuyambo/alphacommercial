webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"container\">\r\n      <div class=\"logo\">\r\n        <a [routerLink]=\"['home']\" routerLinkActive=\"active\">\r\n          <span>Alfa</span>Comercial</a>\r\n      </div>\r\n      <div class=\"header-right\">\r\n        <a class=\"account\" [routerLink]=\"['/products', 0]\" routerLinkActive=\"active\">Products</a>\r\n        <a class=\"account\" [routerLink]=\"['aboutus']\" routerLinkActive=\"active\">About Us</a>\r\n        <a class=\"account\" [routerLink]=\"['contactus']\" routerLinkActive=\"active\">Contact Us!</a>\r\n        <a class=\"account phone\">\r\n          <i class=\"ion-android-phone-portrait\"></i> +258 846333373</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n  <!--footer section start-->\r\n  <footer>\r\n    <div class=\"footer-top\">\r\n      <div class=\"container\">\r\n        <div class=\"foo-grids\">\r\n          <div class=\"col-md-6 footer-grid\">\r\n            <h4 class=\"footer-head\">Who We Are?</h4>\r\n            <p>\r\n              Alfa Comercial Limitada is one of the largest specialist and distributors of uniforms, safety footwear,\r\n              safety work wear, Mining, Hardware, Stationery, Coal sample plastics, Fire Equipment, dust\r\n              suppressants, lockouts /tag outs and accessories in Southern Africa\r\n            </p>\r\n            </div>\r\n          <div class=\"col-md-5 col-md-offset-1 footer-grid\">\r\n            <h4 class=\"footer-head\">Contact Us</h4>\r\n            <span class=\"hq\">Our headquarters</span>\r\n            <address>\r\n              <ul class=\"location\">\r\n                <li>\r\n                  <span class=\"glyphicon glyphicon-map-marker\"></span>\r\n                </li>\r\n                <li>CENTER FOR FINANCIAL ASSISTANCE TO DEPOSED NIGERIAN ROYALTY</li>\r\n                <div class=\"clearfix\"></div>\r\n              </ul>\r\n              <ul class=\"location\">\r\n                <li>\r\n                  <span class=\"glyphicon glyphicon-earphone\"></span>\r\n                </li>\r\n                <li>+0 561 111 235</li>\r\n                <div class=\"clearfix\"></div>\r\n              </ul>\r\n              <ul class=\"location\">\r\n                <li>\r\n                  <span class=\"glyphicon glyphicon-envelope\"></span>\r\n                </li>\r\n                <li>\r\n                  <a href=\"mailto:info@example.com\">mail@example.com</a>\r\n                </li>\r\n                <div class=\"clearfix\"></div>\r\n              </ul>\r\n            </address>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bottom text-center\">\r\n      <div class=\"container\">\r\n        <div class=\"footer-logo\">\r\n          <a href=\"index.html\">\r\n            <span>Alfa</span>Comercial</a>\r\n        </div>\r\n        <div class=\"copyrights\">\r\n          <p> © 2018 Alpha Comercial. All Rights Reserved | Website by\r\n            <a href=\"mailto:kelvinmuyambo@gmail.com\"> kelvinm</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!--footer section end-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_categories_categories_component__ = __webpack_require__("./src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_products_products_component__ = __webpack_require__("./src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contactus_contactus_component__ = __webpack_require__("./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_aboutus_aboutus_component__ = __webpack_require__("./src/app/components/aboutus/aboutus.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_aboutus_aboutus_component__["a" /* AboutusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
                    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_5__components_categories_categories_component__["a" /* CategoriesComponent */] },
                    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_products_products_component__["a" /* ProductsComponent */] },
                    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_product_product_component__["a" /* ProductComponent */] },
                    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_8__components_contactus_contactus_component__["a" /* ContactusComponent */] },
                    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_9__components_aboutus_aboutus_component__["a" /* AboutusComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-banner banner text-center\">\n  <div class=\"container\">\n    <h1>\n      ALFA COMERCIAL LIMITADA\n    </h1>\n    <hr/>\n    <h3 class=\"slogan\">{{slogan}}</h3>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br/>\n  <h2 class=\"page-title\">About\n    <span>Alpha</span>\n  </h2>\n  <br/>\n  <p>\n    <b>Alfa Comercial Limitada</b> is one of the largest specialist and distributors of uniforms, safety footwear, safety work\n    wear, Mining, Hardware, Stationery, Coal sample plastics, Fire Equipment, dust suppressants, lockouts /tag outs and accessories\n    in Southern Africa. We have built a reputation based on excellent service, competitive pricing and a wide range of top\n    brands and styles. Brands include USG, Jonssons, Bova, Lemaitre, Bell, John Drake, Bova Leather Combat boots, Magnum,\n    Bata, Hi-tec, Fram, Bronx Safety, amongst others. We pride ourselves on having one of the biggest selections of uniforms,\n    footwear and safety accessories in the country.\n  </p>\n  <br/>\n  <p>\n    We have a central workwear depot & sales department in Tete. Our service team in place enables us to process and dispatch\n    local and international orders efficiently allowing us to offer our customers great service and excellent pricing. Our\n    distribution doesn’t stop there; we also take orders from the rest of Mozambique and beyond the borders. Uniforms & Safety\n    Gear supplies to a large cross-section of both business and private enterprises, including the automotive industry, mining\n    industry, municipalities, manufacturers, labour brokers and construction companies, to name a few\n  </p>\n  <br/>\n  <p>\n    We supply resellers, wholesalers and private individuals who do not have direct access to the various safety uniforms, footwear\n    and work wear factories.\n  </p>\n  <br/>\n  <p>\n      Should you require pricing for safety uniforms, footwear and/or industrial workwear, please contact\n      Uniforms & Safety Gear and we will provide you with a competitive quotation\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
        var _this = this;
        this.slogan1 = "Get to know us a better.";
        this.count = 0;
        this.getSlogan();
        this.interval = setInterval(function () {
            _this.getSlogan();
            _this.count++;
        }, 100);
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent.prototype.getSlogan = function () {
        if (this.count > this.slogan1.length + 20)
            this.count = 0;
        var temp = this.slogan1.split("").slice(0, this.count);
        this.slogan = temp.join("");
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aboutus',
            template: __webpack_require__("./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("./src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  categories works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-banner banner text-center\">\n  <div class=\"container\">    \n    <h1>\n      ALFA COMERCIAL LIMITADA     \n    </h1>\n    <hr/>\n    <h3 class=\"slogan\">{{slogan}}</h3>\n  </div>\n</div>\n<div class=\"container\">\n  <br/>\n  <h2 class=\"page-title\">Contact <span>Alpha</span></h2>\n  <div class=\"feedback main-grid-border\">\n        <div class=\"feed-back\">\n          <h3>Tell us what you think of us</h3>\n          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n          <div class=\"feed-back-form\">\n            <form>\n            <span>Your Details</span>\n                <input type=\"text\" value=\"First Name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'First Name';}\">\n                <input type=\"text\" value=\"Last Name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Last Name';}\">\n                <input type=\"text\" value=\"Email\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Email';}\">\n                <input type=\"text\" value=\"Phone No\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Phone No';}\">\n                <span>Is there anything you would like to tell us?</span>\n                <textarea type=\"text\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Message...';}\" required=\"\">Message...</textarea>\n                <input type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n              </form>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
        var _this = this;
        this.slogan1 = "Make inquiries, Place your orders, Give us feedback!";
        this.count = 0;
        this.getSlogan();
        this.interval = setInterval(function () {
            _this.getSlogan();
            _this.count++;
        }, 100);
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.getSlogan = function () {
        if (this.count > this.slogan1.length + 20)
            this.count = 0;
        var temp = this.slogan1.split("").slice(0, this.count);
        this.slogan = temp.join("");
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactus',
            template: __webpack_require__("./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__("./src/app/components/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-banner banner text-center\">\n  <div class=\"container\">\n    <h1>\n      ALFA COMERCIAL LIMITADA\n    </h1>\n    <hr/>\n    <h3 class=\"slogan\">{{slogan}}</h3>\n  </div>\n</div>\n<!-- content-starts-here -->\n<div class=\"content\">\n\n  <div class=\"trending-ads\">\n    <div class=\"container\">\n      <!-- slider -->\n      <div class=\"trend-ads\">\n        <h2 class=\"page-title\">Trending Products</h2>\n        <ul id=\"flexiselDemo3\">\n          <li>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p1.jpg\" />\n                <span class=\"price\">&#36; 450</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>There are many variations of passages</h5>\n                <span>1 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p2.jpg\" />\n                <span class=\"price\">&#36; 399</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>Lorem Ipsum is simply dummy</h5>\n                <span>3 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p3.jpg\" />\n                <span class=\"price\">&#36; 199</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>It is a long established fact that a reader</h5>\n                <span>8 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p4.jpg\" />\n                <span class=\"price\">&#36; 159</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>passage of Lorem Ipsum you need to be</h5>\n                <span>19 hour ago</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p5.jpg\" />\n                <span class=\"price\">&#36; 1599</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>There are many variations of passages</h5>\n                <span>1 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p6.jpg\" />\n                <span class=\"price\">&#36; 1099</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>passage of Lorem Ipsum you need to be</h5>\n                <span>1 day ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p7.jpg\" />\n                <span class=\"price\">&#36; 109</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>It is a long established fact that a reader</h5>\n                <span>9 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p8.jpg\" />\n                <span class=\"price\">&#36; 189</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>Lorem Ipsum is simply dummy</h5>\n                <span>3 hour ago</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p9.jpg\" />\n                <span class=\"price\">&#36; 2599</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>Lorem Ipsum is simply dummy</h5>\n                <span>3 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p10.jpg\" />\n                <span class=\"price\">&#36; 3999</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>It is a long established fact that a reader</h5>\n                <span>9 hour ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p11.jpg\" />\n                <span class=\"price\">&#36; 2699</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>passage of Lorem Ipsum you need to be</h5>\n                <span>1 day ago</span>\n              </div>\n            </div>\n            <div class=\"col-md-3 biseller-column\">\n              <a href=\"single.html\">\n                <img src=\"assets/images/p12.jpg\" />\n                <span class=\"price\">&#36; 899</span>\n              </a>\n              <div class=\"ad-info\">\n                <h5>There are many variations of passages</h5>\n                <span>1 hour ago</span>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"categories\">\n      <br/>\n      <br/>\n      <br/>\n      <div class=\"clearfix\"></div>\n      <h2 class=\"page-title\">All Product Categories</h2>\n      <div class=\"container\">\n        <div class=\"col-md-3 focus-grid\">\n          <a [routerLink]=\"['/product', 1]\" routerLinkActive=\"active\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa ion-tshirt-outline\"></i>\n                </div>\n                <h4 class=\"clrchg\">Overalls & Workwear</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab2\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa fa-key\"></i>\n                </div>\n                <h4 class=\"clrchg\"> Security Uniforms & Accessories</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab3\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa ion-tshirt\"></i>\n                </div>\n                <h4 class=\"clrchg\">Golf Shirts & T-shirts</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab4\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa ion-umbrella\"></i>\n                </div>\n                <h4 class=\"clrchg\">Rainwear & Reflective Bibs</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab5\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa ion-android-walk\"></i>\n                </div>\n                <h4 class=\"clrchg\">Bova Footwear</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab6\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa fa-road\"></i>\n                </div>\n                <h4 class=\"clrchg\">Road Safety Equipment</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab7\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa fa-fire-extinguisher\"></i>\n                </div>\n                <h4 class=\"clrchg\">Fire Equipment</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"col-md-3 focus-grid\">\n          <a href=\"categories.html#parentVerticalTab8\">\n            <div class=\"focus-border\">\n              <div class=\"focus-layout\">\n                <div class=\"focus-image\">\n                  <i class=\"fa fa-asterisk\"></i>\n                </div>\n                <h4 class=\"clrchg\">Miscellaneous</h4>\n              </div>\n            </div>\n          </a>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"mobile-app\">\n    <div class=\"container\">\n      <div class=\"col-md-5 app-left\">\n        <a href=\"mobileapp.html\">\n          <img src=\"assets/images/app.png\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"col-md-7 app-right\">\n        <h3>Resale App is the\n          <span>Easiest</span> way for Selling and buying second-hand goods</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor Sed bibendum varius euismod. Integer eget\n          turpis sit amet lorem rutrum ullamcorper sed sed dui. vestibulum odio at elementum. Suspendisse et condimentum\n          nibh.</p>\n        <div class=\"app-buttons\">\n          <div class=\"app-button\">\n            <a href=\"#\">\n              <img src=\"assets/images/1.png\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"app-button\">\n            <a href=\"#\">\n              <img src=\"assets/images/2.png\" alt=\"\">\n            </a>\n          </div>\n          <div class=\"clearfix\"> </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.slogan1 = "We are an amazing...!!!!!!!";
        this.count = 0;
        this.getSlogan();
        this.interval = setInterval(function () {
            _this.getSlogan();
            _this.count++;
        }, 200);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.getSlogan = function () {
        var temp = this.slogan1.split("").slice(0, this.count);
        this.slogan = temp.join("");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--single-page-->\n\t<div class=\"single-page main-grid-border\">\n      <div class=\"container\">\n        <ol class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\n          <li><a href=\"index.html\">Home</a></li>\n          <li><a href=\"all-classifieds.html\">All Ads</a></li>\n          <li class=\"active\"><a href=\"mobiles.html\">Mobiles</a></li>\n          <li class=\"active\">Mobile Phone</li>\n        </ol>\n        <div class=\"product-desc\">\n          <div class=\"col-md-7 product-view\">\n            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>\n            <p> <i class=\"glyphicon glyphicon-map-marker\"></i><a href=\"#\">state</a>, <a href=\"#\">city</a>| Added at 06:55 pm, Ad ID: 987654321</p>\n            <div class=\"flexslider\">\n              <ul class=\"slides\">\n                <li data-thumb=\"assets/images/ss1.jpg\">\n                  <img src=\"assets/images/ss1.jpg\" />\n                </li>\n                <li data-thumb=\"assets/images/ss2.jpg\">\n                  <img src=\"assets/images/ss2.jpg\" />\n                </li>\n                <li data-thumb=\"assets/images/ss3.jpg\">\n                  <img src=\"assets/images/ss3.jpg\" />\n                </li>\n              </ul>\n            </div>\n            <div class=\"product-details\">\n              <h4>Brand : <a href=\"#\">Company name</a></h4>\n              <h4>Views : <strong>150</strong></h4>\n              <p><strong>Display </strong>: 1.5 inch HD LCD Touch Screen</p>\n              <p><strong>Summary</strong> : It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>\n            \n            </div>\n          </div>\n          <div class=\"col-md-5 product-details-grid\">\n            <div class=\"item-price\">\n              <div class=\"product-price\">\n                <p class=\"p-price\">Price</p>\n                <h3 class=\"rate\">$ 259</h3>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"condition\">\n                <p class=\"p-price\">Condition</p>\n                <h4>Good</h4>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"itemtype\">\n                <p class=\"p-price\">Item Type</p>\n                <h4>Phones</h4>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n            <div class=\"interested text-center\">\n              <h4>Interested in this Ad?<small> Contact the Seller!</small></h4>\n              <p><i class=\"glyphicon glyphicon-earphone\"></i>00-85-9875462655</p>\n            </div>\n              <div class=\"tips\">\n              <h4>Safety Tips for Buyers</h4>\n                <ol>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                  <li><a href=\"#\">Contrary to popular belief.</a></li>\n                </ol>\n              </div>\n          </div>\n        <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\t\n      "

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(route) {
        this.route = route;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var array = [];
        this.route.params.forEach(function (p) { return array.push(p); });
    };
    ProductComponent.prototype.getProducts = function (id) {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/components/product/product.component.html"),
            styles: [__webpack_require__("./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-banner banner text-center\">\n  <div class=\"container\">\n    <h1>\n      ALFA COMERCIAL LIMITADA\n    </h1>\n    <hr/>\n    <h3 class=\"slogan\">{{slogan}}</h3>\n  </div>\n</div>\n\n<h2 class=\"page-title\">Our\n  <span>Products</span>\n</h2>\n<br>\n<hr>\n<!--Vertical Tab-->\n<div class=\"categories-section main-grid-border\">\n  <div class=\"container\">\n    <div class=\"category-list\">\n      <div id=\"parentVerticalTab\">\n        <ul class=\"resp-tabs-list hor_1 col-md-3\">\n          <li [routerLink]=\"['/products', 1]\" routerLinkActive=\"active\">\n            <i class=\"fa ion-tshirt-outline\"></i> Overalls & Workwear\n          </li>\n          <li [routerLink]=\"['/products', 2]\" routerLinkActive=\"active\">\n            <i class=\"fa fa-key\"></i> Security Uniforms & Access.\n          </li>\n          <li [routerLink]=\"['/products', 3]\" routerLinkActive=\"active\">\n            <i class=\"fa ion-tshirt\"></i> Golf Shirts & T-shirts\n          </li>\n          <li [routerLink]=\"['/products', 4]\" routerLinkActive=\"active\">\n            <i class=\"fa ion-umbrella\"></i> Rainwear & Reflective Bibs\n          </li>\n          <li [routerLink]=\"['/products', 5]\" routerLinkActive=\"active\">\n            <i class=\"fa ion-android-walk\"></i> Bova Footwear\n          </li>\n          <li [routerLink]=\"['/products', 6]\" routerLinkActive=\"active\">\n            <i class=\"fa fa-road\"></i> Road Safety Equipment\n          </li>\n          <li [routerLink]=\"['/products', 7]\" routerLinkActive=\"active\">\n            <i class=\"fa fa-fire-extinguisher\"></i> Fire Equipment\n          </li>\n          <li [routerLink]=\"['/products', 8]\" routerLinkActive=\"active\">\n            <i class=\"fa fa-asterisk\"></i> Miscellaneous\n          </li>\n        </ul>\n        <div class=\"resp-tabs-container hor_1 col-md-9\">\n          <div *ngFor=\"let product of products\">\n            <div class=\"category\">\n              <div class=\"category-img\">\n                <img src=\"assets/images/cat1.png\" title=\"image\" alt=\"\" />\n              </div>\n              <div class=\"category-info\">\n                <h4>{{product.name}}</h4>\n                <hr/>\n                <p>\n                  {{product.description}}\n                </p>\n                <b>Variance : </b>\n                <i>{{product.variants}}</i>\n                <br/>\n                <br/>\n                <a [routerLink]=\"['/product', product.id]\">View</a>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Plug-in Initialisation-->\n<script type=\"text/javascript\">\n  $(document).ready(function () {\n\n    //Vertical Tab\n    $('#parentVerticalTab').easyResponsiveTabs({\n      type: 'vertical', //Types: default, vertical, accordion\n      width: 'auto', //auto or any width like 600px\n      fit: true, // 100% fit in a container\n      closed: 'accordion', // Start closed if in accordion view\n      tabidentify: 'hor_1', // The tab groups identifier\n      activate: function (event) { // Callback function if tab is switched\n        var $tab = $(this);\n        var $info = $('#nested-tabInfo2');\n        var $name = $('span', $info);\n        $name.text($tab.text());\n        $info.show();\n      }\n    });\n  });\n</script>\n<!-- //Categories -->"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_product_manager__ = __webpack_require__("./src/app/ts/product-manager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.slogan1 = "Browse through our vast selection of  merchandise!";
        this.count = 0;
        var manager = new __WEBPACK_IMPORTED_MODULE_1__ts_product_manager__["a" /* ProductManager */]();
        this.products = manager.getProducts();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSlogan();
        this.interval = setInterval(function () {
            _this.getSlogan();
            _this.count++;
        }, 200);
    };
    ProductsComponent.prototype.getSlogan = function () {
        var temp = this.slogan1.split("").slice(0, this.count);
        this.slogan = temp.join("");
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/components/products/products.component.html"),
            styles: [__webpack_require__("./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/product-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductType; });
var ProductType;
(function (ProductType) {
    ProductType[ProductType["overalls"] = 1] = "overalls";
    ProductType[ProductType["security"] = 2] = "security";
    ProductType[ProductType["shirts"] = 3] = "shirts";
    ProductType[ProductType["rain"] = 4] = "rain";
    ProductType[ProductType["shoes"] = 5] = "shoes";
    ProductType[ProductType["road"] = 6] = "road";
    ProductType[ProductType["fire"] = 7] = "fire";
    ProductType[ProductType["miscellaneous"] = 8] = "miscellaneous";
})(ProductType || (ProductType = {}));


/***/ }),

/***/ "./src/app/ts/product-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_type_enum__ = __webpack_require__("./src/app/product-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("./src/app/ts/product.ts");


var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this._products = [];
        this.loadProducts();
    }
    ProductManager.prototype.getProducts = function () {
        return this._products;
    };
    ProductManager.prototype.getProductByType = function (type) {
        return this._products.filter(function (p) { return p.type == type; });
    };
    ProductManager.prototype.loadProducts = function () {
        this.appendProduct(new __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */](1, __WEBPACK_IMPORTED_MODULE_0__product_type_enum__["a" /* ProductType */].overalls, "2 Piece Conti Suit", "Jacket features include two side pockets and chest pocket. Pants with ½ elasticated waistband, two side pockets and one back pocket. Reinforced and bar tacked seams.", "Royal Blue, Navy, Black, Grey, Red, Yellow, Emerald Green, White, Khaki, Orange", "image"));
        this.appendProduct(new __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */](2, __WEBPACK_IMPORTED_MODULE_0__product_type_enum__["a" /* ProductType */].overalls, "Boiler Suit", "Jacket includes a chest pocket. Pants with ½ elasticated Waistband, two side pockets and one back pocket. Reinforced and bar tacked seams.", "Royal Blue, Navy, Black, Grey, Red, Yellow, Emerald Green, White, Khaki, Orange", "image"));
    };
    ProductManager.prototype.appendProduct = function (product) {
        this._products.push(product);
    };
    return ProductManager;
}());



/***/ }),

/***/ "./src/app/ts/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, type, name, description, variants, image) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.variants = variants;
        this.image = image;
        this.name = name;
    }
    return Product;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map