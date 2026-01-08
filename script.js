document.getElementById('formTransaksi').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    if (nama === "") {
        alert("Pesan kesalahan: Nama tidak boleh kosong!");
    } else {
        alert("Data berhasil disimpan!");
    }
});
