const showGoodsOnItemPage = (goodsData, itemId) => {
    let itemDesc = $(".product__table");

    let newItem = goodsData.find(good => {
        if (good.id === itemId) {
            return good;
        }
    });

    // hide slider, filters and categories
    $("section.catalog").addClass("hide");
    $("aside.filters").addClass("hide");
    $(".carousel").addClass("hide");
    $(".page-title-name").addClass("hide");

    // show product and comments
    $("section.product").removeClass("hide");
    $("section.comments").removeClass("hide");

    // clear previous products data
    $(".product__row").remove();

    $(".product__title").text(`${newItem.brand} ${newItem.category} ${newItem.name}`);
    $(".product__img").attr({"src": `${newItem.img}`, "alt": `${newItem.name}`});
    $(".product__price-text").text(`${newItem.price}`);
    $("button.product__btn").attr("data-item-id",`${newItem.id}`);

    // draw item description properties
    for (let key in newItem) {
        if (key !== "price" && key !== "img" && key !== "comments") {
            itemDesc.append(`
            <div class="product__row">
                <div class="product__col product__col--properties">${key}</div>
                <div class="product__col product__col--values">${newItem[key]}</div>
            </div>`);
        }
    }

    // clear previous comments
    $(".comments__left ul li").remove();

    $("button.comments__btn").attr("data-item-id", `${newItem.id}`)

    // need update data.json objects to new format like
    // comments: [{"user": "Vasya", "text": "Lorem ipsum"}, {"user": "Alex", "text": "HAHAHAHA"}]
    if (newItem.comments.length > 0) {
        newItem.comments.forEach(comment => {
            let newComment = $(`<li>${comment.user} left comment: <br /> "${comment.text}"</li>`);
            $(".comments__left ul").append(newComment);
        })
    } else {
        $(".comments__left ul").append($(`<li>Новых комментариев нет.<br />Оставьте свой первым</li>`));
    }

}
