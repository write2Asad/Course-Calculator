$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
    
    
    //custom code by @naresh for file input sep
    
        var fileInput = document.getElementById('sep_json');
		var fileDisplayArea = document.getElementById('sep_jsondisplay');
// var fileInput1 = document.getElementById('action_json');
//     	var fileDisplayArea1 = document.getElementById('action_jsondisplay');
        

// 		    	fileInput.addEventListener('change', function(e) {
// 			var file = fileInput.files[0];
// 			var textType = /text.*/;

// 			if (file.type.match(textType)) {
// 				var reader = new FileReader();

// 				reader.onload = function(e) {
//           var res= reader.result;
//           function isJSON (something) {
//     if (typeof something != 'string')
//         something = JSON.stringify(something);

//     try {
//         JSON.parse(something);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
//           if(isJSON(res)){
// 					fileDisplayArea.innerText = JSON.stringify(res);
//           }else{
//             fileDisplayArea.innerText = "File content is not JSON"
//           }
// 				}

// 				reader.readAsText(file);	
// 			} else {
// 				fileDisplayArea.innerText = "File not supported!"
// 			}
// 		});
//     fileInput1.addEventListener('change', function(e) {
//     		var file = fileInput1.files[0];
// 			var textType = /text.*/;

// 			if (file.type.match(textType)) {
// 				var reader = new FileReader();

// 				reader.onload = function(e) {
//           var res= reader.result;
//           function isJSON (something) {
//     if (typeof something != 'string')
//         something = JSON.stringify(something);

//     try {
//         JSON.parse(something);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
//           if(isJSON(res)){
// 					fileDisplayArea1.innerText = JSON.stringify(res);
//           }else{
//             fileDisplayArea1.innerText = "File content is not JSON"
//           }
// 				}

// 				reader.readAsText(file);	
// 			} else {
// 				fileDisplayArea1.innerText = "File not supported!"
// 			}
// 		});
    
    //@naresh action dynamic childs
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_id">Action Id</label> <div class="col-md-5"> <input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md"> </div></div><br><br><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="action_name">Action Name</label> <div class="col-md-5"> <input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"> </div></div><br><br><!-- File Button --> <div class="form-group"> <label class="col-md-4 control-label" for="action_json">Action JSON File</label> <div class="col-md-4"> <input id="action_json" name="action_json" class="input-file" type="file"> </div></div></div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
    
    
    
    
});

// Expand/Collapse Menu
$(function () {			
                    $('a[data-toggle="collapse"]').on('click',function(){
				
				var objectID=$(this).attr('href');
				
				if($(objectID).hasClass('in'))
				{
                                    $(objectID).collapse('hide');
				}
				
				else{
                                    $(objectID).collapse('show');
				}
                    });
                    
                    
                    $('#expandAll').on('click',function(){
                        
                        $('a[data-toggle="collapse"]').each(function(){
                            var objectID=$(this).attr('href');
                            if($(objectID).hasClass('in')===false)
                            {
                                 $(objectID).collapse('show');
                            }
                        });
                    });
                    
                    $('#collapseAll').on('click',function(){
                        
                        $('a[data-toggle="collapse"]').each(function(){
                            var objectID=$(this).attr('href');
                            $(objectID).collapse('hide');
                        });
                    });
                    
		});

// Fee Modal menu

  $( function() {
    var dialog, form,
 
      // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
      emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      name = $( "#name" ),
      email = $( "#email" ),
      password = $( "#password" ),
      allFields = $( [] ).add( name ).add( email ).add( password ),
      tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }
 
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
 
    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );
 
      valid = valid && checkLength( name, "username", 3, 16 );
      valid = valid && checkLength( email, "email", 6, 80 );
      valid = valid && checkLength( password, "password", 5, 16 );
 
      valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
      valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
      valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
 
      if ( valid ) {
        $( "#users tbody" ).append( "<tr>" +
          "<td>" + name.val() + "</td>" +
          "<td>" + email.val() + "</td>" +
          "<td>" + password.val() + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
      }
      return valid;
    }
 
//     dialog = $( "#dialog-form" ).dialog({
//       autoOpen: false,
//       height: 400,
//       width: 350,
//       modal: true,
//       buttons: {
//         "Create an account": addUser,
//         Cancel: function() {
//           dialog.dialog( "close" );
//         }
//       },
//       close: function() {
//         form[ 0 ].reset();
//         allFields.removeClass( "ui-state-error" );
//       }
//     });
 
//     form = dialog.find( "form" ).on( "submit", function( event ) {
//       event.preventDefault();
//       addUser();
//     });
 
//     $( "#create-user" ).button().on( "click", function() {
//       dialog.dialog( "open" );
//     });
  } );
