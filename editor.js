(function(d) {
	loc = window.location;
	if (!(loc.host == 'share.framerjs.com' || loc.host == 'framer.cloud')) {
		alert('Use on share.framerjs.com or framer.cloud');
		return;
	}
	var b = new XMLHttpRequest();
	b.onreadystatechange = function() {
		function c(b, c) {
			var e = d.createElement('input');
			e.name = b;
			e.value = c;
			e.type = 'hidden';
			a.appendChild(e);
		}
		if (b.readyState == 4) {
			var a = d.createElement('form');
			a.action = 'http://validator.w3.org/check';
			a.method = 'post';
			a.enctype = 'multipart/form-data';
			c('fragment', b.responseText);
			c('prefill', '0');
			c('doctype', 'Inline');
			c('prefill_doctype', 'html401');
			c('group', '1');
			d.body.appendChild(a);
			a.submit();
			d.body.removeChild(a);
		}
	};
	b.open('GET', loc.origin + loc.pathname + 'app.coffee', !0);
	b.send('');
	//location = loc.origin + loc.pathname + 'app.coffee';
})(this);
