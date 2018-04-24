$(document).ready(function () {
	populateBurgers();
});

$('#available').on('click','.eat',function() {
	console.log('Eating id:'+$(this).attr('data-id'));
	$.post('api/eat',{id:$(this).attr('data-id')}, function() {
		populateBurgers();
	});
});

function populateBurgers() {
	console.log('executing popBurgers...');
	$('#available').empty();
	$('#eaten').empty();
	$.get('api/view',function (data) {
		//DIAG ONLY
		console.log(data);
		for (i in data) {
			if (data[i].devoured>0) {
				$('#eaten').append('<li>'+data[i].burger_name+'</li>');
			} else {
				var burgerRow = $('<tr>');
				burgerRow.append('<td class="text-right">'+data[i].burger_name+'</td>');
				var burgerButton = $('<td>');
				burgerButton.addClass('text-left');
				var button = $('<button>');
				button.addClass('btn btn-primary eat');
				button.text('Eat');
				button.attr('data-id',data[i].id);
				button.attr('type','button');
				burgerButton.append(button);
				burgerRow.append(burgerButton);
				$('#available').append(burgerRow);
			}
		}
	});
}

