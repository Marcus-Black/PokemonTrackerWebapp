module.exports.fieldSet = function (str) {
    const mod = str.split(',');
    const mapd = new Map();
    for(let i = 0; i < mod.length; i++){
        if(mod[i] == 'Set'){
                mapd.set('Card_Set', i);
            } else if (mod[i] == 'Product Name'){
                mapd.set('Product_Name', i);
            } else if (mod[i] == 'Card Number'){
                mapd.set('Card_Number', i);
            } else if (mod[i] == 'Card Condition'){
                mapd.set('Card_Condition', i);
            } else if (mod[i] == 'Date Added'){
                mapd.set('Date_Added_App', i);
            } else {
                mapd.set(mod[i], i);
            }
        }
        return mapd;
    }