# Riski Nurohman's MCM test(Backend)
### Setup:
1. Clone project dari repository ini
2. Setelah clone, buat DB di phpmyadmin dengan nama db mcm_test
3. Lalu import file sql yang ada pada direktori project yang sudah diclone
4. Buka terminal(cmd/gitbash/powershell) pada directory project, kemudian ketik `npm install`. Tunggu sampai instalasi selesai.
5. Jika instalasi sudah selesai, jalankan perintah ini pada terminal untuk memulai project `npm start` 

### Endpoint List:
#### Endpoint Mahasiswa
- Create Mahasiswa(localhost:3000/mahasiswa/create_mahasiswa)(POST)  
Contoh data json yang harus dibawa ketika akan create:  
`{"npm": "010022",
  "nama": "Wahyu",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2000-03-05",
  "gender": "L",
  "agama": "I",
  "email": "wahyu@gmail.com",
  "phone": "0895555555",
  "address": "Bekasi"}`  
- Read Mahasiswa(localhost:3000/mahasiswa?page=1&limit=10&search=)(GET)
- Update Mahasiswa(localhost:3000/mahasiswa/update_mahasiswa/:id)(method PUT)  
Keterangan:  
:id adalah id mahasiswa yang akan diupdate. Copy paste saja dari table mahasiswa  
Contoh data json yang harus dibawa ketika akan update:  
`{"npm": "010022",
  "nama": "Wahyu",
  "tempat_lahir": "Jakarta",
  "tanggal_lahir": "2000-03-05",
  "gender": "L",
  "agama": "I",
  "email": "wahyu@gmail.com",
  "phone": "0895555555",
  "address": "Bekasi"}`
    
- Delete Mahasiswa(localhost:3000/mahasiswa/delete_mahasiswa/:id)(DELETE)  
Keterangan:  
:id adalah id mahasiswa yang akan dihapus. Copy paste saja dari table mahasiswa  

#### Endpoint Matkul  
- Create Matkul(localhost:3000/matkul/create_matkul)(POST)  
Contoh data json yang harus dibawa ketika akan create:  
`{"kode": "A001","nama_matkul": "Jaringan Syaraf Tiruan"}`  
- Read Matkul(localhost:3000/matkul?page=1&limit=10&search=)(GET)
- Update Matkul(localhost:3000/matkul/update_matkul/:id)(method PUT)  
Keterangan:  
:id adalah id matkul yang akan diupdate. Copy paste saja dari table matkul  
Contoh data json yang harus dibawa ketika akan update:  
`{"kode": "A001","nama_matkul": "Jaringan Syaraf Tiruan"}` 
    
- Delete Matkul(localhost:3000/matkul/delete_matkul/:id)(DELETE)  
Keterangan:  
:id adalah id matkul yang akan dihapus. Copy paste saja dari table matkul  

#### Endpoint Rencana Studi
- Create Rencana Studi(localhost:3000/rencana_studi/create_rs)(POST)  
Contoh data json yang harus dibawa ketika akan create:  
`{
  "id_mahasiswa": "6da664ec-aabb-49d8-a241-0a8fd378a42c",
  "details": [
    "1f0b027b-41da-4847-b646-8c12e7884e90",
    "e5d112bb-d472-4879-98b2-18d66a9d8471",
    "862088ca-3e07-45db-b3a3-e995eb828277"
  ]
}`  
Keterangan:  
`id_mahasiswa` id dari mahasiswa yang akan mengambil rencana studi  
`details(array)` id matakuliah yang akan diambil. Copy paste dari table matakuliah
- Read Rencana Studi(localhost:3000/rencana_studi?page=1&limit=10)(GET)
- Update Rencana Studi(localhost:3000/rencana_studi/update_rs/:id)(method PUT)  
Keterangan:  
:id adalah id rencana studi yang akan diupdate. Copy paste saja dari table rencana studi(tr_rencana_studi)  
Contoh data json yang harus dibawa ketika akan update:  
`{
  "details": [
    "1f0b027b-41da-4847-b646-8c12e7884e90",
    "e5d112bb-d472-4879-98b2-18d66a9d8471",
    "862088ca-3e07-45db-b3a3-e995eb828277"
  ]
}` 
    
- Delete Rencana Studi(localhost:3000/rencana_studi/delete_rs/:id)(DELETE)  
Keterangan:  
:id adalah id rencana studi yang akan diupdate. Copy paste saja dari table rencana studi(tr_rencana_studi)    
