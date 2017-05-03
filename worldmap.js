(function($){
  Drupal.behaviors.jspageLoad = {
    attach: function(context, settings) {
      var $jspage = $('#' + settings.jspage.divId);
      $jspage.once('jspageLoad', function() {
        // Clear no Javascript message
        $jspage.html('');
        $("#breadcrumb").html('');
		document.title = 'NRFA Station Data';
		
        // Add html structure for page
        
        var $stationNumberDiv = $('<div id="stationNumber"></div>').appendTo($jspage);
        var $contentDiv = $('<div id="contentDiv"></div>').appendTo($jspage);
        var $stationTabDiv = $('<div id="stationTab" class="nrfaTab"></div>').appendTo($contentDiv);
        var $c1r1Div = $('<div id="c1r1"></div>').appendTo($contentDiv);
        var $stationDetailsDiv = $('<div id="stationDetails"></div>').appendTo($c1r1Div);
        var $descriptionsDiv = $('<div id="descriptions"></div>').appendTo($c1r1Div);
		var $stationUtilityDiv = $('<div id="stationUtility"></div>').appendTo($c1r1Div);
		var $detailedDescriptionsDiv = $('<div id="detailedDescriptionsDiv"></div>').appendTo($c1r1Div);
		var $stationOtherDetailsDiv = $('<div id="stationOtherDetailsDiv"></div>').appendTo($c1r1Div);
		var $rightColDiv = $('<div id="rightColDiv"></div>').appendTo($contentDiv);
		var $logoDiv = $('<div id="logoDiv"></div>').appendTo($rightColDiv);
		var $location_mapDiv = $('<div id="location_map" class="nrfa_location_map"></div>').appendTo($rightColDiv);
		var $imageDiv = $('<div id="imageTestDiv"></div>').appendTo($rightColDiv);
		var $imageButtonDiv = $('<div id="imageButtonDiv"></div>').appendTo($rightColDiv);
		
        // Initialise variables		
        mapZoom=false;
        isMapPage=false;
        isGraphPage=false;
        isStationPage=true;
		
		getStationNumber(settings.jspage)
		
		// Call functions to populate page
        fillInStationDetails(stationID);
		getStationImageInfo(stationID);
		$location_mapDiv.html('<img src="'+iconStem+'location_maps/STN_Trans_'+stationID+'.png" style="border:0" />');
		
		// Attach stylesheets
		var externalCss='http://nrfaapps.ceh.ac.uk/lib/jquery/scrollable-buttons.css';
		cssLinkHTML='<link href="' + externalCss + '" type="text/css" rel="stylesheet" />';
		$('head').append(cssLinkHTML);
		
		var externalCss='http://nrfaapps.ceh.ac.uk/lib/jquery/scrollable-horizontal.css';
		cssLinkHTML='<link href="' + externalCss + '" type="text/css" rel="stylesheet" />';
		$('head').append(cssLinkHTML);
		
		var externalCss='http://nrfaapps.ceh.ac.uk/nrfa.css';
		cssLinkHTML='<link href="' + externalCss + '" type="text/css" rel="stylesheet" />';
		$('head').append(cssLinkHTML);
		
      });
    }
  };
})(jQuery);
