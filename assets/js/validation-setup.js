function setupValidation($forms) {
	if (($forms == null) || (typeof $().validate != 'function')) {
		return;
	}
	//make sure $forms is indeed a jQuery object & not just a selector
	
	$forms = $($forms);
	
	$forms.each(function(){
		var $form = $(this);
		
		function placeError($error, $element){
			var placeTag = 'label', 
				$place;
				
			if ( $element.is('input[type=radio],input[type=checkbox]') ) {
				placeTag = 'legend';
			}
			$place = $element.closest('.set').find(placeTag);

			$error.prepend(' ');

			$error.appendTo($place);
		}
		
		
		/*	revisite settings once a new version of jQuery Validate 
			to take into account html5 form types
		*/
		$form.validate({
			validateDelegate: function() { },
			onsubmit: true,
            onkeydown: false,
            onkeyup: false,
            onfocusin: false,
            onfocusout: false,
            onclick: false,
			
			errorElement: "span",
			errorPlacement: placeError
		});
		
	});
}

setupValidation($('form'));