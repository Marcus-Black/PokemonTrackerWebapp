const {productType} = require('./productType');

module.exports.objectify = function (arr, mapd) {
    const Category = arr[mapd.get("Category")];
    const Card_Set = arr[mapd.get("Card_Set")];
    const Product_Name = arr[mapd.get("Product_Name")];
    const Card_Number = arr[mapd.get("Card_Number")];
    const Rarity = arr[mapd.get("Rarity")];
    const Variance = arr[mapd.get("Variance")];
    const Grade = arr[mapd.get("Grade")];
    const Card_Condition = arr[mapd.get("Card_Condition")];
    const Quantity = arr[mapd.get("Quantity")];
    const Date_Added_App = arr[mapd.get("Date_Added_App")];
    const Type = productType(arr[mapd.get("Product_Name")]);

    const obj = {
        Category,
        Card_Set,
        Product_Name,
        Card_Number,
        Rarity,
        Variance,
        Grade,
        Card_Condition,
        Quantity,
        Date_Added_App,
        Type,
    };

    return JSON.stringify(obj);
}
