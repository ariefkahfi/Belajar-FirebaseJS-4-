import * as firebaseData from '../MyFirebase';


let firebase = new firebaseData.FirebaseConfigurer();


let reloadTable = (data)=>{
  $('#tabel-kelas').empty();
  $('#tabel-kelas').append(
    `<tr>
      <td>Nama Kelas</td>
      <td>Keterangan</td>
    </tr>`
  );

  data.forEach((item)=>{
    $('#tabel-kelas').append(
      `<tr>
          <td>${item.namaKelas}</td>
          <td>${item.keterangan}</td>
      </tr>`);
  });
}


let loadDataIntoTable = ()=>{
  firebase.firebaseKelasReadValue((data)=>{
      reloadTable(data);
  });
}

loadDataIntoTable();
