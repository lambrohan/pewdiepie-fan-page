$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    autoScrolling:true,
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Felix', 'Marzia'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    sectionsColor: ['#f2f2f2', 'pink', '#7BAABE', 'whitesmoke', '#000'],
    css3:true,
    

	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});