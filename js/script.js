$(function(){

    var model = {
        catList: [
            {
                catId: 0, 
                catName: "First Cat", 
                src: "01.jpg", 
                clickCount: 0
            }, 
            {
                catId: 1, 
                catName: "Second Cat", 
                src: "02.jpg", 
                clickCount: 0
            }, 
            {
                catId: 2, 
                catName: "Third Cat", 
                src: "03.jpg", 
                clickCount: 0
            }, 
            {
                catId: 3, 
                catName: "Fourth Cat", 
                src: "04.jpg", 
                clickCount: 0
            }, 
            {
                catId: 4, 
                catName: "Fifth Cat", 
                src: "05.png", 
                clickCount: 0
            }
        ],
        currentSelected: 0
    };
    
    var controller = {
        changeImage: function(catName) {
            $.map(model.catList, function(catObject){
                if (catObject.catName == catName){
                    model.currentSelected = catObject.catId;
                }
            });
            catView.render(model.currentSelected);
        },

        increaseCounter: function() {
            model.catList[model.currentSelected].clickCount++;
            catView.render();
        },

        init: function() {
            listView.init();
            catView.init();
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
        },

        bindClickEvent: function() {
            $('.list-item').each(function(){
                $(this).on('click', function(){
                    controller.changeImage($(this).text());
                });
            });
        },

        init: function() {
            this.render();
            this.bindClickEvent();
        }
    };
    
    var catView = {
        render: function() {
            var catName = $('#cat-name'),
                catCounter = $('#cat-counter');
                this.catImage = $('#cat-img');
                this.currentSelected = model.currentSelected;

            catName.text(model.catList[this.currentSelected].catName);
            this.catImage.attr('src', model.catList[this.currentSelected].src);
            catCounter.text(model.catList[this.currentSelected].clickCount);
        },

        bindClickEvent: function() {
            this.catImage.on('click', function(){
                controller.increaseCounter();
            });
        },

        init: function() {
            this.render(this.currentSelected);
            this.bindClickEvent();
        }
    };

    controller.init();
}());