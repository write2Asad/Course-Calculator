//Add remove dynamic fields
	// Year 0  Additional Costs
$(document).ready(function(){
		var j = 1;
		$('#addcost_btn').click(function(){ 
			
			j++;
			$('#addcost').append('<tr id="remove_cost'+j+'"><td></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Description " class="form-control name_list"></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Add costs" class="form-control name_list" />  </td><td><button name="remove_cost_yearZero" id="'+j+'" class="btn btn-danger remove_cost_yearZero"> X </button</td></tr> ');
		});
		$(document).on('click', '.remove_cost_yearZero', function(){ 
			var remove_cost_id = $(this).attr("id");
			$("#remove_cost"+remove_cost_id+'').remove();
		});
	
	});
 /// Year 0  Add Year
$(document).ready(function(){
		var i = 1;
		$('#addYearZero').click(function(){ 
			
			i++;
			$('#yearZero').append('<tr id="row'+i+'"><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Staff Grading)</option><option value="0">Grade 9</option><option value="1">Grade 8</option><option value="1">Grade 7</option><option value="1">Supporting Professor</option><option value="1">Teacher</option><option value="1">Helper/Visiting Staff</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Enter Number" class="form-control name_list"/></td><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Salary)</option><option value="0">£31</option><option value="1">£34</option><option value="2">£37</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Costs" class="form-control name_list" disabled=disable />  </td><td><button name="remove" id="'+i+'" class="btn btn-danger btn_remove_yearZero"> X </button</td></tr> ');
		});
		$(document).on('click', '.btn_remove_yearZero', function(){ 
			var button_id = $(this).attr("id");
			$("#row"+button_id+'').remove();
		});

	});


//add Remove Dynamic fields close

 /// Year One // Add Year
$(document).ready(function(){
		var i = 1;
		$('#addYearOne').click(function(){ 
			
			i++;
			$('#dynamic_field').append('<tr id="rowYearOne'+i+'"><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Staff Grading)</option><option value="0">Grade 9</option><option value="1">Grade 8</option><option value="1">Grade 7</option><option value="1">Supporting Professor</option><option value="1">Teacher</option><option value="1">Helper/Visiting Staff</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Enter Year" class="form-control name_list" /></td><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Salary)</option><option value="0">£31</option><option value="1">£34</option><option value="2">£37</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Costs" class="form-control name_list" disabled=disable/>  </td><td><button name="btn_remove_yearOne" id="'+i+'" class="btn btn-danger btn_remove_yearOne"> X </button</td></tr> ');
		});
		$(document).on('click', '.btn_remove_yearOne', function(){ 
			var button_id = $(this).attr("id");
			$("#rowYearOne"+button_id+'').remove();
		});
	});
//add Remove Dynamic fields close

	// Year 1 Additional Costs

$(document).ready(function(){
		var i = 1;
		$('#Year_One_cost_btn').click(function(){ 
			
			i++;
			$('#add_yearOne_cost').append('<tr id="row'+i+'"><td></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Description " class="form-control name_list"></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Add costs" class="form-control name_list" />  </td><td><button name="remove_cost" id="'+i+'" class="btn btn-danger remove_cost_yearOne"> X </button</td></tr> ');
		});
		$(document).on('click', '.remove_cost_yearOne', function(){ 
			var button_id = $(this).attr("id");
			$("#row"+button_id+'').remove();
		});
	});

 /// Year Two // Add Year
$(document).ready(function(){
		var i = 1;
		$('#addYearTwo').click(function(){ 
			
			i++;
			$('#yearTwo').append('<tr id="row'+i+'"><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Staff Grading)</option><option value="0">Grade 9</option><option value="1">Grade 8</option><option value="1">Grade 7</option><option value="1">Supporting Professor</option><option value="1">Teacher</option><option value="1">Helper/Visiting Staff</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Enter Year" class="form-control name_list" /></td><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Salary)</option><option value="0">£31</option><option value="1">£34</option><option value="2">£37</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Costs" class="form-control name_list" disabled=disable />  </td><td><button name="btn_remove_yearTow" id="'+i+'" class="btn btn-danger btn_remove_yearTow"> X </button</td></tr> ');
		});
		$(document).on('click', '.btn_remove_yearTow', function(){ 
			var button_id = $(this).attr("id");
			$("#row"+button_id+'').remove();
		});
		$('#submit').click(function(){ 
			$.ajax({ 
				url:"test.php",
				method: "POST",
				data:$('#add_name').serialize(),
				success:function(data){
					alert(data)
					$('#add_name')[0].reset();
				}		
			 });
		});
	});

	// Year 2 /// Additional Costs
$(document).ready(function(){
		var i = 1;
		$('#Year_Two_cost_btn').click(function(){ 
			
			i++;
			$('#add_yearTwo_cost').append('<tr id="row_yearTwo_cost'+i+'"><td></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Description " class="form-control name_list"></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Add costs" class="form-control name_list" />  </td><td><button name="remove_cost_yearTow" id="'+i+'" class="btn btn-danger remove_cost_yearTow"> X </button</td></tr> ');
		});
		$(document).on('click', '.remove_cost_yearTow', function(){ 
			var button_id = $(this).attr("id");
			$("#row_yearTwo_cost"+button_id+'').remove();
		});
		$('#submit').click(function(){ 
			$.ajax({ 
				url:"test.php",
				method: "POST",
				data:$('#add_name').serialize(),
				success:function(data){
					alert(data)
					$('#add_name')[0].reset();
				}		
			 });
		});
	});


