import * as fd from '../MyFirebase';




let firebase = new fd.FirebaseConfigurer();

$('#tabel-kelas-siswa').attr('border','2');



let cobeLoadKelasSiswa = ()=>{
  firebase.firebaseKelasSiswa((dataKelasSiswa)=>{
      $('#tabel-kelas-siswa').empty();
      $('#tabel-kelas-siswa').append(
          `<tr>
            <td>Nisn</td>
            <td>Nama Siswa</td>
            <td>Kelas Siswa</td>
          </tr>`
      );
      dataKelasSiswa.forEach((data)=>{
        $('#tabel-kelas-siswa').append(
            `<tr>
              <td>${data.nisn}</td>
              <td>${data.nama}</td>
              <td>${data.kelas}</td>
            </tr>`
        );
      });
  });
}

cobeLoadKelasSiswa();
