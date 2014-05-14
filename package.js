var profile = (function(){
    copyOnly = function(filename, mid){
        var list = {
            "colorpicker/package":1,
            "colorpicker/package.json":1
        };
        return (mid in list) || /(css|png|jpg|jpeg|gif|tiff|mht|cur)$/.test(filename);
    };

    return {
        resourceTags:{
            test: function(filename, mid){
                return false;
            },
            copyOnly: function(filename, mid){
                return copyOnly(filename, mid);
            },
            amd: function(filename, mid){
                return !copyOnly(filename, mid) && /\.js$/.test(filename);
            }
        }
    };
})();
