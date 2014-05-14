colorpicker
===========

This is a Dojo/AMD wrapper for http://www.dematte.at/colorPicker/

Usage:

	require(["dojo/on","colorpicker/ColorPicker"],function(on,ColorPicker){
	
		on("someInputElement","click",function(e){
		  var cp = new ColorPicker({
		    onChange:function(val){
		      self.set("value",val);
		    }
		  },e);
		  // TODO: document exposed API
			cp.init(cp.X2RGB("#ff0000"));
			domStyle.set(cp.domNode,"display","block");
		});

	});
