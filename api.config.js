const URL_SEARCH = "https://api.mercadolibre.com/sites/MLA/search?q=";
const URL_ITEM_BY_ID ="https://api.mercadolibre.com/items/";
module.exports = {
    getApiOptions: function(){
        return {
            uri:"",
            json:true
        };
    },

    getUrlSearch:function(){
        return URL_SEARCH;
    },

    getUrlItemById:function(){
        return URL_ITEM_BY_ID;
    }
}