import users from './data.mjs';

// Fungsi untuk menampilkan daftar pengguna di halaman
const renderUsers = () => {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.map(({ nama, umur, alamat, email }, index) => {
        const userItem = document.createElement("div");
        userItem.classList.add("user-item");
        userItem.innerHTML = `
            <div>
                <strong>${nama}</strong> - ${umur} tahun <br>
                <small>${alamat} | ${email}</small>
            </div>
            <button class="delete-btn" onclick="deleteUser(${index})">Hapus</button>
        `;
        userList.appendChild(userItem);
    });
};

// Fungsi untuk menampilkan data
const index = () => {
    renderUsers();
};

// Fungsi untuk menambah data
const store = (newDataUser) => {
    users.push(newDataUser);
    renderUsers();
};

// Fungsi untuk menghapus data berdasarkan index
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        renderUsers();
    } else {
        alert("Index tidak valid");
    }
};

// Buat fungsi agar bisa dipanggil dari HTML
window.deleteUser = destroy;

export { index, store, destroy };