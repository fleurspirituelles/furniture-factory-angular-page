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
exports.ArtDecoFurnitureFactoryService = void 0;
var core_1 = require("@angular/core");
var ArtDecoChair = /** @class */ (function () {
    function ArtDecoChair() {
        this.style = 'Art Deco';
        this.material = 'Metal';
        this.hasArmrest = false;
        this.color = 'Gold';
        this.height = 90;
        this.width = 50;
        this.weight = 15;
    }
    ArtDecoChair.prototype.display = function () {
        return "This is an ".concat(this.style, " chair made of ").concat(this.material, " in ").concat(this.color, " color.");
    };
    ArtDecoChair.prototype.calculateArea = function () {
        return this.height * this.width;
    };
    ArtDecoChair.prototype.isLightweight = function (threshold) {
        return this.weight < threshold;
    };
    return ArtDecoChair;
}());
var ArtDecoSofa = /** @class */ (function () {
    function ArtDecoSofa() {
        this.style = 'Art Deco';
        this.material = 'Leather';
        this.seats = 3;
        this.color = 'Black';
        this.length = 200;
        this.width = 80;
        this.weight = 40;
    }
    ArtDecoSofa.prototype.display = function () {
        return "This is an ".concat(this.style, " sofa made of ").concat(this.material, " with ").concat(this.seats, " seats in ").concat(this.color, " color.");
    };
    ArtDecoSofa.prototype.calculateVolume = function () {
        return this.length * this.width * this.seats;
    };
    ArtDecoSofa.prototype.isHeavy = function (threshold) {
        return this.weight > threshold;
    };
    return ArtDecoSofa;
}());
var ArtDecoCoffeeTable = /** @class */ (function () {
    function ArtDecoCoffeeTable() {
        this.style = 'Art Deco';
        this.material = 'Glass';
        this.shape = 'Round';
        this.color = 'Silver';
        this.diameter = 100;
        this.weight = 20;
    }
    ArtDecoCoffeeTable.prototype.display = function () {
        return "This is an ".concat(this.style, " coffee table made of ").concat(this.material, " in ").concat(this.color, " color with a ").concat(this.shape, " shape.");
    };
    ArtDecoCoffeeTable.prototype.calculateSurfaceArea = function () {
        return Math.PI * Math.pow(this.diameter / 2, 2);
    };
    ArtDecoCoffeeTable.prototype.isEasyToMove = function (threshold) {
        return this.weight < threshold;
    };
    return ArtDecoCoffeeTable;
}());
var ArtDecoFurnitureFactoryService = function () {
    var _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root',
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ArtDecoFurnitureFactoryService = _classThis = /** @class */ (function () {
        function ArtDecoFurnitureFactoryService_1() {
        }
        ArtDecoFurnitureFactoryService_1.prototype.createChair = function () {
            return new ArtDecoChair();
        };
        ArtDecoFurnitureFactoryService_1.prototype.createSofa = function () {
            return new ArtDecoSofa();
        };
        ArtDecoFurnitureFactoryService_1.prototype.createCoffeeTable = function () {
            return new ArtDecoCoffeeTable();
        };
        ArtDecoFurnitureFactoryService_1.prototype.getStyle = function () {
            return 'Art Deco';
        };
        return ArtDecoFurnitureFactoryService_1;
    }());
    __setFunctionName(_classThis, "ArtDecoFurnitureFactoryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ArtDecoFurnitureFactoryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ArtDecoFurnitureFactoryService = _classThis;
}();
exports.ArtDecoFurnitureFactoryService = ArtDecoFurnitureFactoryService;