/// Year Three // Add Year
$(document).ready(function(){
		var i = 1;
		$('#add_yearThree_btn').click(function(){ 
			
			i++;
			$('#add_yearThree').append('<tr id="row_yearThree'+i+'"><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Staff Grading)</option><option value="0">Grade 9</option><option value="1">Grade 8</option><option value="1">Grade 7</option><option value="1">Supporting Professor</option><option value="1">Teacher</option><option value="1">Helper/Visiting Staff</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Enter Year" class="form-control name_list" /></td><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Salary)</option><option value="0">£31</option><option value="1">£34</option><option value="2">£37</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Costs" class="form-control name_list" disabled=disable />  </td><td><button name="btn_remove_yearThree" id="'+i+'" class="btn btn-danger btn_remove_yearThree"> X </button</td></tr> ');
		});
		$(document).on('click', '.btn_remove_yearThree', function(){ 
			var button_id = $(this).attr("id");
			$("#row_yearThree"+button_id+'').remove();
		});
		$('#submit').click(function(){ 
			$.ajax({ 
				url:"test.php",
				method: "POST",
				data:$('#add_name').serialize(),
				success:function(data){
					alert(data)
					$('#add_name')[0].reset();
				}		
			 });
		});
	});

	// Year 3/// Additional Costs
$(document).ready(function(){
		var i = 1;
		$('#add_yearThree_costs_btn').click(function(){ 
			
			i++;
			$('#add_yearThree_costs').append('<tr id="row_yearThree_costs'+i+'"><td></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Description " class="form-control name_list"></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Add costs" class="form-control name_list" />  </td><td><button name="remove_cost_year_three" id="'+i+'" class="btn btn-danger remove_cost_year_three"> X </button</td></tr> ');
		});
		$(document).on('click', '.remove_cost_year_three', function(){ 
			var button_id = $(this).attr("id");
			$("#row_yearThree_costs"+button_id+'').remove();
		});
		$('#submit').click(function(){ 
			$.ajax({ 
				url:"test.php",
				method: "POST",
				data:$('#add_name').serialize(),
				success:function(data){
					alert(data)
					$('#add_name')[0].reset();
				}		
			 });
		});
	});

/// Year Four // Add Year
$(document).ready(function(){
		var i = 1;
		$('#add_yearFour_btn').click(function(){ 
			
			i++;
			$('#add_yearFour').append('<tr id="row_yearFour'+i+'"><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Staff Grading)</option><option value="0">Grade 9</option><option value="1">Grade 8</option><option value="1">Grade 7</option><option value="1">Supporting Professor</option><option value="1">Teacher</option><option value="1">Helper/Visiting Staff</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Enter Year" class="form-control name_list" /></td><td><select id="possible_instances" name="possible_instances" class="form-control"><option value="" selected="selected">(Select Salary)</option><option value="0">£31</option><option value="1">£34</option><option value="2">£37</option></select></td><td><input type="text" name="name[]" id="name" placeholder="Costs" class="form-control name_list" disabled=disable />  </td><td><button name="btn_remove_yearFour" id="'+i+'" class="btn btn-danger btn_remove_yearFour"> X </button</td></tr> ');
		});
		$(document).on('click', '.btn_remove_yearFour', function(){ 
			var button_id = $(this).attr("id");
			$("#row_yearFour"+button_id+'').remove();
		});
		$('#submit').click(function(){ 
			$.ajax({ 
				url:"test.php",
				method: "POST",
				data:$('#add_name').serialize(),
				success:function(data){
					alert(data)
					$('#add_name')[0].reset();
				}		
			 });
		});
	});

	// Year 4/// Additional Costs
$(document).ready(function(){
		var i = 1;
		$('#add_yearFour_costs_btn').click(function(){ 
			
			i++;
			$('#add_yearFour_costs').append('<tr id="row_yearFour_costs'+i+'"><td></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Description " class="form-control name_list"></td><td><input type="text" name="addcost[]" id="addcost" placeholder="Add costs" class="form-control name_list" />  </td><td><button name="remove_cost" id="'+i+'" class="btn btn-danger remove_cost"> X </button</td></tr> ');
		});
		$(document).on('click', '.remove_cost', function(){ 
			var button_id = $(this).attr("id");
			$("#row_yearFour_costs"+button_id+'').remove();
		});
		$('#submit').click(function(){ 
			$.ajax({ 
				url:"test.php",
				method: "POST",
				data:$('#add_name').serialize(),
				success:function(data){
					alert(data)
					$('#add_name')[0].reset();
				}		
			 });
		});
	});
// Expand and Collapse toggle 
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
// Expand and Collapse toggle closes