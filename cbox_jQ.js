


$(document).ready(function() {


//kyrsten's suggestion to add var = container
for(i = 0; i < 5; i++) {
      var row = $("<div class = 'row'> </div>");
      $( "#boxContainer" ).append(row);
      for(j = 0; j < 5; j++) {
           (row).append( "<div class = 'box' id = 'b"+i+j+"'> </div>" );
      }      
}

// //create sliders 
// for(ii = 0; ii < 4; ii++) {
//       var slider = $("<div id = 's"+ii+"' class = 'slider' ><input type='range' min='0'max='255'step='1'value='50'></div>");
//       $( "#sliderContainer" ).append(slider);
//   }

//    $( "#description" ).slider();

  // for(ii = 0; ii < 4; ii++) {
  //     var slider = $("<div id = 's"+ii+"' class = 'slider' ></div>");
  //     $( "#sliderContainer" ).append($("#s"+ii+"s").slider());
  // }

  //jk. all your answers here: http://jqueryui.com/slider/#colorpicker


//test method to try other way. it did not  work.
//for(i = 0; i < 5; i++) {
//       $( "#boxContainer" ).append("<div class = 'container'> </div>");
//       for(j = 0; j < 5; j++) {
//            $(".container").append( "<div class = 'box' id = 'b"+i+j+"'> my id is "+i+j+"</div>" );
//       }      
//}



	// change color of box after mouse hover
	$('.box').hover(
			function() {
			    var thisID = $(this).attr('id'); //get box's id
			    thisID = "#"+thisID;     
 
			    // test get id  by printing to console
			    console.log("hovering on "+thisID);
			    
			    //convert color to rgb and printout resulting array
			    var color = $(thisID).css("background-color");
			    console.log(color);
			    finalColor = resolve_color(color);
			    console.log(finalColor);

			    //convert to int
			    var red = parseInt(finalColor['red']);
			    var green = parseInt(finalColor['green']);
			    var blue = parseInt(finalColor['blue']); 
			    
			    //change (add to) rgb values
			    
			     red += 3;
		         green += 3;
	     	     blue += 3;
						   

			      // convert individ colors back to strings, create rgb string
			      red = red.toString();
			      green = green.toString();
		      	  blue = blue.toString();
       		      cssColor = "rgb("+red+","+green+","+blue+")";
					   
			      // reset background color
			      $(thisID).css("background-color",cssColor);

			});





//---------------------------------------------------------------------
//======================= RESOLVE COLOR SCRIPT ========================
//======= http://www.kadimi.com/en/javascript-tween-function ==========
//----------------------------------------------------------------------


function resolve_color(color){
    // return an array containing R, G and B values
    if(color === 'transparent')// IE (6 and ?)
        color = '#FFF';
    var r,g,b;
    var hex_color_pcre = new RegExp("^#[0-9a-f]{3}([0-9a-f]{3})?$",'gi');
    var rgb_color_pcre = new RegExp("rgb\\(\\s*((?:[0-2]?[0-9])?[0-9])\\s*,\\s*((?:[0-2]?[0-9])?[0-9])\\s*,\\s*((?:[0-2]?[0-9])?[0-9])\\s*\\)$",'gi');
    var rgb_percent_color_pcre = new RegExp("rgb\\(\\s*((?:[0-1]?[0-9])?[0-9])%\\s*,\\s*((?:[0-1]?[0-9])?[0-9])%\\s*,\\s*((?:[0-1]?[0-9])?[0-9])%\\s*\\)$",'gi');
    if(color.match(hex_color_pcre)){
        if(color.length == 4){
            r  = color.charAt(1)+""+color.charAt(1);
            g  = color.charAt(2)+""+color.charAt(2);
            b  = color.charAt(3)+""+color.charAt(3);
        }
        else{
            r  = color.charAt(1)+""+color.charAt(2);
            g  = color.charAt(3)+""+color.charAt(4);
            b  = color.charAt(5)+""+color.charAt(6);
        }
        r = h2d(r);
        g = h2d(g);
        b = h2d(b);
    }
    else if(color.match(rgb_color_pcre)){
        r = RegExp.$1;
        g = RegExp.$2;
        b = RegExp.$3;
    }
    else if(color.match(rgb_percent_color_pcre)){
        r = parseInt((RegExp.$1)*2.55);
        g = parseInt((RegExp.$2)*2.55);
        b = parseInt((RegExp.$3)*2.55);
    }
    else
        return false;

    var returned =[];
    returned['red'] = r;
    returned['green'] = g;
    returned['blue'] = b;
    return returned;
}

function h2d(h) {
    // hex to decimal
    return parseInt(h,16);
} 

    });