function Flight() {
    this.type = "flight";
    console.log("This is Flight");
}

function Hotel() {
    this.type = "hotel";
    console.log("This is Hotel");
}

function User() {
    this.shopCart = [];
}

var productFactory = (function () {
    var productFactories = {
        "flight": function () {
            return new Flight();
        },
        "hotel": function () {
            return new Hotel();
        }
    };
    
    return {
        createProduct: function (productType) {
            return productFactories[productType]();
        }
    }
})();

User.prototype = {
    constructor: User,
    order: function (productType) {
        this.shopCart.push(productFactory.createProduct(productType));
    }
}

var user = new User();
user.order("flight");
user.order("hotel");
console.log(user.shopCart);
