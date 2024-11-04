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
            template: "\n    <h1>Welcome to the Furniture Store!</h1>\n\n    <div *ngIf=\"!purchaseComplete\">\n      <h2>Select a Furniture Item</h2>\n      <label>Furniture Type:</label>\n      <select [(ngModel)]=\"selectedFurnitureType\">\n        <option value=\"chair\">Chair</option>\n        <option value=\"coffeeTable\">Coffee Table</option>\n        <option value=\"sofa\">Sofa</option>\n      </select>\n\n      <label>Furniture Style:</label>\n      <select [(ngModel)]=\"selectedStyle\">\n        <option value=\"art-deco\">Art Deco</option>\n        <option value=\"modern\">Modern</option>\n        <option value=\"victorian\">Victorian</option>\n      </select>\n\n      <button (click)=\"addFurniture()\">Add Furniture</button>\n\n      <h2>Shopping Cart</h2>\n      <ul>\n        <li *ngFor=\"let item of cart\">\n          {{ item.type }} - {{ item.style }}<br>\n          {{ item.details }}\n        </li>\n      </ul>\n\n      <div *ngIf=\"permanentWarning\" style=\"color: red;\">\n        Mixed styles in your selection may affect aesthetics!\n      </div>\n\n      <button (click)=\"completePurchase()\">Complete Purchase</button>\n    </div>\n\n    <div *ngIf=\"purchaseComplete\">\n      <h2>Purchase completed! Thank you for choosing us!</h2>\n      <button (click)=\"resetPurchase()\">New Purchase</button>\n    </div>\n  ",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var App = _classThis = /** @class */ (function () {
        function App_1() {
            this.selectedFurnitureType = 'chair';
            this.selectedStyle = 'art-deco';
            this.initialStyle = null;
            this.cart = [];
            this.styleWarning = false;
            this.permanentWarning = false;
            this.purchaseComplete = false;
            this.artDecoFactory = (0, core_1.inject)(art_deco_furniture_factory_service_1.ArtDecoFurnitureFactoryService);
            this.modernFactory = (0, core_1.inject)(modern_furniture_factory_service_1.ModernFurnitureFactoryService);
            this.victorianFactory = (0, core_1.inject)(victorian_furniture_factory_service_1.VictorianFurnitureFactoryService);
        }
        App_1.prototype.addFurniture = function () {
            if (!this.initialStyle) {
                this.initialStyle = this.selectedStyle;
            }
            else if (this.initialStyle !== this.selectedStyle) {
                this.styleWarning = true;
                this.permanentWarning = true;
            }
            else {
                this.styleWarning = false;
            }
            var factory;
            switch (this.selectedStyle) {
                case 'art-deco':
                    factory = this.artDecoFactory;
                    break;
                case 'modern':
                    factory = this.modernFactory;
                    break;
                case 'victorian':
                    factory = this.victorianFactory;
                    break;
                default:
                    return;
            }
            var details = '';
            switch (this.selectedFurnitureType) {
                case 'chair':
                    var chair = factory.createChair();
                    details = "This exquisite ".concat(chair.style, " chair, crafted from fine ").concat(chair.material, " with a splendid ").concat(chair.color, " finish, brings both elegance and comfort to any room. It offers a surface area of ").concat(chair.calculateArea(), " square centimeters, and with its weight of ").concat(chair.weight, " kg, it is ").concat(chair.isLightweight(10) ? 'lightweight and easy to move' : 'sturdy and stable', ".");
                    break;
                case 'coffeeTable':
                    var coffeeTable = factory.createCoffeeTable();
                    details = "The ".concat(coffeeTable.style, " coffee table, a masterpiece of ").concat(coffeeTable.material, " with a ").concat(coffeeTable.shape, " shape in ").concat(coffeeTable.color, ", adds a touch of sophistication to your space. Its surface area spans ").concat(coffeeTable.calculateSurfaceArea(), " square centimeters, making it ").concat(coffeeTable.isEasyToMove(15) ? 'easy to rearrange' : 'solid and steadfast', ".");
                    break;
                case 'sofa':
                    var sofa = factory.createSofa();
                    details = "Indulge in the comfort of this luxurious ".concat(sofa.style, " sofa, upholstered in premium ").concat(sofa.material, " and designed to accommodate up to ").concat(sofa.seats, " guests. With a generous volume of ").concat(sofa.calculateVolume(), " cubic centimeters, it provides ").concat(sofa.isHeavy(20) ? 'a substantial presence in your living area' : 'a cozy yet light addition to any space', ".");
                    break;
                default:
                    return;
            }
            this.cart.push({
                type: this.selectedFurnitureType,
                style: this.selectedStyle,
                details: details,
            });
            this.styleWarning = false;
        };
        App_1.prototype.completePurchase = function () {
            this.purchaseComplete = true;
        };
        App_1.prototype.resetPurchase = function () {
            this.cart = [];
            this.initialStyle = null;
            this.permanentWarning = false;
            this.purchaseComplete = false;
            this.selectedFurnitureType = 'chair';
            this.selectedStyle = 'art-deco';
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
