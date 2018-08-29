$(function(){

    var model = {
        catList: [
            {
                catId: 0, 
                catName: "First Cat", 
                clickCount: 0
            }, 
            {
                catId: 1, 
                catName: "Second Cat", 
                clickCount: 0
            }, 
            {
                catId: 2, 
                catName: "Third Cat", 
                clickCount: 0
            }, 
            {
                catId: 3, 
                catName: "Fourth Cat", 
                clickCount: 0
            }, 
            {
                catId: 4, 
                catName: "Fifth Cat", 
                clickCount: 0
            }
        ],
        currentSelected: 0
    };
    
    var controller = {
        changeImage: function(catName) {
            $.each(model.catList, function(catName){
                if ($(this).catName === catName)
                    model.currentSelected = $(this).catId;
            });
            catView.render(model.currentSelected);
        }
    };
    
    var listView = {
        render: function() {
            var domCatList = $("#cat_list");
            for (var i = 0; i < model.catList.length; i++) {
                var listItem = 
                    '<li class="list-item">' + 
                        model.catList[i].catName +
                    '</li>';
                domCatList.append(listItem);
            }
            $('.list-item').each(function(){
                $(this).on('click', controller.changeImage($(this).text()));
            });
        }
    };
    
    var catView = {
        render: function(currentSelected) {
            var catName = $('cat-name'),
                catImage = $('#cat-img'),
                catCounter = $('#cat-counter');

            catName.text('ff');
        }
    };

    listView.render();
}());