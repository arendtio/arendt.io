function DisqusStore() {
	riot.observable(this);

	var store = this;
	store.active = ("arendtio" != "")
	store.first = true;
	store.targetPage = undefined;

	store.Trigger = function() {
		debug.log("trigger", 1, "to tags:", arguments);
		store.trigger.apply(this, arguments);
	}

	if(store.active){
		store.on("url_change", function(from, to) {
			store.targetPage = to;
		});

		store.on("pages_updated", function() {
			store.Trigger("remove_all_comments");
			store.Trigger("add_comments_for", store.targetPage);
		});

		store.on("added_comments", function(guid, link, title) {
			// yes, we set a global var here (because disqus requires it)
			disqus_config = function () {
				this.page.identifier = guid;
				this.page.url = link;
				this.page.title = title;
			}
			if(store.first){
				(function() { // DON'T EDIT BELOW THIS LINE
				var d = document, s = d.createElement('script');
				s.src = 'https://arendtio.disqus.com/embed.js';
				s.setAttribute('data-timestamp', +new Date());
				(d.head || d.body).appendChild(s);
				})();
				store.first = false;
			} else {
				if(typeof DISQUS !== 'undefined'){ // ad-blockers, etc.
					DISQUS.reset({
						reload: true,
						config: disqus_config
					});
				}
			}
		});
	}
}
