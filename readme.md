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
