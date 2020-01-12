(async function() {
    const GOODS_STORAGE_NAME = 'all_goods';
    const CART_STORAGE_NAME = 'goods_in_cart';
    let goodsData = await getGoodsData(GOODS_STORAGE_NAME);
    let goodsInCartData = await getGoodsData(CART_STORAGE_NAME);

    $("body").on("click", {"all_goods": goodsData, "goods_in_cart": goodsInCartData} ,mainEventHandler);
    showGoodsOnMainAndCategoryPage(goodsData);
    showBrandFilter(goodsData);
    showResolutionsFilter(goodsData);
})();