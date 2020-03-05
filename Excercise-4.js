var input = [ '0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca' ];
function dataHandling2(arr) {
	arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
	arr.splice(-1, 1, 'Pria', 'SMA International Metro');
	console.log(arr);
	var nama = arr[1];
	var tanggal = arr[3];

	var tanggal = tanggal.split('/');
	var bulan = tanggal[1] * 1;
	switch (bulan) {
		case 1:
			console.log('Januari');
			break;
		case 2:
			console.log('Februari');
			break;
		case 3:
			console.log('Maret');
			break;
		case 4:
			console.log('April');
			break;
		case 5:
			console.log('Mei');
			break;
		case 6:
			console.log('Juni');
			break;
		case 7:
			console.log('Juli');
			break;
		case 8:
			console.log('Agustus');
			break;
		case 9:
			console.log('September');
			break;
		case 10:
			console.log('Oktober');
			break;
		case 11:
			console.log('November');
			break;
		case 12:
			console.log('Desember');
			break;
		default:
			console.log('Hey');
	}

	console.log(tanggal.sort((a, b) => b.length - a.length));

	console.log(tanggal.join('-'));

	console.log(nama.slice(0, 15));
}

dataHandling2(input);
