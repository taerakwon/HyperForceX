var managers;
(function (managers) {
    var explosionData = {
        "images": [
            "explosion.png"
        ],
        "frames": [
            [2, 2, 97, 97, 0, 0, 0],
            [101, 2, 92, 96, 0, 0, 0],
            [195, 2, 90, 87, 0, -1, 0],
            [195, 2, 90, 87, 0, -1, 0],
            [287, 2, 86, 50, 0, 0, 0]
        ],
        "animations": {
            "explosion": [0, 1, 2, 3, 4]
        }
    };
    var Assets = (function () {
        function Assets() {
        }
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map