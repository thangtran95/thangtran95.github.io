webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<footer id=\"contact\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"ft-left wow animated fadeInLeft\">\r\n                    <h4>Liên Hệ</h4>\r\n\r\n                    <div class=\"ft-form\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"usr\">Họ tên:</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"pwd\">Số điện thoại:</label>\r\n                            <input type=\"txt\" class=\"form-control\" id=\"pwd\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"pwd\">Địa chỉ:</label>\r\n                            <input type=\"txt\" class=\"form-control\" id=\"pwd\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"submit\">Gửi</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"ft-right wow animated fadeInRight\">\r\n                    <h4>Kết nối với chúng tôi</h4>\r\n                    <p>Điện thoại: +1 (100)222-23-33</p>\r\n                    <p>Email: info@gmail.com</p>\r\n                    <p>Địa chỉ: 36 Đường Huỳnh Thúc Kháng, Bến Nghé, Quận 1, Hồ Chí Minh</p>\r\n                    <div class=\"maps\">\r\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.5748835251848!2d106.6855493!3d10.76721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f181c80d37b%3A0x11f037e825f6300e!2zMjQ0IEPhu5FuZyBRdeG7s25oLCBQaOG6oW0gTmfFqSBMw6NvLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1519381105609\" width=\"100%\" height=\"200\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<a href=\"javascript:\" id=\"top\"><i class=\"fa fa-chevron-up\"></i></a>\r\n<div class=\"bot-page text-center\">\r\n    <p>© 2017 Hebes . All Rights Reserved | Design by <a href=\"https://hbbsolution.com/vi\"> HBBS Group</a> <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> <a href=\"#\"><i class=\"fa fa-google-plus\"></i></a> <a href=\"#\"><i class=\"fa fa-instagram\"></i></a></p>\r\n</div>    "

/***/ }),

