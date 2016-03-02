function getColor(canvas) {
    var selectIMG = document.getElementById(canvas);
    var context = selectIMG.getContext("2d");
    function readImage() {
        if (this.files && this.files[0]) {
            var FR = new FileReader();
            FR.onload = function (e) {
                var img = new Image();
                img.onload = function () {
                    context.drawImage(img, 0, 0);
                };
                img.src = e.target.result;
            };
            FR.readAsDataURL(this.files[0]);
        }
    }

}