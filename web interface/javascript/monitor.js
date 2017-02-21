function refresh_grid( )
{
	//window.alert("Refreshing");
	var xhttp = new XMLHttpRequest( );
	xhttp.onreadystatechange = function( )
	{
		if ( xhttp.readyState == 4 && xhttp.status == 200 ) 
		{
			//window.alert("Ready state: " + xhttp.readyState);
			document.getElementById( "grid" ).innerHTML = xhttp.responseText;
			$("#grid_table").on("mouseenter", "td",
			function() {
			  $(this).css('background-color', '#ff0000');
			  $(this).css('color', '#000000');
			  console.log("MOUSEENTER");
			}).on("mouseleave", "td",
			function() {
			  $(this).css('background-color', 'none');
			  $(this).css('color', 'black'); // or whatever your original color was
			  console.log("MOUSELEAVE");
			});
		}
		else
		{
			//window.alert("Ready state: " + xhttp.readyState);
		}
	};
	xhttp.open("GET", "php/grid.php", true);
	xhttp.send();
}