/***/ "../../../../../src/app/Components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "footer-page",
            template: __webpack_require__("../../../../../src/app/Components/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "header-page",
            template: __webpack_require__("../../../../../src/app/Components/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <article class=\"banner\" >\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div class=\"txt-banner-top\">\n                        <h2>Ứng dụng tuyệt vời cho cuộc sống thêm xinh tươi!</h2>\n                        <p>Cùng khám phá những thức uống hảo hạng tại Trà sữa Hoa Hậu</p>\n                        <ul class=\"ed-ul\">\n                            <li><a target=\"_blank\" href=\"#\"><img src=\"assets/public/images/appstore.png\"></a></li>\n                            <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.hbbs.hebes\"><img src=\"assets/public/images/googleplay.png\"></a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-5\">\n                    <div class=\"ed-pic-ban\">\n                        <img src=\"assets/public/images/iphone-1.png\" class=\"img-responsive\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"welcome\" id=\"mobile\">\n        <div class=\"container\">\n            <div class=\"col-md-4\">\n                <div class=\"pic-welcome\">\n                    <img src=\"assets/public/images/iphone-3.png\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"txt-welcome\">\n                    <ul>\n                        <li>\n                            <img src=\"assets/public/images/icon-1.png\">\n                            <div>\n                                <h4>THIẾT KẾ SÁNG TẠO</h4>\n                                <p>Ứng dụng Hebes với màu hồng trẻ trung thích hợp với các bạn tuổi teen năng động. Hebes App tương thích với giao diện điện thoại giúp người dùng dễ dàng sử dụng.</p>\n                            </div>\n                        </li>\n                    </ul>\n\n                    <ul>\n                        <li>\n                            <img src=\"assets/public/images/icon-2.png\">\n                            <div>\n                                <h4>DỄ DÀNG SỬ DỤNG</h4>\n                                <p>Với Hebes App, bạn có thể mua ngay sản phẩm yêu thích dù đang làm gì hay ở đâu chỉ cần điện thoại thông minh có kết nối internet.</p>\n                            </div>\n                        </li>\n                    </ul>\n\n                    <ul>\n                        <li>\n                            <img src=\"assets/public/images/icon-3.png\">\n                            <div>\n                                <h4>TRẢI NGHIỆM TUYỆT VỜI</h4>\n                                <p>Ứng dụng Hebes App giúp bạn nhanh chóng xác định được các vị trí chi nhánh cửa hàng gần nhất trong chuỗi hệ thống quá Trà Sữa Hebes.</p>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"branch\" id=\"branch\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"txt-branch-right\">\n                        <h2>Thương hiệu</h2>\n                        <p>Hebes Tea House là quán trà sữa ngọt ngào được ra đời bởi cô chủ \"Hoa hậu quốc dân Phạm Hương\" nhằm phục vụ những vị khách tuổi teen. Không gian sống ảo tông màu hồng kèm theo view đẹp khiến quán trà sữa Hebes của Hoa hậu Phạm Hương trên đường Huỳnh Thúc Kháng gây ấn tượng với phái nữ ngay từ khi khai trương.</p>\n                        <a data-toggle=\"modal\" data-target=\"#myModal\" href=\"#\"><img src=\"assets/public/images/pic-2.png\" class=\"img-responsive\"></a>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"txt-branch-left\">\n                        <img src=\"assets/public/images/pic-1.png\" class=\"img-responsive\">\n                        <p>Được nhiều thực khách lựa chọn nhất là trà sữa bông gòn với chiếc kẹo bông to đặt bên trên ly trà sữa, đồng thời làm \"đạo cụ\" chụp hình lý tưởng. Những bạn ăn kiêng nên lưu ý lựa chọn những loại trà có kem sữa phù hợp vì đồ uống này khá béo ngọt. Giá đồ uống ở đây từ 38.000 đến 58.000 đồng/ly.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <iframe id=\"closevideo\" width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/lBoo3wAFLKQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                </div>\n\n            </div>\n        </div>\n    </article>\n\n    <article class=\"product\" id=\"product\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title-products text-center\">\n                    <h2>Sản phẩm</h2>\n                    <div class=\"btn-view\">\n                        <a [routerLink]=\"['/product']\"><i class=\"fa fa-caret-right\"></i> Xem thêm</a>\n                    </div>\n                </div>  \n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <div class=\"ed-product\">\n                        <img src=\"assets/public/images/product-1.jpg\" class=\"img-responsive\">\n                        <a [routerLink]=\"['/productdetail']\">\n                            <p>Strawberry Machiato đã rất “hút” khách bởi hương vị khá lạ, đậm đà nhất là các loại trà sủi bọt phải công nhận một điều là “càng uống càng mê” đấy nhé!</p>\n                            <div class=\"ed-txt-plus\">\n                                <i class=\"fa fa-plus\"></i>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <div class=\"ed-product\">\n                        <img src=\"assets/public/images/product-2.jpg\" class=\"img-responsive\">\n                        <a [routerLink]=\"['/productdetail']\">\n                            <p>Hai thức uống ấn tượng nhất là Strawberry Machiato và Mango Machiato phải gọi là xuất sắc sẽ không làm bạn thất vọng.</p>\n                            <div class=\"ed-txt-plus\">\n                                <i class=\"fa fa-plus\"></i>\n                            </div>\n                        </a>\n                    </div>\n\n                    <div class=\"ed-product\">\n                        <img src=\"assets/public/images/product-3.jpg\" class=\"img-responsive\">\n                        <a [routerLink]=\"['/productdetail']\">\n                            <p>Trà tuy để trong bình nhưng là trà lạnh, trước khi uống thì mình sẽ đổ cồn vào phần đế bên dưới để khói lạnh tỏa ra.</p>\n                            <div class=\"ed-txt-plus\">\n                                <i class=\"fa fa-plus\"></i>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <div class=\"ed-product\">\n                        <img src=\"assets/public/images/product-4.jpg\" class=\"img-responsive\">\n                        <a [routerLink]=\"['/productdetail']\">\n                            <p>Cotton Cafe/Milk Tea của Hebes với lớp kẹo bông gòn ngọt lịm, hòa quyện cùng hương vị cafe và trà sữa đậm đà thơm ngon.</p>\n                            <div class=\"ed-txt-plus\">\n                                <i class=\"fa fa-plus\"></i>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <div class=\"ed-product\">\n                        <img src=\"assets/public/images/product-5.jpg\" class=\"img-responsive\">\n                        <a [routerLink]=\"['/productdetail']\">\n                            <p>Mango Machiato với hương vị thanh ngoạt cùa xoài và kem hoà quyện lại, hứa hẹn sẽ mang lại cho bạn một cảm giác thật tuyệt vời và sảng khoái.</p>\n                            <div class=\"ed-txt-plus\">\n                                <i class=\"fa fa-plus\"></i>\n                            </div>\n                        </a>\n                    </div>\n\n                    <div class=\"ed-product\">\n                        <img src=\"assets/public/images/product-6.jpg\" class=\"img-responsive\">\n                        <a [routerLink]=\"['/productdetail']\">\n                            <p>Lớp cream phô mai béo béo mằn mặn hòa quyện vào mùi trà sữa chắc chắn sẽ mang hương vị “ngất ngây con gà tây” cho các tín đồ trà sữa và phô mai. .</p>\n                            <div class=\"ed-txt-plus\">\n                                <i class=\"fa fa-plus\"></i>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"download\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"welcome-left\">\n                        <img src=\"assets/public/images/iphone-2.png\" class=\"img-responsive\">\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"welcome-right\">\n                        <h2>Tải miễn phí</h2>\n                        <p>Ứng dụng tuyệt vời cho cuộc sống thêm xinh tươi!</p>\n                        <ul class=\"ed-ul\">\n                            <li><a target=\"_blank\" href=\"#\"><img src=\"assets/public/images/appstore.png\"></a></li>\n                            <li><a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.hbbs.hebes\"><img src=\"assets/public/images/googleplay.png\"></a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"count\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"ed-count text-center\">\n                        <i class=\"fa fa-cloud-download\"></i>\n                        <h4>Tải Ứng dụng</h4>\n                        <h4>1300</h4>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"ed-count text-center\">\n                        <i class=\"fa fa-heart\"></i>\n                        <h4>Khách hàng thân thiết</h4>\n                        <h4>1020</h4>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"ed-count text-center\">\n                        <i class=\"fa fa-user\"></i>\n                        <h4>Sản phẩm bán chạy</h4>\n                        <h4>1120</h4>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"ed-count text-center\">\n                        <i class=\"fa fa-star\"></i>\n                        <h4>Đối tác</h4>\n                        <h4>501</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"promotion\" id=\"promotion\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"title-promotion text-center\">\n                        <h2>Khuyến mãi</h2>\n                    </div>\n                </div>\n                <div class=\"col-xs-12\" >\n                    <div class=\"carousel-inner\">\n                        <div class=\"item-pro\">\n                            <!-- <img src=\"assets/public/images/slide-1.jpg\" alt=\"Los Angeles\">\n                            <div class=\"btn-promotion\">\n                                <a href=\"#\">Xem tất cả</a>\n                            </div> -->\n\n                            <div class=\"ed-product ed-product-1\">\n                                <img src=\"assets/public/images/slide-1.jpg\" class=\"img-responsive\">\n                                <a href=\"#\">\n\n                                    <div class=\"ed-txt-plus ed-plus-2\">\n                                        <i class=\"fa fa-arrow-right\"></i>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"customer\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"box-customer\">\n                        <div class=\"one-customer\">\n                            <p>Quán của hoa hậu Phạm Hương nên trang trí tông hồng cute ghê. Trước khi review thì mình có lên facebook quán tìm xem thì thấy khuyến mãi quá trời luôn. Chưa đọc kĩ nhưng ham hố quán hoa hậu nên đi uống thử liền. Được gặp mặt thần tượng thích ơi là thích!</p>\n                        </div>\n                        <div class=\"avartar\">\n                            <img src=\"assets/public/images/avar-1.png\">\n                            <h4>Chi Chi Nguyễn</h4>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                    <div class=\"box-customer\">\n                        <div class=\"one-customer\">\n                            <p>Đây là lần đầu tiên mình uống ở đây. Ấn tượng đầu tiên khi bước vào quán là các bạn nhân viên thân thiện, không chảnh. Lúc mình và bạn mình order thì hơi lâu vì lần đầu tiên uống nên không biết uống gì, các bạn nhân viên không tỏ thái độ khó chịu như các quán khác.</p>\n                        </div>\n                        <div class=\"avartar\">\n                            <img src=\"assets/public/images/avar-2.png\">\n                            <h4>Thảo Mi</h4>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-4\">\n                    <div class=\"box-customer\">\n                        <div class=\"one-customer\">\n                            <p> Mình order matcha latte, bạn mình uống matcha machiato. Matcha latte thì vị matcha không đủ đã với mình, mình không thích cho lắm. Mình uống thử cái matcha machiato thì mình thấy rất ngon và rất thích, lần sau đi chắc chắn sẽ uống matcha machiato.</p>\n                        </div>\n                        <div class=\"avartar\">\n                            <img src=\"assets/public/images/avar-3.png\">\n                            <h4>Trúc Đặng</h4>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <article class=\"news\" id=\"news\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title-promotion text-center\">\n                    <h2>Tin tức nổi bật</h2>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"box-news-full\">\n                        <a [routerLink]=\"['/newsdetail']\"><img src=\"assets/public/images/news-1.jpg\" class=\"img-responsive\"></a>\n                        <div class=\"row infor-news-full\">\n                            <div class=\"col-xs-4 padr0 text-center date-post\">\n                                <h2>26</h2>\n                                <p>Tháng 6</p>\n                            </div>\n                            <div class=\"col-xs-8 title-post\">\n                                <a [routerLink]=\"['/newsdetail']\"><h2>Cập nhật ngay những quán ăn vừa ra mắt của nghệ sĩ Việt</h2></a>\n                            </div>\n                        </div>\n                        <div class=\"txt-news-full\">\n                            <p>Gần đây giới trẻ lại được dịp xôn xao với quán trà sữa mới mở ngay tại khu trung tâm quận 1 với không gian ngọt lịm, hồng mọi góc cạnh, Hebes Tea House and Cafe. Hebes chính là đứa con tinh thần của Hoa hậu Phạm Hương được mở ra để đáp ứng nhu cầu của giới trẻ hiện nay, không chỉ là quán bán trà sữa đơn thuần mà còn nhiều loại nước đa dạng khác nhau, thu hút khách hàng bởi không gian gần gũi, nhẹ nhàng.</p>\n                            <a [routerLink]=\"['/newsdetail']\"><i class=\"fa fa-arrow-right\"></i> Chi tiết</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"box-news-full\">\n                        <a [routerLink]=\"['/newsdetail']\"><img src=\"assets/public/images/news-2.jpg\" class=\"img-responsive\"></a>\n                        <div class=\"row infor-news-full\">\n                            <div class=\"col-xs-4 padr0 text-center date-post\">\n                                <h2>6</h2>\n                                <p>Tháng 5</p>\n                            </div>\n                            <div class=\"col-xs-8 title-post\">\n                                <a [routerLink]=\"['/newsdetail']\"><h2>4 quán trà sữa của sao Việt luôn đông khách ở trung tâm Sài Gòn</h2></a>\n                            </div>\n                        </div>\n                        <div class=\"txt-news-full\">\n                            <p>Không gian sống ảo tông màu hồng kèm theo view đẹp khiến quán trà sữa Hebes của Hoa hậu Phạm Hương trên đường Huỳnh Thúc Kháng gây ấn tượng với phái nữ ngay từ khi khai trương.</p>\n                            <a [routerLink]=\"['/newsdetail']\"><i class=\"fa fa-arrow-right\"></i> Chi tiết</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"box-news-full\">\n                        <a [routerLink]=\"['/newsdetail']\"><img src=\"assets/public/images/news-3.jpg\" class=\"img-responsive\"></a>\n                        <div class=\"row infor-news-full\">\n                            <div class=\"col-xs-4 padr0 text-center date-post\">\n                                <h2>2</h2>\n                                <p>Tháng 7</p>\n                            </div>\n                            <div class=\"col-xs-8 title-post\">\n                                <a [routerLink]=\"['/newsdetail']\"><h2>Xếp hàng check-in quán trà sữa “người nổi tiếng”</h2></a>\n                            </div>\n                        </div>\n                        <div class=\"txt-news-full\">\n                            <p>Quán trà sữa của “Người đẹp quốc dân” mang tên HEBES tọa độ tại số 36 Huỳnh Thúc Kháng, quận 1, TP HCM. Quán được chăm chút khá kĩ lưỡng cả về mặt không gian và hình thức sản phẩm.Quán có tone màu hồng là chủ đạo thích hợp cho bạn gái sống ảo.</p>\n                            <a [routerLink]=\"['/newsdetail']\"><i class=\"fa fa-arrow-right\"></i> Chi tiết</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"btn-list-news\">\n                    <a [routerLink]=\"['/news']\">Xem thêm</a>\n                </div>\n                \n            </div>\n        </div>\n    </article>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/Components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/Components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  news works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var NewsComponent = /** @class */ (function () {
    function NewsComponent(http) {
        this.http = http;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/Components/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/newsdetail/newsdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/newsdetail/newsdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  newsdetail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/newsdetail/newsdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var NewsdetailComponent = /** @class */ (function () {
    function NewsdetailComponent(http) {
        this.http = http;
    }
    NewsdetailComponent.prototype.ngOnInit = function () {
    };
    NewsdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newsdetail',
            template: __webpack_require__("../../../../../src/app/Components/newsdetail/newsdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/newsdetail/newsdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsdetailComponent);
    return NewsdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ProductComponent = /** @class */ (function () {
    function ProductComponent(http) {
        this.http = http;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/Components/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/productdetail/productdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/productdetail/productdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  productdetail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/Components/productdetail/productdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ProductdetailComponent = /** @class */ (function () {
    function ProductdetailComponent(http) {
        this.http = http;
    }
    ProductdetailComponent.prototype.ngOnInit = function () {
    };
    ProductdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productdetail',
            template: __webpack_require__("../../../../../src/app/Components/productdetail/productdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/productdetail/productdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductdetailComponent);
    return ProductdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_home_home_component__ = __webpack_require__("../../../../../src/app/Components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_news_news_component__ = __webpack_require__("../../../../../src/app/Components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_product_product_component__ = __webpack_require__("../../../../../src/app/Components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_newsdetail_newsdetail_component__ = __webpack_require__("../../../../../src/app/Components/newsdetail/newsdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_productdetail_productdetail_component__ = __webpack_require__("../../../../../src/app/Components/productdetail/productdetail.component.ts");






var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__Components_home_home_component__["a" /* HomeComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_2__Components_news_news_component__["a" /* NewsComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_3__Components_product_product_component__["a" /* ProductComponent */] },
    { path: 'newsdetail', component: __WEBPACK_IMPORTED_MODULE_4__Components_newsdetail_newsdetail_component__["a" /* NewsdetailComponent */] },
    { path: 'productdetail', component: __WEBPACK_IMPORTED_MODULE_5__Components_productdetail_productdetail_component__["a" /* ProductdetailComponent */] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var appRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header-page></header-page>\n\n<!-- <app-home></app-home> -->\n<router-outlet></router-outlet>\n\n\n<footer-page></footer-page>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_header_header_component__ = __webpack_require__("../../../../../src/app/Components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_footer_footer_component__ = __webpack_require__("../../../../../src/app/Components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_home_home_component__ = __webpack_require__("../../../../../src/app/Components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_news_news_component__ = __webpack_require__("../../../../../src/app/Components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_product_product_component__ = __webpack_require__("../../../../../src/app/Components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_newsdetail_newsdetail_component__ = __webpack_require__("../../../../../src/app/Components/newsdetail/newsdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_productdetail_productdetail_component__ = __webpack_require__("../../../../../src/app/Components/productdetail/productdetail.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Components_newsdetail_newsdetail_component__["a" /* NewsdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_productdetail_productdetail_component__["a" /* ProductdetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* appRouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__Components_home_home_component__["a" /* HomeComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map