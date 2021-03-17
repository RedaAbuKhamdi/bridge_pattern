// General Case
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Слой реализации
var Implementation = /** @class */ (function () {
    function Implementation(currentState) {
        // Какие-то поля
        this.state = 0;
        this.state = currentState;
    }
    // Методы общие для всех конкретизаций
    Implementation.prototype.get_current_state = function () {
        console.log(" Текущее состояние " + this.state);
    };
    return Implementation;
}());
// Конкретизации Имплементации
var ImplementationConcretizationA = /** @class */ (function (_super) {
    __extends(ImplementationConcretizationA, _super);
    function ImplementationConcretizationA(currentState) {
        return _super.call(this, currentState) || this;
    }
    ImplementationConcretizationA.prototype.change_state = function () {
        this.state++;
        this.get_current_state();
    };
    return ImplementationConcretizationA;
}(Implementation));
var ImplementationConcretizationB = /** @class */ (function (_super) {
    __extends(ImplementationConcretizationB, _super);
    function ImplementationConcretizationB(currentState) {
        return _super.call(this, currentState) || this;
    }
    ImplementationConcretizationB.prototype.change_state = function () {
        this.state--;
        this.get_current_state();
    };
    return ImplementationConcretizationB;
}(Implementation));
// Слой абстракции
var Abstraction = /** @class */ (function () {
    function Abstraction(particularImplementation) {
        this.implementation = particularImplementation;
    }
    // Делегация работы реализации
    Abstraction.prototype.change_state = function () {
        this.implementation.change_state();
    };
    return Abstraction;
}());
// Конкретизация абстракции
var AbstractionExtentionA = /** @class */ (function (_super) {
    __extends(AbstractionExtentionA, _super);
    function AbstractionExtentionA(particularImplementation) {
        return _super.call(this, particularImplementation) || this;
    }
    AbstractionExtentionA.prototype.abstraction_specific_action = function () {
        console.log(" Действия конкретизации абстракции A");
    };
    return AbstractionExtentionA;
}(Abstraction));
var AbstractionExtentionB = /** @class */ (function (_super) {
    __extends(AbstractionExtentionB, _super);
    function AbstractionExtentionB(particularImplementation) {
        return _super.call(this, particularImplementation) || this;
    }
    AbstractionExtentionB.prototype.abstraction_specific_action = function () {
        console.log(" Действия конкретизации абстракции B");
    };
    return AbstractionExtentionB;
}(Abstraction));
var version_a = new AbstractionExtentionA(new ImplementationConcretizationB(0));
var version_b = new AbstractionExtentionB(new ImplementationConcretizationA(0));
version_a.change_state();
version_a.abstraction_specific_action();
version_b.change_state();
version_b.abstraction_specific_action();
//# sourceMappingURL=bridge_pattern_general.js.map