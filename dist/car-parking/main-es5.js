(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/admin/admin-dashboard/add-location/add-location.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/add-location/add-location.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AddLocationComponent */

    /***/
    function srcAppAdminAdminDashboardAddLocationAddLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function () {
        return AddLocationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddLocationComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.location_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r1.area, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddLocationComponent = /*#__PURE__*/function () {
        function AddLocationComponent(locationService) {
          _classCallCheck(this, AddLocationComponent);

          this.locationService = locationService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            location_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddLocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadLocations();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.locationService.addLocation(JSON.stringify(this.form.value)).subscribe(function (data) {
              if (data == true) {
                alert("Location Added");
              } else {
                alert('Something went wrong');
              }
            });
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            var _this = this;

            return this.locationService.getLocations().subscribe(function (data) {
              return _this.locations$ = data;
            });
          }
        }]);

        return AddLocationComponent;
      }();

      AddLocationComponent.ɵfac = function AddLocationComponent_Factory(t) {
        return new (t || AddLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]));
      };

      AddLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddLocationComponent,
        selectors: [["app-add-location"]],
        decls: 42,
        vars: 9,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background-color", "transparent", "color", "#7879F1", "margin", "15px", "padding", "10px", "border", "2px solid"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "form", 1, "card", "m-2", 3, "formGroup", "ngSubmit"], [1, "m-1"], ["formControlName", "location_name", "name", "location_name", "type", "text", "placeholder", "Location Name", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "area", "name", "area", "type", "text", "placeholder", "Address", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-5"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"], [1, "m-2"], [1, "font-weight-bold"], [1, "card", "m-2"], [1, "row", "p-2"], [1, "col"], ["class", "row p-2", 4, "ngFor", "ngForOf"]],
        template: function AddLocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddLocationComponent_Template_form_ngSubmit_11_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Locations Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddLocationComponent_div_41_Template, 5, 2, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.form.get("location_name").touched && ctx.form.get("location_name").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("area").touched && ctx.form.get("area").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\n    background-color: #7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n}\n\n.formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 5px;\n}\n\n.button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 150px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\n}\n\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n\n    border-bottom: 1px solid #1b2f36;\n    color: black;\n    transition: all .2s ease-in-out;\n}\n\n.input[_ngcontent-%COMP%]:focus{\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #7879F1;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0REFBb0Q7WUFBcEQsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtbG9jYXRpb24vYWRkLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OUYxO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE2JSwgMTAwJSAwLCAxMDAlIDg0JSwgMCUgMTAwJSk7XG59XG5cbi5mb3Jtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU4OSk7XG59XG5cbi5pbnB1dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWIyZjM2O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ODc5RjE7ICAgXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLocationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-location',
            templateUrl: './add-location.component.html',
            styleUrls: ['./add-location.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AddSlotComponent */

    /***/
    function srcAppAdminAdminDashboardAddSlotAddSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSlotComponent", function () {
        return AddSlotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/slots.service */
      "./src/app/services/slots.service.ts");
      /* harmony import */


      var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddSlotComponent_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", location_r2.locationid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", location_r2.locationid, ". ", location_r2.location_name, "");
        }
      }

      function AddSlotComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r3.locationid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r3.slotid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slot_r3.slotno, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddSlotComponent = /*#__PURE__*/function () {
        function AddSlotComponent(slotService, locationService) {
          _classCallCheck(this, AddSlotComponent);

          this.slotService = slotService;
          this.locationService = locationService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            locationid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            slotid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            slotno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddSlotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllSlots();
            this.loadLocations();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.slotService.addSlot(JSON.stringify(this.form.value)).subscribe(function (data) {
              if (data == true) {
                alert("Slot Added");
              } else {
                alert('Something went wrong');
              }
            });
          }
        }, {
          key: "getAllSlots",
          value: function getAllSlots() {
            var _this2 = this;

            this.slotService.getAllSlots().subscribe(function (data) {
              return _this2.slots$ = data;
            });
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            var _this3 = this;

            return this.locationService.getLocations().subscribe(function (data) {
              return _this3.locations$ = data;
            });
          }
        }]);

        return AddSlotComponent;
      }();

      AddSlotComponent.ɵfac = function AddSlotComponent_Factory(t) {
        return new (t || AddSlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"]));
      };

      AddSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddSlotComponent,
        selectors: [["app-add-slot"]],
        decls: 60,
        vars: 13,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background-color", "transparent", "color", "#7879F1", "margin", "15px", "padding", "10px", "border", "2px solid"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "form", 1, "card", "m-2", 3, "formGroup", "ngSubmit"], [1, "m-1"], [1, "form-group"], [1, "font-weight-bold", "m-0"], ["formControlName", "locationid", "name", "locationid", 1, "form-control", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], ["formControlName", "slotid", "name", "slotid", "type", "text", "placeholder", "Slot ID", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "slotno", "name", "slotno", "type", "text", "placeholder", "Slot Number", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-2"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"], [1, "m-2"], [1, "font-weight-bold"], [1, "card", "m-2", "slots"], [1, "row", "p-2"], [1, "col-2"], [1, "col-4"], ["class", "row p-2", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function AddSlotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Slot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddSlotComponent_Template_form_ngSubmit_11_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select Location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddSlotComponent_option_19_Template, 2, 3, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Format: slotid + slot + slotno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Format: Slot + slotno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Slots Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Location ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Slot ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Slot Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AddSlotComponent_div_59_Template, 7, 3, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("locationid").touched && ctx.form.get("locationid").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.form.get("slotid").touched && ctx.form.get("slotid").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("slotno").touched && ctx.form.get("slotno").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slots$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\n    background-color: #7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n}\n\n.formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 5px;\n}\n\n.button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 150px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\n}\n\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n    border-bottom: 1px solid #1b2f36;\n    color: black;\n    transition: all .2s ease-in-out;\n}\n\n.input[_ngcontent-%COMP%]:focus{\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #7879F1;   \n}\n\n.slots[_ngcontent-%COMP%]{\n    overflow-x: hidden;\n    height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC1zbG90L2FkZC1zbG90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC1zbG90L2FkZC1zbG90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OUYxO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE2JSwgMTAwJSAwLCAxMDAlIDg0JSwgMCUgMTAwJSk7XG59XG5cbi5mb3Jtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU4OSk7XG59XG5cbi5pbnB1dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0OmZvY3Vze1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzg3OUYxOyAgIFxufVxuXG4uc2xvdHN7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGhlaWdodDogMTVyZW07XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSlotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-slot',
            templateUrl: './add-slot.component.html',
            styleUrls: ['./add-slot.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]
          }, {
            type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AddVehicleComponent */

    /***/
    function srcAppAdminAdminDashboardAddVehicleAddVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function () {
        return AddVehicleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddVehicleComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.vehicleid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.vehicle_type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.cost, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AddVehicleComponent = /*#__PURE__*/function () {
        function AddVehicleComponent(vehicleservice) {
          _classCallCheck(this, AddVehicleComponent);

          this.vehicleservice = vehicleservice;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AddVehicleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadVehicle();
          }
        }, {
          key: "loadVehicle",
          value: function loadVehicle() {
            var _this4 = this;

            this.vehicleservice.getVehicles().subscribe(function (data) {
              return _this4.vehicles$ = data;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.vehicleservice.addVehicle(JSON.stringify(this.form.value)).subscribe(function (data) {
              return console.log(data);
            });
            alert('Vehicle Added');
            location.reload();
          }
        }]);

        return AddVehicleComponent;
      }();

      AddVehicleComponent.ɵfac = function AddVehicleComponent_Factory(t) {
        return new (t || AddVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]));
      };

      AddVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddVehicleComponent,
        selectors: [["app-add-vehicle"]],
        decls: 45,
        vars: 9,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background-color", "transparent", "color", "#7879F1", "margin", "15px", "padding", "10px", "border", "2px solid"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "form", 1, "card", "m-2", 3, "formGroup", "ngSubmit"], [1, "m-1"], ["formControlName", "vehicle_type", "name", "vehicle_type", "type", "text", "placeholder", "Vehicle Type", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "cost", "name", "cost", "type", "text", "placeholder", "Price per hour", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-2"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"], [1, "m-2"], [1, "font-weight-bold"], [1, "card", "m-2", "slots"], [1, "row", "p-2"], [1, "col-2"], [1, "col-4"], ["class", "row p-2", 4, "ngFor", "ngForOf"]],
        template: function AddVehicleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Vehicle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddVehicleComponent_Template_form_ngSubmit_11_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Vehicle Available:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Vehicle ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Price per hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddVehicleComponent_div_44_Template, 7, 3, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.form.get("vehicle_type").touched && ctx.form.get("vehicle_type").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("cost").touched && ctx.form.get("cost").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles$);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\n    background-color: #7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n}\n\n.formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 5px;\n}\n\n.button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 150px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\n}\n\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n    border-bottom: 1px solid #1b2f36;\n    color: black;\n    transition: all .2s ease-in-out;\n}\n\n.input[_ngcontent-%COMP%]:focus{\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #7879F1;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZGQtdmVoaWNsZS9hZGQtdmVoaWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxNiUsIDEwMCUgMCwgMTAwJSA4NCUsIDAlIDEwMCUpO1xufVxuXG4uZm9ybXdyYXBwZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OUYxO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41ODkpO1xufVxuXG4uaW5wdXR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYjJmMzY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbnB1dDpmb2N1c3tcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc4NzlGMTsgICBcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddVehicleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-vehicle',
            templateUrl: './add-vehicle.component.html',
            styleUrls: ['./add-vehicle.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
      \********************************************************************/

    /*! exports provided: AdminDashboardComponent */

    /***/
    function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
        return AdminDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminDashboardComponent = /*#__PURE__*/function () {
        function AdminDashboardComponent(route) {
          _classCallCheck(this, AdminDashboardComponent);

          this.route = route;
        }

        _createClass(AdminDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.clear();
            this.route.navigate(['admin']);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length == 0) {
              this.route.navigate(['admin']);
            }
          }
        }]);

        return AdminDashboardComponent;
      }();

      AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) {
        return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminDashboardComponent,
        selectors: [["app-admin-dashboard"]],
        decls: 19,
        vars: 0,
        consts: [[1, "row", "justify-content-center"], [1, "col-md-2", "p-0", "sidebar", "d-flex", "align-items-center", "flex-column"], ["routerLink", "/admin-dashboard", 1, "button"], ["routerLink", "/admin-dashboard/add-slot", 1, "button"], ["routerLink", "/admin-dashboard/add-vehicle", 1, "button"], ["routerLink", "/admin-dashboard/allbookings", 1, "button"], [1, "button", 3, "click"], [1, "col-md-10"]],
        template: function AdminDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Slot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Vehicle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_button_click_15_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".sidebar[_ngcontent-%COMP%]{\n    box-shadow: 5px 0 5px -5px #333 ;\n    height: 90vh;\n}\n\n.button[_ngcontent-%COMP%]{\n    border: none;\n    width: 220px;\n    margin-top: 10px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XG4gICAgYm94LXNoYWRvdzogNXB4IDAgNXB4IC01cHggIzMzMyA7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuXG4uYnV0dG9ue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-dashboard',
            templateUrl: './admin-dashboard.component.html',
            styleUrls: ['./admin-dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AllbookingsComponent */

    /***/
    function srcAppAdminAdminDashboardAllbookingsAllbookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllbookingsComponent", function () {
        return AllbookingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AllbookingsComponent_tr_35_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Ended");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllbookingsComponent_tr_35_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking ongoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AllbookingsComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AllbookingsComponent_tr_35_div_21_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AllbookingsComponent_tr_35_div_22_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var booking_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.bookingid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.vehicle_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.vehicle_no);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.locationid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](booking_r1.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r1.paid == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r1.paid == 0);
        }
      }

      var AllbookingsComponent = /*#__PURE__*/function () {
        function AllbookingsComponent(bookingsService) {
          _classCallCheck(this, AllbookingsComponent);

          this.bookingsService = bookingsService;
        }

        _createClass(AllbookingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllBookings();
          }
        }, {
          key: "getAllBookings",
          value: function getAllBookings() {
            var _this5 = this;

            return this.bookingsService.getAllBookings().subscribe(function (data) {
              return _this5.AllBookings$ = data;
            });
          }
        }]);

        return AllbookingsComponent;
      }();

      AllbookingsComponent.ɵfac = function AllbookingsComponent_Factory(t) {
        return new (t || AllbookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]));
      };

      AllbookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllbookingsComponent,
        selectors: [["app-allbookings"]],
        decls: 36,
        vars: 1,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background-color", "transparent", "color", "#7879F1", "margin", "15px", "padding", "10px", "border", "2px solid"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "table"], [1, "thead"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [4, "ngIf"], [1, "text-success"], [1, "text-danger"]],
        template: function AllbookingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Booking ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vehicle No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Duration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Location ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Slot ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AllbookingsComponent_tr_35_Template, 23, 12, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllBookings$);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".thead[_ngcontent-%COMP%]{\n    background-color: #7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FsbGJvb2tpbmdzL2FsbGJvb2tpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FsbGJvb2tpbmdzL2FsbGJvb2tpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlYWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxNiUsIDEwMCUgMCwgMTAwJSA4NCUsIDAlIDEwMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllbookingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-allbookings',
            templateUrl: './allbookings.component.html',
            styleUrls: ['./allbookings.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin-login/admin-login.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
      \************************************************************/

    /*! exports provided: AdminLoginComponent */

    /***/
    function srcAppAdminAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
        return AdminLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/admin.service */
      "./src/app/services/admin.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AdminLoginComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var AdminLoginComponent = /*#__PURE__*/function () {
        function AdminLoginComponent(route, adminService) {
          _classCallCheck(this, AdminLoginComponent);

          this.route = route;
          this.adminService = adminService;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            adminid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AdminLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            var loginJson = JSON.stringify(this.form.value);
            this.adminService.loginCheck(loginJson).subscribe(function (data) {
              if (data == true) {
                alert("Login successful");
                var jsonData = JSON.parse(loginJson);

                _this6.storeLogin(jsonData['email']);

                _this6.route.navigate(['/admin-dashboard']);
              } else {
                alert("Invalid Login");
              }
            });
          }
        }, {
          key: "storeLogin",
          value: function storeLogin(email) {
            sessionStorage.setItem('admin', email);
          }
        }]);

        return AdminLoginComponent;
      }();

      AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
        return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]));
      };

      AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminLoginComponent,
        selectors: [["app-admin-login"]],
        decls: 28,
        vars: 9,
        consts: [[1, "row"], [1, "col-md-12", "wrapper", "d-flex", "justify-content-center", "align-items-center", 2, "height", "95vh"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "formwrapper", "card"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "mt-4", "d-flex", "flex-row", "justify-content-center"], [1, "m-1"], [1, "col-md-12", "d-flex", "flex-row", "justify-content-center"], ["formControlName", "adminid", "name", "adminid", "type", "email", "placeholder", "Admin ID", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "mt-4"], [1, "danger"], [2, "border", "none", "background-color", "transparent", "color", "#ff4f5a"], [1, "col-md-12", "mt-2", "mb-5", "d-flex", "flex-row", "justify-content-center"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"]],
        template: function AdminLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_3_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Admin Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminLoginComponent_div_12_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgot Password ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.form.get("adminid").touched && ctx.form.get("adminid").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("adminid").errors == null ? null : ctx.form.get("adminid").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\n    background-color:#7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n}\n\n.formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 12px;\n}\n\n.button[_ngcontent-%COMP%]{\n    color: white;\n    height: 45px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    margin: 0 7px 0 7px;\n    border: none;\n    width: 170px;\n    box-shadow: 2px 2px 5px rgba(160, 160, 160, 0.589);\n}\n\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n    border-bottom: 1.5px solid #152227;\n    color: black;\n    width: 300px;\n    transition: all .2s ease-in-out;\n}\n\n.input[_ngcontent-%COMP%]:focus{\n    border-bottom: 1px solid #7879F1;\n    border: none;\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0REFBb0Q7WUFBcEQsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3ODc5RjE7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTYlLCAxMDAlIDAsIDEwMCUgODQlLCAwJSAxMDAlKTtcbn1cblxuLmZvcm13cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4uYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDAgN3B4IDAgN3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjU4OSk7XG59XG5cbi5pbnB1dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMTUyMjI3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzg3OUYxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-login',
            templateUrl: './admin-login.component.html',
            styleUrls: ['./admin-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin/admin.component.ts":
    /*!******************************************!*\
      !*** ./src/app/admin/admin.component.ts ***!
      \******************************************/

    /*! exports provided: AdminComponent */

    /***/
    function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminComponent;
      }();

      AdminComponent.ɵfac = function AdminComponent_Factory(t) {
        return new (t || AdminComponent)();
      };

      AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminComponent,
        selectors: [["app-admin"]],
        decls: 1,
        vars: 0,
        template: function AdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      "./src/app/auth/signup/signup.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/slots/slots.component */
      "./src/app/dashboard/slots/slots.component.ts");
      /* harmony import */


      var _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard/bookings/bookings.component */
      "./src/app/dashboard/bookings/bookings.component.ts");
      /* harmony import */


      var _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard/bookslot/bookslot.component */
      "./src/app/dashboard/bookslot/bookslot.component.ts");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./admin/admin.component */
      "./src/app/admin/admin.component.ts");
      /* harmony import */


      var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./admin/admin-login/admin-login.component */
      "./src/app/admin/admin-login/admin-login.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./admin/admin-dashboard/admin-dashboard.component */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-location/add-location.component */
      "./src/app/admin/admin-dashboard/add-location/add-location.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-slot/add-slot.component */
      "./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./admin/admin-dashboard/allbookings/allbookings.component */
      "./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-vehicle/add-vehicle.component */
      "./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        children: [{
          path: '',
          component: _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_6__["SlotsComponent"]
        }, {
          path: 'bookings',
          component: _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_7__["BookingsComponent"]
        }, {
          path: 'bookslot/:locationid',
          component: _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_8__["BookslotComponent"]
        }]
      }, {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        children: [{
          path: '',
          component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"]
        }]
      }, {
        path: 'admin-dashboard',
        component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdminDashboardComponent"],
        children: [{
          path: '',
          component: _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_12__["AddLocationComponent"]
        }, {
          path: 'add-slot',
          component: _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_13__["AddSlotComponent"]
        }, {
          path: 'allbookings',
          component: _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_14__["AllbookingsComponent"]
        }, {
          path: 'add-vehicle',
          component: _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["AddVehicleComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'car-parking';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-main-section/home-main-section.component */
      "./src/app/home-main-section/home-main-section.component.ts");
      /* harmony import */


      var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./auth/signup/signup.component */
      "./src/app/auth/signup/signup.component.ts");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "./src/app/auth/login/login.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dashboard/slots/slots.component */
      "./src/app/dashboard/slots/slots.component.ts");
      /* harmony import */


      var _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./dashboard/bookings/bookings.component */
      "./src/app/dashboard/bookings/bookings.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboard/bookslot/bookslot.component */
      "./src/app/dashboard/bookslot/bookslot.component.ts");
      /* harmony import */


      var _services_admin_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/admin.service */
      "./src/app/services/admin.service.ts");
      /* harmony import */


      var _services_locations_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var _services_bookings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./header-login/header-login.component */
      "./src/app/header-login/header-login.component.ts");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./admin/admin.component */
      "./src/app/admin/admin.component.ts");
      /* harmony import */


      var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./admin/admin-login/admin-login.component */
      "./src/app/admin/admin-login/admin-login.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./admin/admin-dashboard/admin-dashboard.component */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-location/add-location.component */
      "./src/app/admin/admin-dashboard/add-location/add-location.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-slot/add-slot.component */
      "./src/app/admin/admin-dashboard/add-slot/add-slot.component.ts");
      /* harmony import */


      var _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./admin/admin-dashboard/allbookings/allbookings.component */
      "./src/app/admin/admin-dashboard/allbookings/allbookings.component.ts");
      /* harmony import */


      var _services_slots_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/slots.service */
      "./src/app/services/slots.service.ts");
      /* harmony import */


      var _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./admin/admin-dashboard/add-vehicle/add-vehicle.component */
      "./src/app/admin/admin-dashboard/add-vehicle/add-vehicle.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_locations_service__WEBPACK_IMPORTED_MODULE_16__["LocationsService"], _services_bookings_service__WEBPACK_IMPORTED_MODULE_17__["BookingsService"], _services_vehicle_service__WEBPACK_IMPORTED_MODULE_18__["VehicleService"], _services_users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"], _services_slots_service__WEBPACK_IMPORTED_MODULE_28__["SlotsService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_15__["AdminService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_7__["HomeMainSectionComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_11__["SlotsComponent"], _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_14__["BookslotComponent"], _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_20__["HeaderLoginComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"], _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLoginComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["AdminDashboardComponent"], _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_25__["AddLocationComponent"], _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_26__["AddSlotComponent"], _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_27__["AllbookingsComponent"], _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__["AddVehicleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_7__["HomeMainSectionComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _dashboard_slots_slots_component__WEBPACK_IMPORTED_MODULE_11__["SlotsComponent"], _dashboard_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_12__["BookingsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _dashboard_bookslot_bookslot_component__WEBPACK_IMPORTED_MODULE_14__["BookslotComponent"], _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_20__["HeaderLoginComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"], _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLoginComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["AdminDashboardComponent"], _admin_admin_dashboard_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_25__["AddLocationComponent"], _admin_admin_dashboard_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_26__["AddSlotComponent"], _admin_admin_dashboard_allbookings_allbookings_component__WEBPACK_IMPORTED_MODULE_27__["AllbookingsComponent"], _admin_admin_dashboard_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__["AddVehicleComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [_services_locations_service__WEBPACK_IMPORTED_MODULE_16__["LocationsService"], _services_bookings_service__WEBPACK_IMPORTED_MODULE_17__["BookingsService"], _services_vehicle_service__WEBPACK_IMPORTED_MODULE_18__["VehicleService"], _services_users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"], _services_slots_service__WEBPACK_IMPORTED_MODULE_28__["SlotsService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_15__["AdminService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/login/login.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LoginComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Required Field!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Address!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(usersService, router) {
          _classCallCheck(this, LoginComponent);

          this.usersService = usersService;
          this.router = router;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var loginJson = JSON.stringify(this.form.value);
            this.usersService.loginCheck(loginJson).subscribe(function (data) {
              if (data == true) {
                alert("Login successful");
                var jsonData = JSON.parse(loginJson);

                _this7.storeLogin(jsonData['email']);

                _this7.router.navigate(['/dashboard']);
              } else {
                alert("Invalid Login");
              }
            });
          }
        }, {
          key: "storeLogin",
          value: function storeLogin(email) {
            sessionStorage.setItem("email", email);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length != 0) {
              this.router.navigate(['/']);
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 10,
        consts: [[1, "row"], [1, "col-md-12", "wrapper", "d-flex", "justify-content-center", "align-items-center", 2, "height", "95vh"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "formwrapper", "card"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "mt-4", "d-flex", "flex-row", "justify-content-center"], [1, "m-1"], ["routerLink", "/signup", 1, "button"], ["routerLink", "/login", 1, "button"], [1, "col-md-12", "d-flex", "flex-row", "justify-content-center"], ["formControlName", "email", "name", "email", "type", "email", "placeholder", "Email", "autocomplete", "off", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "input", "form-control", 3, "ngClass"], [1, "mt-4"], [1, "danger"], [2, "border", "none", "background-color", "transparent", "color", "#ff4f5a"], [1, "col-md-12", "mt-2", "mb-5", "d-flex", "flex-row", "justify-content-center"], [1, "m-1", "mt-4"], ["type", "submit", 1, "button", 3, "disabled"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Required Field!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Forgot Password ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\n    background-color: #7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n}\n\n\n\n.formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n}\n\n\n\n.button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 150px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\n}\n\n\n\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n    width: 290px;\n    border-bottom: 1px solid #1b2f36;\n    color: black;\n    transition: all .2s ease-in-out;\n}\n\n\n\n.input[_ngcontent-%COMP%]:focus{\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #7879F1;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDREQUFvRDtZQUFwRCxvREFBb0Q7QUFDeEQ7Ozs7QUFJQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOzs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrREFBa0Q7QUFDdEQ7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OUYxO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDE2JSwgMTAwJSAwLCAxMDAlIDg0JSwgMCUgMTAwJSk7XG59XG5cblxuXG4uZm9ybXdyYXBwZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTg5KTtcbn1cblxuLmlucHV0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0OmZvY3Vze1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzg3OUYxOyAgIFxufVxuXG5cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/signup/signup.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/auth/signup/signup.component.ts ***!
      \*************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SignupComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter Valid Email Address!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is required!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password does not match!! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(usersService, router) {
          _classCallCheck(this, SignupComponent);

          this.usersService = usersService;
          this.router = router;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mobno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmPasswordCheck])
          });
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            var loginJson = JSON.stringify(this.form.value);
            this.usersService.signup(loginJson).subscribe(function (data) {
              if (data == true) {
                alert("Signup successful");
                var jsonData = JSON.parse(loginJson);

                _this8.storeLogin(jsonData['email']);

                _this8.router.navigate(['/dashboard']);
              } else {
                alert("User Already Exist");
              }
            });
          }
        }, {
          key: "storeLogin",
          value: function storeLogin(email) {
            sessionStorage.setItem("email", email);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length != 0) {
              this.router.navigate(['/']);
            }
          }
        }, {
          key: "confirmPasswordCheck",
          value: function confirmPasswordCheck(control) {
            if (control && control.value !== null || control.value != undefined) {
              var cnfPassword = control.value;
              var passControl = control.root.get('password');

              if (passControl) {
                var passValue = passControl.value;

                if (passValue !== cnfPassword) {
                  return {
                    isError: true
                  };
                }
              }
            }

            return null;
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 47,
        vars: 21,
        consts: [[1, "row"], [1, "col-md-12", "wrapper", "d-flex", "justify-content-center", "align-items-center", 2, "height", "95vh"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "formwrapper", "card"], ["name", "form", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "mt-4", "d-flex", "flex-row", "justify-content-center"], [1, "m-1"], ["routerLink", "/signup", 1, "button"], ["routerLink", "/login", 1, "button"], [1, "col-md-12", "d-flex", "flex-row", "justify-content-center"], ["formControlName", "email", "autocomplete", "off", "type", "email", "placeholder", "Email", 1, "input", "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["formControlName", "fullname", "type", "text", "placeholder", "Full Name", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "mobno", "type", "text", "placeholder", "Mobile Number", 1, "input", "form-control", 3, "ngClass"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "input", "form-control", 3, "ngClass"], ["type", "Password", "formControlName", "confPassword", "formControlName", "confPassword", "placeholder", "Confirm Password", 1, "input", "form-control", 3, "ngClass"], [1, "col-md-12", "mt-2", "mb-5", "d-flex", "flex-row", "justify-content-center"], [1, "m-1", "mt-4"], ["type", "reset", 1, "button"], [1, "button", 3, "disabled"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() {
              return ctx.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_div_16_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " This Field is required!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SignupComponent_div_39_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignupComponent_div_40_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("email").touched && ctx.form.get("email").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.form.get("fullname").touched && ctx.form.get("fullname").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.form.get("mobno").touched && ctx.form.get("mobno").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.form.get("password").touched && ctx.form.get("password").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.form.get("confPassword").touched && ctx.form.get("confPassword").invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("confPassword").errors == null ? null : ctx.form.get("confPassword").errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("confPassword").errors == null ? null : ctx.form.get("confPassword").errors.isError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".wrapper[_ngcontent-%COMP%]{\n    background-color: #7879F1;\n    -webkit-clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n            clip-path: polygon(0 16%, 100% 0, 100% 84%, 0% 100%);\n}\n\n.formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 5px;\n}\n\n.button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 150px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.589);\n}\n\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n    width: 290px;\n    border-bottom: 1px solid #1b2f36;\n    color: black;\n    transition: all .2s ease-in-out;\n}\n\n.input[_ngcontent-%COMP%]:focus{\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #7879F1;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNERBQW9EO1lBQXBELG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTYlLCAxMDAlIDAsIDEwMCUgODQlLCAwJSAxMDAlKTtcbn1cblxuLmZvcm13cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTg5KTtcbn1cblxuLmlucHV0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0OmZvY3Vze1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzg3OUYxOyAgIFxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/bookings/bookings.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/dashboard/bookings/bookings.component.ts ***!
      \**********************************************************/

    /*! exports provided: BookingsComponent */

    /***/
    function srcAppDashboardBookingsBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsComponent", function () {
        return BookingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function BookingsComponent_div_13_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cost :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var booking_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.cost, " rupees ");
        }
      }

      function BookingsComponent_div_13_div_1_div_30_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingsComponent_div_13_div_1_div_30_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r10.makePayment(25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " make Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookingsComponent_div_13_div_1_div_30_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingsComponent_div_13_div_1_div_30_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var booking_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.endBooking(booking_r3.bookingid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookingsComponent_div_13_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingsComponent_div_13_div_1_div_30_button_1_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookingsComponent_div_13_div_1_div_30_button_2_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.showMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showMe);
        }
      }

      function BookingsComponent_div_13_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Checked out sucessfully");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookingsComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Location :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Slot No :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Vehicle Type :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Duration :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BookingsComponent_div_13_div_1_div_29_Template, 4, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BookingsComponent_div_13_div_1_div_30_Template, 3, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BookingsComponent_div_13_div_1_div_31_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var booking_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.locationid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.slotid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.vehicle_type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", booking_r3.duration, " hours ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r3.paid != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r3.paid == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", booking_r3.paid != 0);
        }
      }

      function BookingsComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingsComponent_div_13_div_1_Template, 32, 8, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.bookings$);
        }
      }

      function BookingsComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Bookings Found... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Book Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var BookingsComponent = /*#__PURE__*/function () {
        function BookingsComponent(bookingsService, router) {
          _classCallCheck(this, BookingsComponent);

          this.bookingsService = bookingsService;
          this.router = router;
          this.email$ = sessionStorage.getItem('email');
          this.bookings$ = [];
          this.showMe = false;
        }

        _createClass(BookingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //////////////////////////////
            this.invokeStripe(); /////////////////////////////

            this.checkLogin();
            this.getBookingById();
          } /////////////////////////////////////////////////////

        }, {
          key: "makePayment",
          value: function makePayment(amount) {
            this.showMe = !this.showMe;
            var paymentHandler = window.StripeCheckout.configure({
              key: 'pk_test_51JzaERSCKKUCZTpyRjqUXSC9A64pH4lOmSKTozgBf3Us7ahy2BUQPuym0gMDaZBQypJbb2aAQ5HAg5bWDgqTHvcK00BlX0Sw1a',
              locale: 'auto',
              token: function token(stripeToken) {
                console.log(stripeToken.card);
                alert('Amount Successfully paid');
              }
            });
            paymentHandler.open({
              name: 'Car Parking',
              description: 'Slot Booking',
              amount: amount * 100,
              currency: 'inr'
            });
          }
        }, {
          key: "invokeStripe",
          value: function invokeStripe() {
            if (!window.document.getElementById('stripe-script')) {
              var script = window.document.createElement('script');
              script.id = 'stripe-script';
              script.type = 'text/javascript';
              script.src = 'https://checkout.stripe.com/checkout.js';
              window.document.body.appendChild(script);
            }
          } ///////////////////////////////////////////////////////

        }, {
          key: "getBookingById",
          value: function getBookingById() {
            var _this9 = this;

            return this.bookingsService.getBookings(this.email$).subscribe(function (data) {
              _this9.bookings$ = data, _this9.checkBookingFn();
            });
          }
        }, {
          key: "endBooking",
          value: function endBooking(bookingid) {
            var _this10 = this;

            return this.bookingsService.endBooking(bookingid).subscribe(function (data) {
              alert('Booking Ended');
              location.reload();

              _this10.router.navigate(['dashboard/bookings']);
            });
          }
        }, {
          key: "checkBookingFn",
          value: function checkBookingFn() {
            console.log();

            if (this.bookings$.length == 0) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length == 0) {
              this.router.navigate(['login']);
            }
          }
        }]);

        return BookingsComponent;
      }();

      BookingsComponent.ɵfac = function BookingsComponent_Factory(t) {
        return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      BookingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookingsComponent,
        selectors: [["app-bookings"]],
        decls: 15,
        vars: 2,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card", 2, "padding-top", "12px"], [1, "row", 2, "background-color", "#7879F1", "color", "white"], [1, "col-md-12", "d-flex", "justify-content-center", 2, "background-color", "white", "color", "black", "padding-top", "7px"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], [1, "col-md-12", "overflow-auto", 2, "height", "35rem"], ["id", "accordionExample", 1, "accordion"], [4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["id", "headingTwo", 1, "card-header"], [1, "row"], [1, "col-md-3"], [1, "col-md-7"], [1, "card-body"], [1, "col-auto", "mr-auto"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["class", "button", 3, "click", 4, "ngIf"], [1, "button", 3, "click"], [1, "text-success", "font-weight-bold"], ["routerLink", "/dashboard", 1, "button"]],
        template: function BookingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Bookings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookingsComponent_div_13_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookingsComponent_div_14_Template, 5, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 120px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; \n}\n.card[_ngcontent-%COMP%] {\n    margin: 20px;\n}\n.card-header[_ngcontent-%COMP%] {\n    background-color: #7879F1;\n    color: white;\n    padding-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QixFQUFFLCtCQUErQjtBQUM1RDtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IC8qIG1ha2Ugc2Nyb2xsYmFyIHRyYW5zcGFyZW50ICovXG59ICAgXG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cblxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bookings',
            templateUrl: './bookings.component.html',
            styleUrls: ['./bookings.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/bookslot/bookslot.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/dashboard/bookslot/bookslot.component.ts ***!
      \**********************************************************/

    /*! exports provided: BookslotComponent */

    /***/
    function srcAppDashboardBookslotBookslotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookslotComponent", function () {
        return BookslotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/bookings.service */
      "./src/app/services/bookings.service.ts");
      /* harmony import */


      var src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/slots.service */
      "./src/app/services/slots.service.ts");
      /* harmony import */


      var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function BookslotComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookslotComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", vehicle_r3.vehicle_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r3.vehicle_type);
        }
      }

      function BookslotComponent_div_39_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_div_39_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.bookingdetails.slotid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Already Booked!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", slot_r4.slotno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", slot_r4.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.bookingdetails.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", slot_r4.slotno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slot_r4.slotno);
        }
      }

      function BookslotComponent_div_39_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_div_39_div_2_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.bookingdetails.slotid = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", slot_r4.slotno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", slot_r4.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.bookingdetails.slotid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", slot_r4.slotno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slot_r4.slotno);
        }
      }

      function BookslotComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookslotComponent_div_39_div_1_Template, 6, 5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookslotComponent_div_39_div_2_Template, 5, 5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slot_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slot_r4.status != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slot_r4.status == 0);
        }
      }

      var BookslotComponent = /*#__PURE__*/function () {
        function BookslotComponent(bookings, slotsService, vehicleService, actRoute, router) {
          _classCallCheck(this, BookslotComponent);

          this.bookings = bookings;
          this.slotsService = slotsService;
          this.vehicleService = vehicleService;
          this.actRoute = actRoute;
          this.router = router;
          this.locationid = this.actRoute.snapshot.params['locationid'];
          this.currentDate = new Date();
          this.date = this.currentDate.getDate() + '-' + this.currentDate.getMonth() + '-' + this.currentDate.getFullYear();
          this.bookingdetails = {
            'email': '',
            'locationid': '',
            'vehicle_type': '',
            'duration': 0,
            'time': '',
            'slotid': '',
            'date': this.date,
            'vehicle_no': ''
          };
        }

        _createClass(BookslotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load = false;
            this.getVehicles();
            this.getSlotById();
          }
        }, {
          key: "getVehicles",
          value: function getVehicles() {
            var _this11 = this;

            return this.vehicleService.getVehicles().subscribe(function (data) {
              return _this11.vehicles$ = data;
            });
          }
        }, {
          key: "getSlotById",
          value: function getSlotById() {
            var _this12 = this;

            return this.slotsService.getSlotById(this.locationid).subscribe(function (data) {
              return _this12.slots$ = data;
            });
          }
        }, {
          key: "addBooking",
          value: function addBooking() {
            var _this13 = this;

            if (this.bookingdetails.vehicle_no == '' || this.bookingdetails.vehicle_type == '' || this.bookingdetails.slotid == '' || this.bookingdetails.duration == 0, this.bookingdetails.time == '') {
              alert('Kindly fill all the data');
              return;
            }

            if (!this.checkTime(this.bookingdetails.time)) {
              alert("OOPS!! Try booking 2 hours earlier..");
              return;
            }

            this.load = true;
            this.bookings.addBooking(this.locationid, this.bookingdetails).subscribe(function (data) {
              alert('Slot Booked');

              _this13.router.navigate(['/dashboard/bookings']);
            });
          }
        }, {
          key: "checkTime",
          value: function checkTime(bookingTime) {
            var currentTime = new Date();
            var ISTTime = new Date(currentTime.getTime() + (330 + currentTime.getTimezoneOffset()) * 60000);
            ISTTime.setHours(ISTTime.getHours() + 2);
            var time = bookingTime.split(':');
            var h = parseInt(time[0]);
            var m = parseInt(time[1]);

            if (h < ISTTime.getHours() || h == ISTTime.getHours() && m < ISTTime.getMinutes()) {
              return false;
            }

            return true;
          }
        }]);

        return BookslotComponent;
      }();

      BookslotComponent.ɵfac = function BookslotComponent_Factory(t) {
        return new (t || BookslotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      BookslotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookslotComponent,
        selectors: [["app-bookslot"]],
        inputs: {
          bookingdetails: "bookingdetails"
        },
        decls: 48,
        vars: 8,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card"], [1, "row", 2, "background-color", "#7879F1", "color", "white", "margin", "10px", "padding", "10px"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], ["name", "bookingForm", 1, "card"], [1, "col-md-12", "m-2"], [1, "form-group"], ["for", "vehicle_type"], ["name", "vehicle_type", "id", "vehicle_type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "vehicle_no", "placeholder", "Vehicle Number", "autocomplete", "off", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "mt-2", "mb-3"], [1, "row", "m-2"], ["type", "time", "id", "time", "name", "time", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3", "ml-2"], ["name", "duration", "id", "duration", "type", "number", "min", "1", "max", "24", "id", "duration", "placeholder", "Estimated Hours", "autocomplete", "off", "required", "", 1, "input", "mt-0", 3, "ngModel", "ngModelChange"], [1, "m-2"], [1, "row", "border"], ["class", "col-2 m-1 pt-3 pb-0", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "mb-5"], [1, "m-1", "mt-2"], [1, "row"], [1, "col-2", 2, "margin-right", "25px"], ["type", "reset", "value", "Reset", 1, "button"], [1, "col", 2, "margin-left", "25px"], [1, "button", 3, "click"], [1, "d-flex", "justify-content-center"], [1, "loadingio-spinner-pulse-f18fi8swilg"], [1, "ldio-letfb25733"], [3, "value"], [1, "col-2", "m-1", "pt-3", "pb-0"], [4, "ngIf"], ["type", "radio", "disabled", "", "name", "slotid", 3, "ngModel", "id", "value", "ngModelChange"], ["id", "slot", 3, "for"], [1, "text-danger"], ["type", "radio", "name", "disabled", 3, "ngModel", "id", "value", "ngModelChange"]],
        template: function BookslotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Book Slot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookslotComponent_div_6_Template, 6, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select your Vehicle Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_select_ngModelChange_19_listener($event) {
              return ctx.bookingdetails.vehicle_type = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BookslotComponent_option_20_Template, 2, 2, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.bookingdetails.vehicle_no = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "FORMAT: TN-01-AA-1111");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Select Time: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.bookingdetails.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "NOTE: Book atleast 2 hours earlier");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookslotComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.bookingdetails.duration = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Slot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BookslotComponent_div_39_Template, 3, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookslotComponent_Template_button_click_46_listener() {
              return ctx.addBooking();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Book Slot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Location-Id: ", ctx.locationid, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.vehicle_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicles$);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.vehicle_no);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingdetails.duration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slots$);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"]],
        styles: [".formwrapper[_ngcontent-%COMP%]{\n    background-color: white;\n    border: none;\n    border-radius: 5px;\n}\n.button[_ngcontent-%COMP%]{\n    border: none;\n    width: 220px;\n    margin-top: 10px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n}\n.input[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    padding: 5px 10px;\n    border: none;\n    width: 100%;\n    border-bottom: 1px solid #1b2f36;\n    color: black;\n    transition: all .2s ease-in-out;\n}\n.input[_ngcontent-%COMP%]:focus{\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #7879F1;   \n}\n.button-slot[_ngcontent-%COMP%]{\n    border: none;\n    width: 120px;\n    margin-top: 10px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n}\n.button-slot[_ngcontent-%COMP%]:focus{\n    border: none;\n    width: 120px;\n    margin-top: 10px;\n    color: white;\n    height: 35px;\n    background-color: #17a2b8;\n    font-weight: 900;\n    border-radius: 5px;\n}\n.button-slot[_ngcontent-%COMP%]:disabled{\n    border: none;\n    width: 120px;\n    margin-top: 10px;\n    color: #000;\n    height: 35px;\n    background-color: #b5aeae;\n    font-weight: 900;\n    border-radius: 5px;\n}\ninput[type=\"radio\"][_ngcontent-%COMP%] {\n    display: none;\n  }\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked    + #slot[_ngcontent-%COMP%] {\n    background: hsla(150, 75%, 50%, 1);\n    color: hsla(215, 0%, 100%, 1);\n    box-shadow: 0px 0px 10px hsla(150, 100%, 50%, 0.75);\n\n  }\ninput[type = \"radio\"][_ngcontent-%COMP%]:disabled    + #slot[_ngcontent-%COMP%]{\n    color: hsla(150, 5%, 75%, 1);\n    border-color: hsla(150, 5%, 75%, 1);\n    box-shadow: none;\n    cursor: not-allowed;\n  }\n#slot[_ngcontent-%COMP%] {\n    padding: 5px;\n    display: block;\n    background: white;\n    border: 2px solid hsla(150, 75%, 50%, 1);\n    text-align: center;\n    box-shadow: 0px 3px 10px -2px hsla(150, 5%, 65%, 0.5);\n    cursor: pointer;\n  }\n@-webkit-keyframes ldio-letfb25733-1 {\n    0% { top: 36px; height: 128px }\n    50% { top: 60px; height: 80px }\n    100% { top: 60px; height: 80px }\n  }\n@keyframes ldio-letfb25733-1 {\n    0% { top: 36px; height: 128px }\n    50% { top: 60px; height: 80px }\n    100% { top: 60px; height: 80px }\n  }\n@-webkit-keyframes ldio-letfb25733-2 {\n    0% { top: 41.99999999999999px; height: 116.00000000000001px }\n    50% { top: 60px; height: 80px }\n    100% { top: 60px; height: 80px }\n  }\n@keyframes ldio-letfb25733-2 {\n    0% { top: 41.99999999999999px; height: 116.00000000000001px }\n    50% { top: 60px; height: 80px }\n    100% { top: 60px; height: 80px }\n  }\n@-webkit-keyframes ldio-letfb25733-3 {\n    0% { top: 48px; height: 104px }\n    50% { top: 60px; height: 80px }\n    100% { top: 60px; height: 80px }\n  }\n@keyframes ldio-letfb25733-3 {\n    0% { top: 48px; height: 104px }\n    50% { top: 60px; height: 80px }\n    100% { top: 60px; height: 80px }\n  }\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { position: absolute; width: 30px }\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    left: 35px;\n    background: #7575e4;\n    -webkit-animation: ldio-letfb25733-1 1s cubic-bezier(0,0.5,0.5,1) infinite;\n            animation: ldio-letfb25733-1 1s cubic-bezier(0,0.5,0.5,1) infinite;\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s\n  }\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    left: 85px;\n    background: #f8b26a;\n    -webkit-animation: ldio-letfb25733-2 1s cubic-bezier(0,0.5,0.5,1) infinite;\n            animation: ldio-letfb25733-2 1s cubic-bezier(0,0.5,0.5,1) infinite;\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s\n  }\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    left: 135px;\n    background: #abbd81;\n    -webkit-animation: ldio-letfb25733-3 1s cubic-bezier(0,0.5,0.5,1) infinite;\n            animation: ldio-letfb25733-3 1s cubic-bezier(0,0.5,0.5,1) infinite;\n    -webkit-animation-delay: undefineds;\n            animation-delay: undefineds\n  }\n.loadingio-spinner-pulse-f18fi8swilg[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: #ffffff;\n  }\n.ldio-letfb25733[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform-origin: 0 0; \n  }\n.ldio-letfb25733[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Jvb2tzbG90L2Jvb2tzbG90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtFQUNmO0FBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLG1EQUFtRDs7RUFFckQ7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixxREFBcUQ7SUFDckQsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsS0FBSyxTQUFTLEVBQUUsY0FBYztJQUM5QixNQUFNLFNBQVMsRUFBRSxhQUFhO0lBQzlCLE9BQU8sU0FBUyxFQUFFLGFBQWE7RUFDakM7QUFKQTtJQUNFLEtBQUssU0FBUyxFQUFFLGNBQWM7SUFDOUIsTUFBTSxTQUFTLEVBQUUsYUFBYTtJQUM5QixPQUFPLFNBQVMsRUFBRSxhQUFhO0VBQ2pDO0FBQ0E7SUFDRSxLQUFLLHdCQUF3QixFQUFFLDZCQUE2QjtJQUM1RCxNQUFNLFNBQVMsRUFBRSxhQUFhO0lBQzlCLE9BQU8sU0FBUyxFQUFFLGFBQWE7RUFDakM7QUFKQTtJQUNFLEtBQUssd0JBQXdCLEVBQUUsNkJBQTZCO0lBQzVELE1BQU0sU0FBUyxFQUFFLGFBQWE7SUFDOUIsT0FBTyxTQUFTLEVBQUUsYUFBYTtFQUNqQztBQUNBO0lBQ0UsS0FBSyxTQUFTLEVBQUUsY0FBYztJQUM5QixNQUFNLFNBQVMsRUFBRSxhQUFhO0lBQzlCLE9BQU8sU0FBUyxFQUFFLGFBQWE7RUFDakM7QUFKQTtJQUNFLEtBQUssU0FBUyxFQUFFLGNBQWM7SUFDOUIsTUFBTSxTQUFTLEVBQUUsYUFBYTtJQUM5QixPQUFPLFNBQVMsRUFBRSxhQUFhO0VBQ2pDO0FBQ0EsdUJBQXVCLGtCQUFrQixFQUFFLFlBQVk7QUFBQztJQUN0RCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDBFQUFrRTtZQUFsRSxrRUFBa0U7SUFDbEUsOEJBQXFCO1lBQXJCO0VBQ0Y7QUFDQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsMEVBQWtFO1lBQWxFLGtFQUFrRTtJQUNsRSw4QkFBcUI7WUFBckI7RUFDRjtBQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwRUFBa0U7WUFBbEUsa0VBQWtFO0lBQ2xFLG1DQUEwQjtZQUExQjtFQUNGO0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixxQkFBcUIsRUFBRSxtQkFBbUI7RUFDNUM7QUFDQSx1QkFBdUIsdUJBQXVCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYm9va3Nsb3QvYm9va3Nsb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OUYxO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi5pbnB1dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMmYzNjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0OmZvY3Vze1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzg3OUYxOyAgIFxufVxuXG4uYnV0dG9uLXNsb3R7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5idXR0b24tc2xvdDpmb2N1c3tcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJ1dHRvbi1zbG90OmRpc2FibGVke1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YWVhZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAjc2xvdCB7XG4gICAgYmFja2dyb3VuZDogaHNsYSgxNTAsIDc1JSwgNTAlLCAxKTtcbiAgICBjb2xvcjogaHNsYSgyMTUsIDAlLCAxMDAlLCAxKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggaHNsYSgxNTAsIDEwMCUsIDUwJSwgMC43NSk7XG5cbiAgfVxuICBpbnB1dFt0eXBlID0gXCJyYWRpb1wiXTpkaXNhYmxlZCArICNzbG90e1xuICAgIGNvbG9yOiBoc2xhKDE1MCwgNSUsIDc1JSwgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiBoc2xhKDE1MCwgNSUsIDc1JSwgMSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG4gICNzbG90IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsYSgxNTAsIDc1JSwgNTAlLCAxKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IC0ycHggaHNsYSgxNTAsIDUlLCA2NSUsIDAuNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9ICAgICBcbiBcbiAgQGtleWZyYW1lcyBsZGlvLWxldGZiMjU3MzMtMSB7XG4gICAgMCUgeyB0b3A6IDM2cHg7IGhlaWdodDogMTI4cHggfVxuICAgIDUwJSB7IHRvcDogNjBweDsgaGVpZ2h0OiA4MHB4IH1cbiAgICAxMDAlIHsgdG9wOiA2MHB4OyBoZWlnaHQ6IDgwcHggfVxuICB9XG4gIEBrZXlmcmFtZXMgbGRpby1sZXRmYjI1NzMzLTIge1xuICAgIDAlIHsgdG9wOiA0MS45OTk5OTk5OTk5OTk5OXB4OyBoZWlnaHQ6IDExNi4wMDAwMDAwMDAwMDAwMXB4IH1cbiAgICA1MCUgeyB0b3A6IDYwcHg7IGhlaWdodDogODBweCB9XG4gICAgMTAwJSB7IHRvcDogNjBweDsgaGVpZ2h0OiA4MHB4IH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxkaW8tbGV0ZmIyNTczMy0zIHtcbiAgICAwJSB7IHRvcDogNDhweDsgaGVpZ2h0OiAxMDRweCB9XG4gICAgNTAlIHsgdG9wOiA2MHB4OyBoZWlnaHQ6IDgwcHggfVxuICAgIDEwMCUgeyB0b3A6IDYwcHg7IGhlaWdodDogODBweCB9XG4gIH1cbiAgLmxkaW8tbGV0ZmIyNTczMyBkaXYgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAzMHB4IH0ubGRpby1sZXRmYjI1NzMzIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogIzc1NzVlNDtcbiAgICBhbmltYXRpb246IGxkaW8tbGV0ZmIyNTczMy0xIDFzIGN1YmljLWJlemllcigwLDAuNSwwLjUsMSkgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yc1xuICB9XG4gIC5sZGlvLWxldGZiMjU3MzMgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogODVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjhiMjZhO1xuICAgIGFuaW1hdGlvbjogbGRpby1sZXRmYjI1NzMzLTIgMXMgY3ViaWMtYmV6aWVyKDAsMC41LDAuNSwxKSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzXG4gIH1cbiAgLmxkaW8tbGV0ZmIyNTczMyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBsZWZ0OiAxMzVweDtcbiAgICBiYWNrZ3JvdW5kOiAjYWJiZDgxO1xuICAgIGFuaW1hdGlvbjogbGRpby1sZXRmYjI1NzMzLTMgMXMgY3ViaWMtYmV6aWVyKDAsMC41LDAuNSwxKSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IHVuZGVmaW5lZHNcbiAgfVxuICBcbiAgLmxvYWRpbmdpby1zcGlubmVyLXB1bHNlLWYxOGZpOHN3aWxnIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG4gIC5sZGlvLWxldGZiMjU3MzMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IC8qIHNlZSBub3RlIGFib3ZlICovXG4gIH1cbiAgLmxkaW8tbGV0ZmIyNTczMyBkaXYgeyBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookslotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bookslot',
            templateUrl: './bookslot.component.html',
            styleUrls: ['./bookslot.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"]
          }, {
            type: src_app_services_slots_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]
          }, {
            type: src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, {
          bookingdetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/dashboard.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../header-login/header-login.component */
      "./src/app/header-login/header-login.component.ts");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(router) {
          _classCallCheck(this, DashboardComponent);

          this.router = router;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkLogin();
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            if (sessionStorage.length == 0) {
              this.router.navigate(['login']);
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 8,
        vars: 0,
        consts: [[1, "navBtn", 2, "text-align", "center"], ["routerLink", "/dashboard", 1, "button"], ["routerLink", "/dashboard/bookings", 1, "button"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Available Slots \u23F0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Bookings \uD83C\uDFAB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_login_header_login_component__WEBPACK_IMPORTED_MODULE_2__["HeaderLoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".sidebar[_ngcontent-%COMP%]{\n    box-shadow: 5px 0 5px -5px #333 ;\n    height: 90vh;\n}\n\n.button[_ngcontent-%COMP%]{\n    border: none;\n    width: 700px;\n    color: black;\n    height: 70px;\n    border: 2px solid #7879F1;\n    background-color: white;\n    font-weight: 900;\n    border-radius: 5px;\n    margin: 10px;\n    font-size: 25px;\n}\n\n.navBtn[_ngcontent-%COMP%] {\n    margin-top: 40px;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n    background-color: #7879F1;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcbiAgICBib3gtc2hhZG93OiA1cHggMCA1cHggLTVweCAjMzMzIDtcbiAgICBoZWlnaHQ6IDkwdmg7XG59XG5cbi5idXR0b257XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ODc5RjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm5hdkJ0biB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4gIFxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/dashboard/slots/slots.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/dashboard/slots/slots.component.ts ***!
      \****************************************************/

    /*! exports provided: SlotsComponent */

    /***/
    function srcAppDashboardSlotsSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotsComponent", function () {
        return SlotsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/locations.service */
      "./src/app/services/locations.service.ts");
      /* harmony import */


      var src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/vehicle.service */
      "./src/app/services/vehicle.service.ts");
      /* harmony import */


      var src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/dashboard/dashboard.component */
      "./src/app/dashboard/dashboard.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function SlotsComponent_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", location_r2.location_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r2.location_name);
        }
      }

      function SlotsComponent_div_19_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", vehicle_r5.vehicle_type, " : ", vehicle_r5.cost, " Rs");
        }
      }

      function SlotsComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Slots :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Location Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Price Per Hour ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SlotsComponent_div_19_div_25_Template, 3, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Book Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var location_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r3.location_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r3.slots, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r3.area);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.vehicles$);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/dashboard/bookslot/", location_r3.locationid, "");
        }
      }

      var SlotsComponent = /*#__PURE__*/function () {
        ///////////////////////////////
        ///////////////////////////////
        function SlotsComponent(locationsService, vehicleService, dashboardComponent) {
          _classCallCheck(this, SlotsComponent);

          this.locationsService = locationsService;
          this.vehicleService = vehicleService;
          this.dashboardComponent = dashboardComponent;
          this.sessionValue = "";
        }

        _createClass(SlotsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dashboardComponent.checkLogin();
            this.loadLocations();
            this.loadVehicle();
          }
        }, {
          key: "loadLocations",
          value: function loadLocations() {
            var _this14 = this;

            return this.locationsService.getLocations().subscribe(function (data) {
              return _this14.locations$ = data;
            });
          }
        }, {
          key: "loadVehicle",
          value: function loadVehicle() {
            var _this15 = this;

            return this.vehicleService.getVehicles().subscribe(function (data) {
              return _this15.vehicles$ = data;
            });
          }
        }]);

        return SlotsComponent;
      }();

      SlotsComponent.ɵfac = function SlotsComponent_Factory(t) {
        return new (t || SlotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]));
      };

      SlotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlotsComponent,
        selectors: [["app-slots"]],
        decls: 20,
        vars: 2,
        consts: [[1, "row", "mt-3", "justify-content-center"], [1, "col-md-11", "card", 2, "padding-top", "14px"], [1, "row", 2, "background-color", "#7879F1", "color", "white"], [1, "col-md-12", "d-flex", "justify-content-center", 2, "background-color", "white", "color", "black", "padding-top", "7px"], ["name", "location_name", "id", "location_name", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-md-12"], [1, "row", "mb-3"], [1, "col-md-12", "overflow-auto", 2, "height", "35rem"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "value"], [1, "card"], [1, "card-header", "flex-row"], [1, "row", "mt-3"], [1, "col-md-3"], [1, "col"], [1, "card-body"], [1, "row"], [1, "col-auto", "mr-auto"], [4, "ngFor", "ngForOf"], [1, "col-auto", ".btn"], ["type", "button", 1, "button", 3, "routerLink"]],
        template: function SlotsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Available Slots");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select your desired Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SlotsComponent_option_13_Template, 2, 2, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SlotsComponent_div_19_Template, 29, 5, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations$);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 120px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n    margin-top: 100px;\n    align-self: center;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 0px;\n    background: transparent;\n}\n.card[_ngcontent-%COMP%] {\n    margin: 20px 3px;;\n}\n.card-header[_ngcontent-%COMP%] {\n    background-color: #7879F1;\n    color: white;\n    padding-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Nsb3RzL3Nsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Nsb3RzL3Nsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMjBweCAzcHg7O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlotsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-slots',
            templateUrl: './slots.component.html',
            styleUrls: ['./slots.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"]
          }, {
            type: src_app_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
          }, {
            type: src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header-login/header-login.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/header-login/header-login.component.ts ***!
      \********************************************************/

    /*! exports provided: HeaderLoginComponent */

    /***/
    function srcAppHeaderLoginHeaderLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderLoginComponent", function () {
        return HeaderLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HeaderLoginComponent = /*#__PURE__*/function () {
        function HeaderLoginComponent(router) {
          _classCallCheck(this, HeaderLoginComponent);

          this.router = router;
        }

        _createClass(HeaderLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.clear();
            console.log(sessionStorage);
            this.router.navigate(['login']);
          }
        }]);

        return HeaderLoginComponent;
      }();

      HeaderLoginComponent.ɵfac = function HeaderLoginComponent_Factory(t) {
        return new (t || HeaderLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderLoginComponent,
        selectors: [["app-header-login"]],
        decls: 14,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "background-color", "#ececec !important", "box-shadow", "0px 0px 8px rgba(106, 91, 190, 0.438)"], ["href", "#", 1, "navbar-brand", 2, "color", "#6c757d"], [1, "fas", "fa-car", "mr-2", 2, "color", "black", "font-size", "30px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "form-inline", "my-2", "my-lg-0"], ["routerLink", "/", 1, "button"], [1, "button", 3, "click"]],
        template: function HeaderLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My-Parking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLoginComponent_Template_button_click_12_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 120px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWxvZ2luL2hlYWRlci1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItbG9naW4vaGVhZGVyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-login',
            templateUrl: './header-login.component.html',
            styleUrls: ['./header-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/header/header.component.ts":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 15,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand", 2, "color", "#7879F1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "form-inline", "my-2", "my-lg-0"], ["routerLink", "/", 1, "button"], ["routerLink", "/signup", 1, "button"], ["routerLink", "/login", 1, "button"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Car-Parking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%]{\n    margin-left: 7px;\n    margin-right: 7px;\n    border: none;\n    width: 120px;\n    color: white;\n    height: 35px;\n    background-color: #7879F1;\n    font-weight: 900;\n    border-radius: 5px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    padding: 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home-main-section/home-main-section.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/home-main-section/home-main-section.component.ts ***!
      \******************************************************************/

    /*! exports provided: HomeMainSectionComponent */

    /***/
    function srcAppHomeMainSectionHomeMainSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeMainSectionComponent", function () {
        return HomeMainSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomeMainSectionComponent = /*#__PURE__*/function () {
        function HomeMainSectionComponent(router) {
          _classCallCheck(this, HomeMainSectionComponent);

          this.router = router;
        }

        _createClass(HomeMainSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkSession",
          value: function checkSession() {
            if (sessionStorage.length == 0) {
              this.router.navigate(['/login']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          }
        }]);

        return HomeMainSectionComponent;
      }();

      HomeMainSectionComponent.ɵfac = function HomeMainSectionComponent_Factory(t) {
        return new (t || HomeMainSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HomeMainSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeMainSectionComponent,
        selectors: [["app-home-main-section"]],
        decls: 72,
        vars: 0,
        consts: [[1, "row", "d-flex", "justify-content-center", 2, "height", "70vh"], [1, "col-md-6", "d-flex", "justify-content-center", "p-0", "align-items-center", "flex-column"], [2, "font-size", "40px"], [1, "btn", 3, "click"], [1, "col-md-6", "d-flex", "justify-content-center", "align-items-center"], ["src", "https://image.freepik.com/free-vector/reserve-parking-space-curbside-pickup-abstract-concept-illustration-customer-walk-pickup-station-customers-arrival-keep-employees-safe-small-business_335657-3337.jpg", "alt", "", 1, "hero"], [1, "services"], [1, "s-heading"], [2, "color", "white"], [1, "service-text", 2, "color", "white", "font-size", "20px"], [1, "s-box-container"], [1, "s-box"], [1, "bar"], [1, "fas", "fa-rupee-sign", 2, "font-size", "60px", "margin-bottom", "10px"], ["href", "#", 1, "s-btn"], ["xmlns", "http://www.w3.org/2000/svg", "width", "80", "height", "80", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-speedometer"], ["d", "M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"], ["fill-rule", "evenodd", "d", "M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"], [1, "far", "fa-calendar-alt", 2, "font-size", "60px", "margin-bottom", "10px"], ["src", "https://image.freepik.com/free-vector/coronavirus-border-closure-concept-illustration_114360-1753.jpg", "alt", ""], [1, "col-md-6", "d-flex", "justify-content-center", "flex-column"], [1, "hiw"], [1, "getquotebtn", 3, "click"]],
        template: function HomeMainSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Never wait to Park your Car again...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Book a Slot Now!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeMainSectionComponent_Template_button_click_8_listener() {
              return ctx.checkSession();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Book Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Why Choose Us?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "We Provide The Best In Class Servies For Our Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Affordable Prcing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Book Your slot at Price as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " mimimum as 10rupees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Faster than Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Book Your Slot faster than the time other apps take to open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Available 24/7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Book Your slot 365 days a year ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "at any time of the Day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "How it Works?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Once you enter your destination into the app, you can see nearby spots and compare rates.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " After selecting the cheapest (or closest) option, a simple click can retrieve turn-by-turn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " directions to help you find your parking spot. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeMainSectionComponent_Template_button_click_70_listener() {
              return ctx.checkSession();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Book Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h1[_ngcontent-%COMP%]{\n    color: #1b2f36;\n    font-size: 3rem;\n}\n\nh2[_ngcontent-%COMP%]{\n    color:#9c9b9b;\n}\n\n.hero[_ngcontent-%COMP%] {\n\twidth: 75%;\n}\n\n.getquote[_ngcontent-%COMP%]{\n    border: none;\n    background-color: #ececec;\n    height: 60px;\n    width: 300px;\n    padding: 15px;\n    margin-right: 20px;\n    border-radius: 8px;\n}\n\n.getquotebtn[_ngcontent-%COMP%]{\n    border: none;\n    background-color: #7879F1;\n    height: 50px;\n    padding: 15px;\n    margin-right: 20px;\n    border-radius: 8px;\n    color:white;\n    font-weight: 900;\n}\n\n.options-primary[_ngcontent-%COMP%]{\n    height: 20vh;\n    background-color: #7879F1;\n    font-size: 20px;\n    color: white;\n    font-weight: bold;\n}\n\n.options-secondary[_ngcontent-%COMP%]{\n    height: 20vh;\n    background-color: #ececec;\n    font-size: 20px;\n    color: #7879F1;\n    font-weight: bold;\n}\n\nimg[_ngcontent-%COMP%] {\n\n    width: 80%;\n    height: 80%;\n\n}\n\n.btn[_ngcontent-%COMP%] {\n\n    color: #ececec;\n    width: 80%;\n    border: none;\n    background-color: #7879F1;\n    padding: 14px 28px;\n    font-size: 25px;\n    cursor: pointer;\n    text-align: center;\n\n}\n\n.services[_ngcontent-%COMP%]{\n\twidth:100%;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n    background-color: #7879F1;\n}\n\n.s-heading[_ngcontent-%COMP%]{\n\ttext-align:center;\n}\n\n.s-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tcolor:#576975;\n\tfont-size: 3rem;\n\tfont-weight: 400;\n\tletter-spacing: 1px;\n\tmargin: 0px;\n}\n\n.s-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n\tcolor: rgba(87,105,117,0.60);\n\tfont-size: 1rem;\n\tmargin: 5px;\n\ttext-align: center;\n}\n\n.s-box-container[_ngcontent-%COMP%]{\n\twidth:100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.s-box[_ngcontent-%COMP%]{\n\tdisplay:flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 10px;\n\twidth:300px;\n\tpadding: 20px 25px;\n\theight: 400px;\n\tbox-sizing: border-box;\n\tmargin: 30px;\n\tposition: relative;\n    background-color: white;\n    border: 2px solid #7879F1;\n}\n\n.s-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n\theight: 75px;\n}\n\n.s-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tcolor:#7879F1;\n\tletter-spacing: 1px;\n\tfont-size: 1.5rem;\n\tmargin-bottom: 8px;\n\t\n}\n\n.s-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n\tcolor: rgba(87,105,117,0.90);\n\ttext-align: center;\n}\n\n.s-btn[_ngcontent-%COMP%]{\n\twidth: 140px;\n\theight: 40px;\n\tborder-radius: 20px;\n\tborder:1px solid #7879F1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor:#576975;\n\tmargin-top:10px; \n}\n\n.bar[_ngcontent-%COMP%]{\n\twidth: 100px;\n\theight: 6px;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 0%;\n\ttransform: translateX(-50%);\n\tbackground-color:#7879F1; \n\tborder-radius: 0px 0px 10px 10px;\n\tdisplay: none;\n\t-webkit-animation: bar 0.5s;\n\t        animation: bar 0.5s;\n}\n\n.s-box[_ngcontent-%COMP%]:hover{\n    border: 2px solid #7879F1;\n\tbox-shadow: 2px 2px 30px rgba(0,0,0,0.08);\n\ttransition: all ease 0.3s;\n}\n\n.s-btn[_ngcontent-%COMP%]:hover{\n\tbackground-color:#7879F1;\n\tborder: 1px solid #7879F1;\n\tcolor:#FFFFFF;\n\ttransition: all ease 0.3s;\n}\n\n.s-box[_ngcontent-%COMP%]:hover   .bar[_ngcontent-%COMP%]{\n\tdisplay: block;\n}\n\n.service-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1tYWluLXNlY3Rpb24vaG9tZS1tYWluLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFJQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFJQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osa0JBQWtCO0lBQ2YsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGtCQUFrQjs7QUFFbkI7O0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsd0JBQXdCO0NBQ3hCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULE9BQU87Q0FDUCwyQkFBMkI7Q0FDM0Isd0JBQXdCO0NBQ3hCLGdDQUFnQztDQUNoQyxhQUFhO0NBQ2IsMkJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtDQUM1Qix5Q0FBeUM7Q0FDekMseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0Msd0JBQXdCO0NBQ3hCLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2IseUJBQXlCO0FBQzFCOztBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1tYWluLXNlY3Rpb24vaG9tZS1tYWluLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGNvbG9yOiAjMWIyZjM2O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuaDJ7XG4gICAgY29sb3I6IzljOWI5Yjtcbn1cblxuLmhlcm8ge1xuXHR3aWR0aDogNzUlO1xufVxuXG5cblxuLmdldHF1b3Rle1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5cblxuLmdldHF1b3RlYnRue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OUYxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLm9wdGlvbnMtcHJpbWFyeXtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3B0aW9ucy1zZWNvbmRhcnl7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNzg3OUYxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuXG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcblxufVxuXG4uYnRuIHtcblxuICAgIGNvbG9yOiAjZWNlY2VjO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODc5RjE7XG4gICAgcGFkZGluZzogMTRweCAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5zZXJ2aWNlc3tcblx0d2lkdGg6MTAwJTtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NzlGMTtcbn1cbi5zLWhlYWRpbmd7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xufVxuLnMtaGVhZGluZyBoMXtcblx0Y29sb3I6IzU3Njk3NTtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRtYXJnaW46IDBweDtcbn1cbi5zLWhlYWRpbmcgcHtcblx0Y29sb3I6IHJnYmEoODcsMTA1LDExNywwLjYwKTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRtYXJnaW46IDVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnMtYm94LWNvbnRhaW5lcntcblx0d2lkdGg6MTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucy1ib3h7XG5cdGRpc3BsYXk6ZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHdpZHRoOjMwMHB4O1xuXHRwYWRkaW5nOiAyMHB4IDI1cHg7XG5cdGhlaWdodDogNDAwcHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdG1hcmdpbjogMzBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ODc5RjE7XG59XG4ucy1ib3ggaW1ne1xuXHRoZWlnaHQ6IDc1cHg7XG59XG4ucy1ib3ggaDF7XG5cdGNvbG9yOiM3ODc5RjE7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFxufVxuLnMtYm94IHB7XG5cdGNvbG9yOiByZ2JhKDg3LDEwNSwxMTcsMC45MCk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zLWJ0bntcblx0d2lkdGg6IDE0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJvcmRlcjoxcHggc29saWQgIzc4NzlGMTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbG9yOiM1NzY5NzU7XG5cdG1hcmdpbi10b3A6MTBweDsgXG59XG5cbi5iYXJ7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiA2cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdGJhY2tncm91bmQtY29sb3I6Izc4NzlGMTsgXG5cdGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuXHRkaXNwbGF5OiBub25lO1xuXHRhbmltYXRpb246IGJhciAwLjVzO1xufVxuLnMtYm94OmhvdmVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ODc5RjE7XG5cdGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsMCwwLDAuMDgpO1xuXHR0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xufVxuLnMtYnRuOmhvdmVye1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM3ODc5RjE7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM3ODc5RjE7XG5cdGNvbG9yOiNGRkZGRkY7XG5cdHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG4ucy1ib3g6aG92ZXIgLmJhcntcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZXJ2aWNlLXRleHQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeMainSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-main-section',
            templateUrl: './home-main-section.component.html',
            styleUrls: ['./home-main-section.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../home-main-section/home-main-section.component */
      "./src/app/home-main-section/home-main-section.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/header/header.component.ts");
      /* harmony import */


      var _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header-login/header-login.component */
      "./src/app/header-login/header-login.component.ts");

      function HomeComponent_app_header_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      }

      function HomeComponent_app_header_login_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-login");
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checklogin();
          }
        }, {
          key: "checklogin",
          value: function checklogin() {
            if (sessionStorage.length == 0) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_header_0_Template, 1, 0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_app_header_login_1_Template, 1, 0, "app-header-login", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-main-section");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _home_main_section_home_main_section_component__WEBPACK_IMPORTED_MODULE_2__["HomeMainSectionComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _header_login_header_login_component__WEBPACK_IMPORTED_MODULE_4__["HeaderLoginComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/admin.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/admin.service.ts ***!
      \*******************************************/

    /*! exports provided: AdminService */

    /***/
    function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminService", function () {
        return AdminService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AdminService = /*#__PURE__*/function () {
        function AdminService(_http) {
          _classCallCheck(this, AdminService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080/admin';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(AdminService, [{
          key: "loginCheck",
          value: function loginCheck(loginDetails) {
            return this._http.post(this.apiUrl, loginDetails, this.httpOptions);
          }
        }]);

        return AdminService;
      }();

      AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AdminService,
        factory: AdminService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/bookings.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/bookings.service.ts ***!
      \**********************************************/

    /*! exports provided: BookingsService */

    /***/
    function srcAppServicesBookingsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsService", function () {
        return BookingsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var BookingsService = /*#__PURE__*/function () {
        function BookingsService(_http) {
          _classCallCheck(this, BookingsService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(BookingsService, [{
          key: "getAllBookings",
          value: function getAllBookings() {
            return this._http.get(this.apiUrl + '/bookings/allBookings');
          }
        }, {
          key: "getBookings",
          value: function getBookings(email) {
            return this._http.get(this.apiUrl + '/bookings/getByUser/' + email);
          }
        }, {
          key: "addBooking",
          value: function addBooking(id, bookings) {
            bookings.locationid = id;
            bookings.email = sessionStorage.getItem('email');
            console.log(bookings);
            return this._http.post(this.apiUrl + '/bookings/add', JSON.stringify(bookings), this.httpOptions);
          }
        }, {
          key: "endBooking",
          value: function endBooking(bookingid) {
            return this._http.get(this.apiUrl + '/bookings/endBooking/' + bookingid);
          }
        }]);

        return BookingsService;
      }();

      BookingsService.ɵfac = function BookingsService_Factory(t) {
        return new (t || BookingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BookingsService,
        factory: BookingsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/locations.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/locations.service.ts ***!
      \***********************************************/

    /*! exports provided: LocationsService */

    /***/
    function srcAppServicesLocationsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationsService", function () {
        return LocationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var LocationsService = /*#__PURE__*/function () {
        function LocationsService(_http) {
          _classCallCheck(this, LocationsService);

          this._http = _http;
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          this.apiUrl = 'http://localhost:8080/locations';
        }

        _createClass(LocationsService, [{
          key: "getLocations",
          value: function getLocations() {
            return this._http.get(this.apiUrl);
          }
        }, {
          key: "addLocation",
          value: function addLocation(location) {
            return this._http.post(this.apiUrl + '/add', location, this.httpOptions);
          }
        }]);

        return LocationsService;
      }();

      LocationsService.ɵfac = function LocationsService_Factory(t) {
        return new (t || LocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      LocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocationsService,
        factory: LocationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/slots.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/slots.service.ts ***!
      \*******************************************/

    /*! exports provided: SlotsService */

    /***/
    function srcAppServicesSlotsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlotsService", function () {
        return SlotsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var SlotsService = /*#__PURE__*/function () {
        function SlotsService(_http) {
          _classCallCheck(this, SlotsService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(SlotsService, [{
          key: "getSlotById",
          value: function getSlotById(locationid) {
            return this._http.get(this.apiUrl + '/slots/getbyid/' + locationid);
          }
        }, {
          key: "getAllSlots",
          value: function getAllSlots() {
            return this._http.get(this.apiUrl + '/slots');
          }
        }, {
          key: "addSlot",
          value: function addSlot(slot) {
            return this._http.post(this.apiUrl + '/slots/add', slot, this.httpOptions);
          }
        }]);

        return SlotsService;
      }();

      SlotsService.ɵfac = function SlotsService_Factory(t) {
        return new (t || SlotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SlotsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SlotsService,
        factory: SlotsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlotsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/users.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/users.service.ts ***!
      \*******************************************/

    /*! exports provided: UsersService */

    /***/
    function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(_http) {
          _classCallCheck(this, UsersService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080/users';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(UsersService, [{
          key: "loginCheck",
          value: function loginCheck(loginDetails) {
            return this._http.post(this.apiUrl + '/login', loginDetails, this.httpOptions);
          }
        }, {
          key: "signup",
          value: function signup(signupDetails) {
            return this._http.post(this.apiUrl + '/signup', signupDetails, this.httpOptions);
          }
        }]);

        return UsersService;
      }();

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/vehicle.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/vehicle.service.ts ***!
      \*********************************************/

    /*! exports provided: VehicleService */

    /***/
    function srcAppServicesVehicleServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VehicleService", function () {
        return VehicleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var VehicleService = /*#__PURE__*/function () {
        function VehicleService(_http) {
          _classCallCheck(this, VehicleService);

          this._http = _http;
          this.apiUrl = 'http://localhost:8080/vehicle';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(VehicleService, [{
          key: "getVehicles",
          value: function getVehicles() {
            return this._http.get(this.apiUrl);
          }
        }, {
          key: "addVehicle",
          value: function addVehicle(vehicle) {
            return this._http.post(this.apiUrl + '/add', vehicle, this.httpOptions);
          }
        }]);

        return VehicleService;
      }();

      VehicleService.ɵfac = function VehicleService_Factory(t) {
        return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VehicleService,
        factory: VehicleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\tarun\OneDrive\Desktop\FullStack\Car-Parking-master\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map