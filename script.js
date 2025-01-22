// Data untuk konten artikel
const posts = [
    {
        title: "Post Title 1",
        image: "https://via.placeholder.com/600x300",
        content: "This is a detailed explanation for Post 1."
    },
    {
        title: "Post Title 2",
        image: "https://via.placeholder.com/600x300",
        content: "This is a detailed explanation for Post 2."
    }
];

// Fungsi untuk membuka halaman Read More
function openReadMore(postIndex) {
    const post = posts[postIndex - 1];
    document.getElementById("post-title").innerText = post.title;
    document.getElementById("post-image").src = post.image;
    document.getElementById("post-content").innerText = post.content;

    document.getElementById("home").style.display = "none";
    document.getElementById("read-more").style.display = "block";
}

// Fungsi untuk kembali ke halaman Home
function goHome() {
    document.getElementById("read-more").style.display = "none";
    document.getElementById("home").style.display = "block";
}

// Fungsi untuk berbagi di media sosial
function share(platform) {
    if (platform === 'youtube') {
        alert('Sharing to YouTube...');
    } else if (platform === 'tiktok') {
        alert('Sharing to TikTok...');
    } else if (platform === 'whatsapp') {
        alert('Sharing to WhatsApp...');
    }
}