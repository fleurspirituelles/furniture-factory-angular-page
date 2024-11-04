"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var chair_component_1 = require("./app/components/chair.component");
var coffee_table_component_1 = require("./app/components/coffee-table.component");
var sofa_component_1 = require("./app/components/sofa.component");
var art_deco_furniture_factory_service_1 = require("./app/services/art-deco-furniture.factory.service");
var modern_furniture_factory_service_1 = require("./app/services/modern-furniture.factory.service");
var victorian_furniture_factory_service_1 = require("./app/services/victorian-furniture.factory.service");
var App = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            standalone: true,
            imports: [chair_component_1.ChairComponent, coffee_table_component_1.CoffeeTableComponent, sofa_component_1.SofaComponent, common_1.CommonModule, forms_1.FormsModule],
            template: "\n    <h1>Welcome to the Furniture Store!</h1>\n    <label>Select Furniture Style:</label>\n    <select [(ngModel)]=\"selectedStyle\" (change)=\"updateFactory()\">\n      <option value=\"art-deco\">Art Deco</option>\n      <option value=\"modern\">Modern</option>\n      <option value=\"victorian\">Victorian</option>\n    </select>\n\n    <label>Select Furniture Type:</label>\n    <div>\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"furnitureSelection.chair\" />\n        Chair\n      </label>\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"furnitureSelection.coffeeTable\" />\n        Coffee Table\n      </label>\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"furnitureSelection.sofa\" />\n        Sofa\n      </label>\n    </div>\n\n    <button (click)=\"confirmSelection()\">Confirm Selection</button>\n\n    <div *ngIf=\"showWarning\" style=\"color: red;\">\n      Warning: It is recommended to select matching furniture styles.\n    </div>\n\n    <div *ngIf=\"selectedFactory\">\n      <app-chair *ngIf=\"furnitureSelection.chair\"></app-chair>\n      <app-coffee-table *ngIf=\"furnitureSelection.coffeeTable\"></app-coffee-table>\n      <app-sofa *ngIf=\"furnitureSelection.sofa\"></app-sofa>\n    </div>\n  ",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var App = _classThis = /** @class */ (function () {
        function App_1() {
            this.selectedStyle = 'art-deco';
            this.selectedFactory = null;
            this.showWarning = false;
            this.furnitureSelection = {
                chair: false,
                coffeeTable: false,
                sofa: false,
            };
            this.artDecoFactory = (0, core_1.inject)(art_deco_furniture_factory_service_1.ArtDecoFurnitureFactoryService);
            this.modernFactory = (0, core_1.inject)(modern_furniture_factory_service_1.ModernFurnitureFactoryService);
            this.victorianFactory = (0, core_1.inject)(victorian_furniture_factory_service_1.VictorianFurnitureFactoryService);
        }
        App_1.prototype.updateFactory = function () {
            switch (this.selectedStyle) {
                case 'art-deco':
                    this.selectedFactory = this.artDecoFactory;
                    break;
                case 'modern':
                    this.selectedFactory = this.modernFactory;
                    break;
                case 'victorian':
                    this.selectedFactory = this.victorianFactory;
                    break;
                default:
                    this.selectedFactory = null;
            }
        };
        App_1.prototype.confirmSelection = function () {
            var _this = this;
            var selectedStyles = [this.artDecoFactory, this.modernFactory, this.victorianFactory];
            this.showWarning = selectedStyles.filter(function (factory) { return factory === _this.selectedFactory; }).length > 1;
            this.updateFactory();
        };
        return App_1;
    }());
    __setFunctionName(_classThis, "App");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        App = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return App = _classThis;
}();
exports.App = App;
(0, platform_browser_1.bootstrapApplication)(App);
