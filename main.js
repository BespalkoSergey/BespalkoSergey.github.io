(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _btn_group_btn_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn-group/btn-group.component */ "./src/app/btn-group/btn-group.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main/main.component */ "./src/app/main/main/main.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "row", "fixed-top"], [1, "col", "d-flex", "justify-content-center"], [1, "container-lg"], [1, "row", "p-md-5"], [1, "col", "shadow", "bg-dkwhite"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-btn-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_btn_group_btn_group_component__WEBPACK_IMPORTED_MODULE_1__["BtnGroupComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _main_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _btn_group_btn_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btn-group/btn-group.component */ "./src/app/btn-group/btn-group.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main/main.component */ "./src/app/main/main/main.component.ts");
/* harmony import */ var _main_children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/children/contacts/contacts.component */ "./src/app/main/children/contacts/contacts.component.ts");
/* harmony import */ var _main_children_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/children/about-me/about-me.component */ "./src/app/main/children/about-me/about-me.component.ts");
/* harmony import */ var _main_children_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/children/certificates/certificates.component */ "./src/app/main/children/certificates/certificates.component.ts");
/* harmony import */ var _main_children_education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/children/education/education.component */ "./src/app/main/children/education/education.component.ts");
/* harmony import */ var _main_children_hard_skils_hard_skils_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/children/hard-skils/hard-skils.component */ "./src/app/main/children/hard-skils/hard-skils.component.ts");
/* harmony import */ var _main_children_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/children/languages/languages.component */ "./src/app/main/children/languages/languages.component.ts");
/* harmony import */ var _main_children_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/children/my-projects/my-projects.component */ "./src/app/main/children/my-projects/my-projects.component.ts");
/* harmony import */ var _main_children_soft_skils_soft_skils_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/children/soft-skils/soft-skils.component */ "./src/app/main/children/soft-skils/soft-skils.component.ts");
/* harmony import */ var _main_children_work_experience_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/children/work-experience/work-experience/work-experience.component */ "./src/app/main/children/work-experience/work-experience/work-experience.component.ts");
/* harmony import */ var _main_children_work_experience_children_field_system_administrator_field_system_administrator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/children/work-experience/children/field-system-administrator/field-system-administrator.component */ "./src/app/main/children/work-experience/children/field-system-administrator/field-system-administrator.component.ts");
/* harmony import */ var _main_children_work_experience_children_front_end_developer_freelance_front_end_developer_freelance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/children/work-experience/children/front-end-developer-freelance/front-end-developer-freelance.component */ "./src/app/main/children/work-experience/children/front-end-developer-freelance/front-end-developer-freelance.component.ts");
/* harmony import */ var _main_children_work_experience_children_handyman_handyman_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/children/work-experience/children/handyman/handyman.component */ "./src/app/main/children/work-experience/children/handyman/handyman.component.ts");
/* harmony import */ var _main_children_work_experience_children_roofer_roofer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/children/work-experience/children/roofer/roofer.component */ "./src/app/main/children/work-experience/children/roofer/roofer.component.ts");
/* harmony import */ var _main_children_work_experience_children_shop_assistant_shop_assistant_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/children/work-experience/children/shop-assistant/shop-assistant.component */ "./src/app/main/children/work-experience/children/shop-assistant/shop-assistant.component.ts");
/* harmony import */ var _main_children_work_experience_children_workshop_foreman_workshop_foreman_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main/children/work-experience/children/workshop-foreman/workshop-foreman.component */ "./src/app/main/children/work-experience/children/workshop-foreman/workshop-foreman.component.ts");
/* harmony import */ var _main_children_work_experience_children_manager_manager_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main/children/work-experience/children/manager/manager.component */ "./src/app/main/children/work-experience/children/manager/manager.component.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _btn_group_btn_group_component__WEBPACK_IMPORTED_MODULE_3__["BtnGroupComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _main_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _main_children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"],
        _main_children_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
        _main_children_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_8__["CertificatesComponent"],
        _main_children_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
        _main_children_hard_skils_hard_skils_component__WEBPACK_IMPORTED_MODULE_10__["HardSkilsComponent"],
        _main_children_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__["LanguagesComponent"],
        _main_children_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__["MyProjectsComponent"],
        _main_children_soft_skils_soft_skils_component__WEBPACK_IMPORTED_MODULE_13__["SoftSkilsComponent"],
        _main_children_work_experience_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_14__["WorkExperienceComponent"],
        _main_children_work_experience_children_field_system_administrator_field_system_administrator_component__WEBPACK_IMPORTED_MODULE_15__["FieldSystemAdministratorComponent"],
        _main_children_work_experience_children_front_end_developer_freelance_front_end_developer_freelance_component__WEBPACK_IMPORTED_MODULE_16__["FrontEndDeveloperFreelanceComponent"],
        _main_children_work_experience_children_handyman_handyman_component__WEBPACK_IMPORTED_MODULE_17__["HandymanComponent"],
        _main_children_work_experience_children_manager_manager_component__WEBPACK_IMPORTED_MODULE_21__["ManagerComponent"],
        _main_children_work_experience_children_roofer_roofer_component__WEBPACK_IMPORTED_MODULE_18__["RooferComponent"],
        _main_children_work_experience_children_shop_assistant_shop_assistant_component__WEBPACK_IMPORTED_MODULE_19__["ShopAssistantComponent"],
        _main_children_work_experience_children_workshop_foreman_workshop_foreman_component__WEBPACK_IMPORTED_MODULE_20__["WorkshopForemanComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _btn_group_btn_group_component__WEBPACK_IMPORTED_MODULE_3__["BtnGroupComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _main_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _main_children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"],
                    _main_children_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
                    _main_children_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_8__["CertificatesComponent"],
                    _main_children_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                    _main_children_hard_skils_hard_skils_component__WEBPACK_IMPORTED_MODULE_10__["HardSkilsComponent"],
                    _main_children_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__["LanguagesComponent"],
                    _main_children_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_12__["MyProjectsComponent"],
                    _main_children_soft_skils_soft_skils_component__WEBPACK_IMPORTED_MODULE_13__["SoftSkilsComponent"],
                    _main_children_work_experience_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_14__["WorkExperienceComponent"],
                    _main_children_work_experience_children_field_system_administrator_field_system_administrator_component__WEBPACK_IMPORTED_MODULE_15__["FieldSystemAdministratorComponent"],
                    _main_children_work_experience_children_front_end_developer_freelance_front_end_developer_freelance_component__WEBPACK_IMPORTED_MODULE_16__["FrontEndDeveloperFreelanceComponent"],
                    _main_children_work_experience_children_handyman_handyman_component__WEBPACK_IMPORTED_MODULE_17__["HandymanComponent"],
                    _main_children_work_experience_children_manager_manager_component__WEBPACK_IMPORTED_MODULE_21__["ManagerComponent"],
                    _main_children_work_experience_children_roofer_roofer_component__WEBPACK_IMPORTED_MODULE_18__["RooferComponent"],
                    _main_children_work_experience_children_shop_assistant_shop_assistant_component__WEBPACK_IMPORTED_MODULE_19__["ShopAssistantComponent"],
                    _main_children_work_experience_children_workshop_foreman_workshop_foreman_component__WEBPACK_IMPORTED_MODULE_20__["WorkshopForemanComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/btn-group/btn-group.component.ts":
/*!**************************************************!*\
  !*** ./src/app/btn-group/btn-group.component.ts ***!
  \**************************************************/
/*! exports provided: BtnGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnGroupComponent", function() { return BtnGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/main.service */ "./src/app/services/main.service.ts");



class BtnGroupComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.dropdown = {
            cv: {
                ru: 'Скачать CV',
                eng: 'Download CV'
            },
            language: {
                ru: 'Поменять язык',
                eng: 'Change language'
            }
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
    changeLanguage(language) {
        this.mainService.languageOnSite.next(language);
    }
    getSrc(format) {
        const cv = 'assets/cv/';
        const nameCV = 'Frontend Trainee - Bespalko Sergey';
        return '' + cv + this.languageOnSite + '/' + nameCV + '.' + format;
    }
}
BtnGroupComponent.ɵfac = function BtnGroupComponent_Factory(t) { return new (t || BtnGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
BtnGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtnGroupComponent, selectors: [["app-btn-group"]], decls: 17, vars: 6, consts: [["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["role", "group", 1, "btn-group"], ["id", "btnGroupDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-info", "p-3", "dropdown-toggle"], ["aria-labelledby", "btnGroupDrop1", 1, "dropdown-menu"], [1, "dropdown-item", 3, "download", "href"], ["type", "button", 1, "dropdown-item", 3, "click"]], template: function BtnGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Word ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BtnGroupComponent_Template_button_click_13_listener() { return ctx.changeLanguage("ru"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BtnGroupComponent_Template_button_click_15_listener() { return ctx.changeLanguage("eng"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dropdown["cv"][ctx.languageOnSite], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("download", ctx.getSrc("pdf"))("href", ctx.getSrc("pdf"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("download", ctx.getSrc("docx"))("href", ctx.getSrc("docx"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dropdown["language"][ctx.languageOnSite], " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J0bi1ncm91cC9idG4tZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BtnGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-btn-group',
                templateUrl: './btn-group.component.html',
                styleUrls: ['./btn-group.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/children/contacts/contacts.component */ "./src/app/main/children/contacts/contacts.component.ts");





function HeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.fullName = {
            ru: 'Беспалько Сергей',
            eng: 'Sergey Bespalko'
        };
    }
    ngOnInit() {
        this.getScreenSize();
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
    getScreenSize() {
        if (!this.screenSize)
            this.screenSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        this.mainService.getWindowOnResize()
            .subscribe(data => this.screenSize = {
            width: data.target.innerWidth,
            height: data.target.innerHeight
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 4, consts: [[1, "header"], [1, "row", "bg-asfalt"], ["class", "col-12 col-md-6 text-center", 4, "ngIf"], [1, "col-12", "col-md-6", "d-flex", "flex-column", "justify-content-center"], [1, "d-flex", "flex-column", "justify-content-center", "w-75", "align-self-center", "align-self-md-end"], [1, "text-center", "full-name", "text-nowrap"], [1, "text-center", "prof", "text-nowrap"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "col-12 col-md-6 text-md-center", 4, "ngIf"], [1, "col-12", "col-md-6", "text-center"], ["src", "assets/img/img.jpg", "alt", "", 1, "rounded-circle"], [1, "d-flex", "justify-content-center"], [1, "col-12", "col-md-6", "text-md-center"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Frontend Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize && ctx.screenSize.width < 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fullName[ctx.languageOnSite], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize && ctx.screenSize.width < 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize && ctx.screenSize.width >= 768);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _main_children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/about-me/about-me.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/children/about-me/about-me.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");



class AboutMeComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.aboutMe = {
            ru: `Заинтересован в должности Frontend Trainee. 
    Быстро изучаю новые технологии и применяю в своей работе. 
    Для меня приоритет - эффективная оптимизация рабочего процесса.
    Стремлюсь к личностному и карьерному росту, легко завожу новые контакты.
    Вдохновляет и мотивирует меня это признание достижений и развитие новых навыков.`,
            eng: 'Sergey Bespalko'
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 2, vars: 1, template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboutMe[ctx.languageOnSite], "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/certificates/certificates.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/children/certificates/certificates.component.ts ***!
  \**********************************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CertificatesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 4);
} if (rf & 2) {
    const li_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", li_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class CertificatesComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.certificates = {
            title: {
                ru: 'Сертификаты:',
                eng: 'sergey'
            },
            list: [
                'JavaScript Advanced <br/> 2020 CBS',
                'Twitter Bootstrap 4 <br/> 2020 CBS',
                'HTML5 & CSS3 Advanced <br/> 2020 CBS',
                'TypeScript Fundamentals <br/> 2020 CBS',
                'Angular Essential <br/> 2020 CBS',
            ]
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
}
CertificatesComponent.ɵfac = function CertificatesComponent_Factory(t) { return new (t || CertificatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
CertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificatesComponent, selectors: [["app-certificates"]], decls: 6, vars: 2, consts: [[1, "certificates"], [1, "weight600"], [1, "d-flex"], ["class", "font-weight-normal text-nowrap", 3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "font-weight-normal", "text-nowrap", 3, "innerHtml"]], template: function CertificatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CertificatesComponent_li_5_Template, 1, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.certificates.title[ctx.languageOnSite], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certificates.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vY2VydGlmaWNhdGVzL2NlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-certificates',
                templateUrl: './certificates.component.html',
                styleUrls: ['./certificates.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/contacts/contacts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/children/contacts/contacts.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class ContactsComponent {
    constructor(mainService, sanitizer) {
        this.mainService = mainService;
        this.sanitizer = sanitizer;
        this.languageOnSite = 'eng';
        this.contacts = {
            mail: {
                text: 'bespalkoser@gmail.com',
                type: '',
                uri: 'mailto:',
            },
            tel: {
                phone: '+380992326603',
                text: '+38(099) 232 66 03',
                type: '',
                uri: 'tel:',
            },
            skype: {
                text: 'live:bespalkosergey',
                type: '',
                href: 'skype:live:bespalkosergey?chat',
            },
            telegram: {
                text: '@SergeyBespalko',
                type: '',
                href: 'https://t.me/SergeyBespalko',
            },
            linkedin: {
                text: 'linkedIn',
                type: '',
                href: 'https://www.linkedin.com/in/sergey-bespalko-4242941aa/',
            }
        };
    }
    ngOnInit() {
        this.getScreenSize();
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
    getScreenSize() {
        if (!this.screenSize)
            this.screenSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        this.mainService.getWindowOnResize()
            .subscribe(data => this.screenSize = {
            width: data.target.innerWidth,
            height: data.target.innerHeight
        });
    }
    getSanitizedUrl(string) {
        return this.sanitizer.bypassSecurityTrustUrl(string);
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 17, vars: 10, consts: [[1, "col", "d-flex", "justify-content-center"], [1, "contacts", "d-flex", "flex-column", "justify-content-center"], [1, "d-flex", "align-items-center", "mt-3", "text-info", "weight600", "mail", 3, "href"], ["src", "assets/img/mail.svg", "alt", "", 1, "mr-3"], [1, "d-flex", "align-items-center", "my-1", "text-info", "weight600", "tel", 3, "href"], ["src", "assets/img/tel.svg", "alt", "", 1, "mr-3"], [1, "d-flex", "align-items-center", "my-1", "text-info", "weight600", "skype", 3, "href"], ["src", "assets/img/skype.svg", "alt", "", 1, "mr-3"], [1, "d-flex", "align-items-center", "my-1", "text-info", "weight600", "telegram", 3, "href"], ["src", "assets/img/telegram.svg", "alt", "", 1, "mr-3"], [1, "d-flex", "align-items-center", "mb-3", "text-info", "weight600", "linkedin", 3, "href"], ["src", "assets/img/linkedin.svg", "alt", "", 1, "mr-3"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.getSanitizedUrl(ctx.contacts.mail.uri + ctx.contacts.mail.text), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.mail.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.getSanitizedUrl(ctx.contacts.tel.uri + ctx.contacts.tel.phone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.tel.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.getSanitizedUrl(ctx.contacts.skype.href), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.skype.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.contacts.telegram.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.telegram.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.contacts.linkedin.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contacts.linkedin.text, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/education/education.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/children/education/education.component.ts ***!
  \****************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function EducationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 5);
} if (rf & 2) {
    const li_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", li_r1["value"][ctx_r0.languageOnSite], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class EducationComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.education = {
            title: {
                ru: 'Образование:',
                eng: 'sergey'
            },
            krok: {
                ru: `Университет "Крок"<br/>
      Бакалавр<br/>
       с 09.2010 по 06.2014<br/>
      Компьютерные науки<br/>
      Специалист по<br/>
      Информационным системам`,
                eng: `sergey`
            },
            cbs: {
                ru: `CyberBionic Systematics<br/>
      Курс Frontend Developer<br/>
      с 02.2020 по 06.2020`,
                eng: `sergey`
            }
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 8, vars: 8, consts: [[1, "education"], [1, "weight600"], [1, "d-flex"], [1, "d-flex", "flex-column-reverse"], ["class", "font-weight-normal", 3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "font-weight-normal", 3, "innerHtml"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EducationComponent_li_5_Template, 1, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.education.title[ctx.languageOnSite], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.education), 0, 2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/hard-skils/hard-skils.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/children/hard-skils/hard-skils.component.ts ***!
  \******************************************************************/
/*! exports provided: HardSkilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardSkilsComponent", function() { return HardSkilsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HardSkilsComponent_li_4_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
function HardSkilsComponent_li_4_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function HardSkilsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HardSkilsComponent_li_4_img_4_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HardSkilsComponent_li_4_img_5_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", li_r1[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getQuantity(li_r1[1], "checked"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getQuantity(li_r1[1], "unChecked"));
} }
class HardSkilsComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.listOfSkils = [
            ['HTML5 & CSS3', 5],
            ['SASS & SCSS', 4],
            ['JavaScript', 4],
            ['Bootstrap 4', 4],
            ['Gulp 4', 4],
            ['Git', 3],
            ['Node.js', 2],
            ['TypeScript', 5],
            ['Angular', 4],
            ['Figma', 2],
            ['Webpack', 2]
        ];
        this.skils = {
            ru: this.listOfSkils,
            eng: this.listOfSkils
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
    getQuantity(num, state) {
        const arrCheked = new Array(num).fill(1);
        const arrUnChecked = new Array(6).fill(1);
        if (state === 'checked')
            return arrCheked;
        if (state === 'unChecked')
            return arrUnChecked.splice(0, arrUnChecked.length - num);
    }
}
HardSkilsComponent.ɵfac = function HardSkilsComponent_Factory(t) { return new (t || HardSkilsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
HardSkilsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HardSkilsComponent, selectors: [["app-hard-skils"]], decls: 5, vars: 1, consts: [[1, "hard-skils"], [1, "weight600"], ["class", "li font-weight-normal", 4, "ngFor", "ngForOf"], [1, "li", "font-weight-normal"], [1, "name", "text-nowrap"], [1, "exp", "d-flex", "flex-nowrap"], ["class", "circul-checked", "src", "assets/img/checked.svg", "alt", "", 4, "ngFor", "ngForOf"], ["class", "circul-un-checked", "src", "assets/img/unChecked.svg", "alt", "", 4, "ngFor", "ngForOf"], ["src", "assets/img/checked.svg", "alt", "", 1, "circul-checked"], ["src", "assets/img/unChecked.svg", "alt", "", 1, "circul-un-checked"]], template: function HardSkilsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hard skills: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HardSkilsComponent_li_4_Template, 6, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skils[ctx.languageOnSite]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vaGFyZC1za2lscy9oYXJkLXNraWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HardSkilsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hard-skils',
                templateUrl: './hard-skils.component.html',
                styleUrls: ['./hard-skils.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/languages/languages.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/children/languages/languages.component.ts ***!
  \****************************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LanguagesComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", li_r2, " ");
} }
function LanguagesComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 - ", li_r3, " ");
} }
class LanguagesComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.languages = {
            title: {
                ru: 'Владение языками:',
                eng: 'sergey'
            },
            name: {
                ru: ['Английский', 'Чешский', 'Украинский', 'Русский'],
                eng: ['sergey', 'sergey', 'sergey', 'sergey']
            },
            skill: {
                ru: ['базовый', 'разговорный', 'свободно', 'свободно'],
                eng: ['sergey', 'sergey', 'sergey', 'sergey']
            }
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
}
LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) { return new (t || LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
LanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguagesComponent, selectors: [["app-languages"]], decls: 8, vars: 3, consts: [[1, "languages"], [1, "weight600"], [1, "d-flex"], ["class", "font-weight-normal", 4, "ngFor", "ngForOf"], [1, "list-unstyled"], ["class", "font-weight-normal text-nowrap", 4, "ngFor", "ngForOf"], [1, "font-weight-normal"], [1, "font-weight-normal", "text-nowrap"]], template: function LanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LanguagesComponent_li_5_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LanguagesComponent_li_7_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languages.title[ctx.languageOnSite], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages.name[ctx.languageOnSite]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages.skill[ctx.languageOnSite]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-languages',
                templateUrl: './languages.component.html',
                styleUrls: ['./languages.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/my-projects/my-projects.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/children/my-projects/my-projects.component.ts ***!
  \********************************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");



class MyProjectsComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.myProjects = {
            title: {
                ru: 'Мои проекты:',
                eng: 'Sergey Bespalko'
            },
            link: 'https://bespalkosergey.github.io',
            linkText: 'bespalkosergey.github.io'
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
}
MyProjectsComponent.ɵfac = function MyProjectsComponent_Factory(t) { return new (t || MyProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
MyProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProjectsComponent, selectors: [["app-my-projects"]], decls: 6, vars: 3, consts: [[1, "d-flex", "justify-content-center", "mb-3"], [1, "d-flex", "flex-column"], [1, "weight600"], ["target", "_blank", 1, "text-info", "weight600", "text-decoration-none", 2, "font-size", "24px", 3, "href"]], template: function MyProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myProjects.title[ctx.languageOnSite]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.myProjects.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.myProjects.linkText, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-projects',
                templateUrl: './my-projects.component.html',
                styleUrls: ['./my-projects.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/soft-skils/soft-skils.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/children/soft-skils/soft-skils.component.ts ***!
  \******************************************************************/
/*! exports provided: SoftSkilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftSkilsComponent", function() { return SoftSkilsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SoftSkilsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", li_r1, " ");
} }
class SoftSkilsComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
        this.skils = {
            ru: ['Усидчивый', 'Целеустремленный', 'Стресоустойчивый', 'Коммуникабельный'],
            eng: ['sergey', 'sergey', 'sergey', 'sergey']
        };
    }
    ngOnInit() {
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
}
SoftSkilsComponent.ɵfac = function SoftSkilsComponent_Factory(t) { return new (t || SoftSkilsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
SoftSkilsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoftSkilsComponent, selectors: [["app-soft-skils"]], decls: 5, vars: 1, consts: [[1, "soft-skils"], [1, "weight600"], ["class", "font-weight-normal", 4, "ngFor", "ngForOf"], [1, "font-weight-normal"]], template: function SoftSkilsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Soft skills: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SoftSkilsComponent_li_4_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skils[ctx.languageOnSite]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vc29mdC1za2lscy9zb2Z0LXNraWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoftSkilsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-soft-skils',
                templateUrl: './soft-skils.component.html',
                styleUrls: ['./soft-skils.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/field-system-administrator/field-system-administrator.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/field-system-administrator/field-system-administrator.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: FieldSystemAdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSystemAdministratorComponent", function() { return FieldSystemAdministratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FieldSystemAdministratorComponent {
    constructor() { }
    ngOnInit() {
    }
}
FieldSystemAdministratorComponent.ɵfac = function FieldSystemAdministratorComponent_Factory(t) { return new (t || FieldSystemAdministratorComponent)(); };
FieldSystemAdministratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldSystemAdministratorComponent, selectors: [["app-field-system-administrator"]], decls: 2, vars: 0, template: function FieldSystemAdministratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " field-system-administrator works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL2ZpZWxkLXN5c3RlbS1hZG1pbmlzdHJhdG9yL2ZpZWxkLXN5c3RlbS1hZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldSystemAdministratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-field-system-administrator',
                templateUrl: './field-system-administrator.component.html',
                styleUrls: ['./field-system-administrator.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/front-end-developer-freelance/front-end-developer-freelance.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/front-end-developer-freelance/front-end-developer-freelance.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FrontEndDeveloperFreelanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontEndDeveloperFreelanceComponent", function() { return FrontEndDeveloperFreelanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FrontEndDeveloperFreelanceComponent {
    constructor() { }
    ngOnInit() {
    }
}
FrontEndDeveloperFreelanceComponent.ɵfac = function FrontEndDeveloperFreelanceComponent_Factory(t) { return new (t || FrontEndDeveloperFreelanceComponent)(); };
FrontEndDeveloperFreelanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontEndDeveloperFreelanceComponent, selectors: [["app-front-end-developer-freelance"]], decls: 2, vars: 0, template: function FrontEndDeveloperFreelanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " front-end-developer-freelance works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL2Zyb250LWVuZC1kZXZlbG9wZXItZnJlZWxhbmNlL2Zyb250LWVuZC1kZXZlbG9wZXItZnJlZWxhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrontEndDeveloperFreelanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-front-end-developer-freelance',
                templateUrl: './front-end-developer-freelance.component.html',
                styleUrls: ['./front-end-developer-freelance.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/handyman/handyman.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/handyman/handyman.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HandymanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandymanComponent", function() { return HandymanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HandymanComponent {
    constructor() { }
    ngOnInit() {
    }
}
HandymanComponent.ɵfac = function HandymanComponent_Factory(t) { return new (t || HandymanComponent)(); };
HandymanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandymanComponent, selectors: [["app-handyman"]], decls: 2, vars: 0, template: function HandymanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " handyman works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL2hhbmR5bWFuL2hhbmR5bWFuLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandymanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-handyman',
                templateUrl: './handyman.component.html',
                styleUrls: ['./handyman.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/manager/manager.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/manager/manager.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(); };
ManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["app-manager"]], decls: 2, vars: 0, template: function ManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " manager works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager',
                templateUrl: './manager.component.html',
                styleUrls: ['./manager.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/roofer/roofer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/roofer/roofer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RooferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RooferComponent", function() { return RooferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RooferComponent {
    constructor() { }
    ngOnInit() {
    }
}
RooferComponent.ɵfac = function RooferComponent_Factory(t) { return new (t || RooferComponent)(); };
RooferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RooferComponent, selectors: [["app-roofer"]], decls: 2, vars: 0, template: function RooferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " roofer works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL3Jvb2Zlci9yb29mZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RooferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roofer',
                templateUrl: './roofer.component.html',
                styleUrls: ['./roofer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/shop-assistant/shop-assistant.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/shop-assistant/shop-assistant.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ShopAssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopAssistantComponent", function() { return ShopAssistantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShopAssistantComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShopAssistantComponent.ɵfac = function ShopAssistantComponent_Factory(t) { return new (t || ShopAssistantComponent)(); };
ShopAssistantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopAssistantComponent, selectors: [["app-shop-assistant"]], decls: 2, vars: 0, template: function ShopAssistantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " shop-assistant works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL3Nob3AtYXNzaXN0YW50L3Nob3AtYXNzaXN0YW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopAssistantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop-assistant',
                templateUrl: './shop-assistant.component.html',
                styleUrls: ['./shop-assistant.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/children/workshop-foreman/workshop-foreman.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/children/workshop-foreman/workshop-foreman.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WorkshopForemanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopForemanComponent", function() { return WorkshopForemanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkshopForemanComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkshopForemanComponent.ɵfac = function WorkshopForemanComponent_Factory(t) { return new (t || WorkshopForemanComponent)(); };
WorkshopForemanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkshopForemanComponent, selectors: [["app-workshop-foreman"]], decls: 2, vars: 0, template: function WorkshopForemanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " workshop-foreman works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL2NoaWxkcmVuL3dvcmtzaG9wLWZvcmVtYW4vd29ya3Nob3AtZm9yZW1hbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkshopForemanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workshop-foreman',
                templateUrl: './workshop-foreman.component.html',
                styleUrls: ['./workshop-foreman.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/children/work-experience/work-experience/work-experience.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/children/work-experience/work-experience/work-experience.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkExperienceComponent.ɵfac = function WorkExperienceComponent_Factory(t) { return new (t || WorkExperienceComponent)(); };
WorkExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkExperienceComponent, selectors: [["app-work-experience"]], decls: 2, vars: 0, template: function WorkExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " work-experience works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2hpbGRyZW4vd29yay1leHBlcmllbmNlL3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-experience',
                templateUrl: './work-experience.component.html',
                styleUrls: ['./work-experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _children_soft_skils_soft_skils_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../children/soft-skils/soft-skils.component */ "./src/app/main/children/soft-skils/soft-skils.component.ts");
/* harmony import */ var _children_languages_languages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../children/languages/languages.component */ "./src/app/main/children/languages/languages.component.ts");
/* harmony import */ var _children_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../children/education/education.component */ "./src/app/main/children/education/education.component.ts");
/* harmony import */ var _children_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../children/certificates/certificates.component */ "./src/app/main/children/certificates/certificates.component.ts");
/* harmony import */ var _children_hard_skils_hard_skils_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../children/hard-skils/hard-skils.component */ "./src/app/main/children/hard-skils/hard-skils.component.ts");
/* harmony import */ var _children_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../children/my-projects/my-projects.component */ "./src/app/main/children/my-projects/my-projects.component.ts");
/* harmony import */ var _children_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../children/about-me/about-me.component */ "./src/app/main/children/about-me/about-me.component.ts");
/* harmony import */ var _children_work_experience_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../children/work-experience/work-experience/work-experience.component */ "./src/app/main/children/work-experience/work-experience/work-experience.component.ts");
/* harmony import */ var _children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../children/contacts/contacts.component */ "./src/app/main/children/contacts/contacts.component.ts");













function MainComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
} }
class MainComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.languageOnSite = 'eng';
    }
    ngOnInit() {
        this.getScreenSize();
        this.getlanguageOnSite();
    }
    getlanguageOnSite() {
        this.mainService.languageOnSite.subscribe(data => this.languageOnSite = data);
    }
    getScreenSize() {
        if (!this.screenSize)
            this.screenSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        this.mainService.getWindowOnResize()
            .subscribe(data => this.screenSize = {
            width: data.target.innerWidth,
            height: data.target.innerHeight
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 21, vars: 2, consts: [[1, "row"], [1, "col-12", "col-md-6"], ["class", "col", 4, "ngIf"], [1, "col"], [1, "row", "flex-wrap-reverse"], [1, "col-12", "col-md-6", "d-flex"], ["class", "separator bg-info mt-2", 4, "ngIf"], [1, "col", "mt-3"], [1, "separator", "bg-info", "mt-2"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-soft-skils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-hard-skils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-my-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainComponent_div_15_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-work-experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize && ctx.screenSize.width >= 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize && ctx.screenSize.width >= 768);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _children_soft_skils_soft_skils_component__WEBPACK_IMPORTED_MODULE_3__["SoftSkilsComponent"], _children_languages_languages_component__WEBPACK_IMPORTED_MODULE_4__["LanguagesComponent"], _children_education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"], _children_certificates_certificates_component__WEBPACK_IMPORTED_MODULE_6__["CertificatesComponent"], _children_hard_skils_hard_skils_component__WEBPACK_IMPORTED_MODULE_7__["HardSkilsComponent"], _children_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_8__["MyProjectsComponent"], _children_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"], _children_work_experience_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_10__["WorkExperienceComponent"], _children_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class MainService {
    constructor() {
        this.languageOnSite = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getWindowOnResize() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize');
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bespa\source\repos\angCVGitHub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map