$(document).ready(function(){

    var classContents = ["historic", "update", "tips", "configurations"]
    
    var classTips = ["cat1", "cat2", "cat3", "cat4", "cat5"]

    $('.historic').click(function(element){
        hiddenContent()
        showContent('historic')
    })

    $('.update').click(function(element){
        hiddenContent()
        showContent('update')
    })

    $('.tips').click(function(element){
        hiddenContent()
        showContent('tips')
    })

    $('.configurations').click(function(element){
        hiddenContent()
        showContent('configurations')
    })

    $('.dropdown-item.cat1').click(function(element){
        hiddenContentCategories()
        showContentCategories('cat1')
        
    })

    $('.dropdown-item.cat2').click(function(element){
        hiddenContentCategories()
        showContentCategories('cat2')
        
    })

    $('.dropdown-item.cat3').click(function(element){
        hiddenContentCategories()
        showContentCategories('cat3')
        
    })
    
    $('.dropdown-item.cat4').click(function(element){
        hiddenContentCategories()
        showContentCategories('cat4')
        
    })

    $('.dropdown-item.cat5').click(function(element){
        hiddenContentCategories()
        showContentCategories('cat5')
        
    })
 
    // Show Content Buttons Menu
    function showContent(nameRowToShow){
        $('.row.'+nameRowToShow).show()
    }

    // Hide Content Buttons Menu 
    function hiddenContent(){
        classContents.forEach(iten => {
            $('.row.'+iten).hide()
        })
    }

    // Show Content Categories
    function showContentCategories(nameRowToShow){
        $('.row.'+nameRowToShow).show()
    }

    // Hide Content Categories
    function hiddenContentCategories(){
        classTips.forEach(iten => {
            $('.row.'+iten).hide()
        })

    }
    


    hiddenContentCategories()
    hiddenContent()
    showContent('historic')
})