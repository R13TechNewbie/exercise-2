const kalkulator = document.querySelector('.kalkulator');
const tombol = document.querySelector('.tombol-kalkulator');

keys.addEventListener(‘click’, e => {
    if (e.target.matches(‘button’)) {
      
      const key = e.target
      const action = key.dataset.action

      if (!action) {
        console.log('ini tombol angka')
      }

      if (
        action === 'tambah' ||
        action === 'kurang' ||
        action === 'kali' ||
        action === 'bagi' ||
        action === 'modulo'
      ) {
        console.log('ini tombol operasi')
      }

      if (action === 'desimal') {
        console.log('ini tombol desimal')
      }

      if (action === 'clear') {
        console.log('ini tombol hapus')
      }

      if (action === 'hitung') {
        console.log('tombol hitung')
      }
    }
})
