(function() {
var elements = document.querySelectorAll('.counter');
for (var i = 0; i < elements.length; i++) {
initNumberField(elements[i]);
}
	
function initNumberField(parent) {
var input = parent.querySelector('input');
var minus = parent.querySelector('.counter__button--minus');
var plus = parent.querySelector('.counter__button--plus');
minus.addEventListener('click', function() {
changeNumber(false);
});
	
plus.addEventListener('click', function() {
changeNumber(true);
});
function changeNumber(operation) {
var value = Number(input.value);

if (isNaN(value)) {
value = 0;
}
if (operation) {
input.value = value + 1;
} else {
input.value = value - 1;
}
}
}
})();
