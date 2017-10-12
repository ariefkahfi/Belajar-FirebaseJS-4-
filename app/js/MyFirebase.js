import * as firebaseApp from './FirebaseConfiguration.js';


let firebase = firebaseApp.fConfiguration.database();


class FirebaseConfigurer{
        constructor(){
            this.fb = firebase;
        }

        firebaseKelasSiswa(callbackKelasSiswa){
          this.fb.ref('/siswa').orderByChild('kelas').on('value',(dataSnapshot)=>{
              let dataKelasSiswa = [];
              dataSnapshot.forEach((childs)=>{
                dataKelasSiswa.push({
                    nisn : childs.key,
                    nama : childs.child('nama').val(),
                    kelas : childs.child('kelas').val()
                });
              });
              callbackKelasSiswa(dataKelasSiswa);
          });
        }

        firebaseKelasReadNama(callbackNama){
          this.fb.ref('/kelas').on('value',(dataSnapshot)=>{
            let kelasNama = [];

            dataSnapshot.forEach((childs)=>{
                kelasNama.push(childs.child('nama-kelas').val());
            });
            callbackNama(kelasNama);
          });
        }

        firebaseKelasReadValue(callbackData){

          this.fb.ref('/kelas').on('value',(dataSnapshot)=>{
              let kelas = [];
              dataSnapshot.forEach((childs)=>{
                  let className = childs.child('nama-kelas').val();
                  let ketKelas = childs.child('keterangan').val();

                  kelas.push({
                      namaKelas  : className,
                      keterangan : ketKelas
                  });
              });
              callbackData(kelas);
          });
        }

        firebaseSiswaSetValue(mNisn , mNama , mKelas,callback){
          this.fb.ref('/siswa/'+mNisn).set({
              nama : mNama,
              kelas : mKelas
          },(success)=>{
              let response = 'Data berhasil dimasukkan ke dalam database';
              callback(response);
          });
        }
}

export {FirebaseConfigurer}
