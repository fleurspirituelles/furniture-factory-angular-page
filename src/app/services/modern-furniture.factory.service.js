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
exports.ModernFurnitureFactoryService = void 0;
var core_1 = require("@angular/core");
var ModernChair = /** @class */ (function () {
    function ModernChair() {
        this.style = "Modern";
        this.material = "Plastic";
        this.hasArmrest = true;
        this.color = "White";
        this.height = 85;
        this.width = 45;
        this.weight = 10;
    }
    ModernChair.prototype.display = function () {
        return "This is a ".concat(this.style, " chair made of ").concat(this.material, " in ").concat(this.color, " color with armrests.");
    };
    ModernChair.prototype.calculateArea = function () {
        return this.height * this.width;
    };
    ModernChair.prototype.isLightweight = function (threshold) {
        return this.weight < threshold;
    };
    return ModernChair;
}());
var ModernSofa = /** @class */ (function () {
    function ModernSofa() {
        this.style = "Modern";
        this.material = "Fabric";
        this.seats = 2;
        this.color = "Gray";
        this.length = 180;
        this.width = 75;
        this.weight = 35;
    }
    ModernSofa.prototype.display = function () {
        return "This is a ".concat(this.style, " sofa made of ").concat(this.material, " with ").concat(this.seats, " seats in ").concat(this.color, " color.");
    };
    ModernSofa.prototype.calculateVolume = function () {
        return this.length * this.width * this.seats;
    };
    ModernSofa.prototype.isHeavy = function (threshold) {
        return this.weight > threshold;
    };
    return ModernSofa;
}());
var ModernCoffeeTable = /** @class */ (function () {
    function ModernCoffeeTable() {
        this.style = "Modern";
        this.material = "Wood";
        this.shape = "Square";
        this.color = "Black";
        this.diameter = 90;
        this.weight = 25;
    }
    ModernCoffeeTable.prototype.display = function () {
        return "This is a ".concat(this.style, " coffee table made of ").concat(this.material, " in ").concat(this.color, " color with a ").concat(this.shape, " shape.");
    };
    ModernCoffeeTable.prototype.calculateSurfaceArea = function () {
        return this.diameter * this.diameter;
    };
    ModernCoffeeTable.prototype.isEasyToMove = function (threshold) {
        return this.weight < threshold;
    };
    return ModernCoffeeTable;
}());
var ModernFurnitureFactoryService = function () {
    var _classDecorators = [(0, core_1.Injectable)({
            providedIn: "root",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ModernFurnitureFactoryService = _classThis = /** @class */ (function () {
        function ModernFurnitureFactoryService_1() {
        }
        ModernFurnitureFactoryService_1.prototype.createChair = function () {
            return new ModernChair();
        };
        ModernFurnitureFactoryService_1.prototype.createSofa = function () {
            return new ModernSofa();
        };
        ModernFurnitureFactoryService_1.prototype.createCoffeeTable = function () {
            return new ModernCoffeeTable();
        };
        ModernFurnitureFactoryService_1.prototype.getStyle = function () {
            return "Modern";
        };
        return ModernFurnitureFactoryService_1;
    }());
    __setFunctionName(_classThis, "ModernFurnitureFactoryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ModernFurnitureFactoryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ModernFurnitureFactoryService = _classThis;
}();
exports.ModernFurnitureFactoryService = ModernFurnitureFactoryService;
