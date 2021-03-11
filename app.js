
$('.submit').on('click', function() {



    $('.commentSection').append(`
      <div class="commentContainer">

                <div class = "editAndDeleteContainer">

                    <div class="edit">Edit</div>

                    <div class="delete">Delete</div>

                </div>

                <div class="floater">

                <img src="images/icon.png">

                <div class="nameAndCommentContainer">

                <div class="nameInComment"><h3>${$('.displayName').val()}</h3></div>

                <div class="commentInComment">${$('.comment').val()}</div>

                </div>  
                
                </div>
      </div>      
      `
    );
    });


  $('.commentSection').on('click', '.delete', function() {
    
    let thisComment = $(this).parents()[1];
    
    $(thisComment).remove();


  })

  $('.commentSection').on('click', '.edit', function() {
    
   let update = $(this).parents()[1]
   
     
   $(update).append(`
   
   <div class="update">
   <input class="commentUpdate" type="text" placeholder="Comment Edit"></input>
   <span class="submitUpdate" id="submitUpdate">Update</span>
   </div>
`
   );
  });

 
  $('.commentSection').on('click', '.submitUpdate', function() {

    let updatedComment = $(this).prev();

    let updatedCommentContent = $(updatedComment).val();

    console.log(updatedCommentContent)

    let oldComment = $(this).parents()[1];

    console.log(oldComment)

    let oldCommentContainer = $(oldComment).children()[1];

    console.log(oldCommentContainer)

    let oldOldCommentContainer = $(oldCommentContainer).children()[1];

    console.log(oldOldCommentContainer)

    let oldOldOldCommentContainer = $(oldOldCommentContainer).children()[1];

    console.log(oldOldOldCommentContainer)

    $(oldOldOldCommentContainer).text(updatedCommentContent);


  });