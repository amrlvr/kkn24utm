const pd = document.getElementById('myChart');
const kk = document.getElementById('myChart2');
const ktp = document.getElementById('myChart3');
const berktp = document.getElementById('myChart4');
const job = document.getElementById('myChart5');

  new Chart(pd, {
    type: 'doughnut',
    data: {
      labels: ['Laki-laki', 'Perempuan'],
      datasets: [{
        label: 'Jumlah',
        data: [1338, 1460],
        borderWidth: 1,
        backgroundColor : ['#964B00', '#6F4E37']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Jumlah Penduduk Desa Banyior'
        }
      }
    }
  });

  new Chart(kk, {
    type: 'doughnut',
    data: {
      labels: ['Ber-KK', 'Tidak Ber-KK'],
      datasets: [{
        label: 'Jumlah',
        data: [937, 28],
        borderWidth: 1,
        backgroundColor : ['#964B00', '#6F4E37'],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Jumlah KK Penduduk Desa Banyior'
        }
      }
    }
  });

  new Chart(ktp, {
    type: 'doughnut',
    data: {
      labels: ['Laki-laki', 'Perempuan'],
      datasets: [{
        label: 'Jumlah',
        data: [1009, 1117],
        borderWidth: 1,
        backgroundColor : ['#964B00', '#6F4E37']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Jumlah Penduduk Desa Banyior Wajib Ber-KTP'
        }
      }
    }
  });
  new Chart(berktp, {
    type: 'doughnut',
    data: {
      labels: ['Ber-KTP', 'Tidak Ber-KTP'],
      datasets: [{
        label: 'Jumlah',
        data: [1971, 155],
        borderWidth: 1,
        backgroundColor : ['#964B00', '#6F4E37']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Jumlah Penduduk Desa Banyior Pemilik KTP'
        }
      }
    }
  });
  new Chart(job, {
    type: 'doughnut',
    data: {
      labels: ['Petani', 'Pedagang', 'Merantau'],
      datasets: [{
        label: 'Jumlah',
        data: [80, 155],
        borderWidth: 1,
        backgroundColor : ['#964B00', '#6F4E37']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Pekerjaan Rata-rata Penduduk Desa Banyior'
        }
      }
    }
  });