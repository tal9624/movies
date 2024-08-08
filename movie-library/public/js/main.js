document.getElementById('showImageBtn').addEventListener('click', function() {
    const img = document.getElementById('dynamicImage');
    img.src = 'https://th-thumbnailer.cdn-si-edu.com/Z289ni0in6FVf0ou6qxAKrgHG2s=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/64/e7/64e78e5e-eac5-4269-9111-c5352ed1ffa2/coprolite.jpg'; // כאן תכניס את הנתיב לתמונה שלך
    img.style.display = 'block'; // מציג את התמונה
});
