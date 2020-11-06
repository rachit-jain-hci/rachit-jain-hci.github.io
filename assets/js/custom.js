function copyToClipboard(element) {
//src https://codepen.io/shaikmaqsood/pen/XmydxJ
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

