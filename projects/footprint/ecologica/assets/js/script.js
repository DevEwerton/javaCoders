$(document).ready(function(){

    var classContents = ["historic", "update", "tips", "configurations", "adm"]
    
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

    $('.adm').click(function(element){
        hiddenContent()
        showContent('adm')
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
    
    $('.btnDeleteQuestion').on('click', function(e){
        let descriptionquestion = $(this).data('descriptionquestion')
        let idquestion = $(this).data('idquestion')
        $('#idQuestionDelete').val(idquestion)
        $('#descriptionDelete').html(descriptionquestion)
        $('#modalConfirmDeleteQuestion').modal('show')
    })

    $('.efectDeleteQuestion').on('click', function(){
        let idQuestionDelete = $('#idQuestionDelete').val()
        console.log('(AJAX) Você só precisa excluir esse ID da Pergunta: ',idQuestionDelete)
    })

    $('.btnUpdateQuestion').on('click', function(e){
        let idquestionupdate = $(this).data('idquestionupdate')
        let descriptionQuestion = $(this).data('descriptionquestionupdate')
        $('#question').val(descriptionQuestion)
    })

    hiddenContentCategories()
    hiddenContent()
    showContent('historic')
})