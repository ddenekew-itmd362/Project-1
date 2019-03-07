// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("submit").addEventListener("click", checkbox);
function checkForm(form)
{
  if(!form.checkbox.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    return false;
  }
  return true;
}
