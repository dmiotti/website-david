// This is where it all goes :)
function displayList(id) {
  var div = $('#category_' + id);
  var isVisible = div.is(':visible');
  if (!isVisible) {
    div.show();
  } else {
    div.hide();
  }
}

function hideAllSections() {
  $('div[id^="category_"]').hide();
}

hideAllSections();
