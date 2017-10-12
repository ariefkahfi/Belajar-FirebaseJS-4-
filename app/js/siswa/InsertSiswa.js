import * as firebaseData from '../MyFirebase';


let firebase  = new firebaseData.FirebaseConfigurer();



let loadNamaKelas = ()=>{
  firebase.firebaseKelasReadNama((data)=>{
      $('#kelas').empty();
      data.forEach((item)=>{
        $('#kelas').append(
            `<option value="${item}">${item}</option>`
        );
      });
  });
};


loadNamaKelas();


$('#button').click(()=>{
    submitData();
    return false;
});

let refresh = () =>{
  $('#nisn').val('');
  $('#nama').val('');
}

let submitData = ()=>{
  let modelNISN = $('#nisn').val();
  let modelNama = $('#nama').val();
  let modelKelas = $('#kelas option:selected').val();

  if(modelNISN === ''
  || modelNISN === undefined
  || modelNama === ''
  || modelNama === undefined
  || modelKelas === ''
  || modelKelas === undefined){
    alert('masih ada form kosong');
    $('#response').text('');
  }else{
    firebase.firebaseSiswaSetValue(modelNISN,modelNama,modelKelas,(data)=>{
        $('#response').text(data);
        refresh();
    });
  }
};
