NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '' : 'index',
    'feeds/:id' : 'feedShow'
  },

  feedShow: function (id) {
    var feed = new NewsReader.Models.Feed({id: id});
    feed.fetch();
    var view = new NewsReader.Views.FeedDetail({model: feed})

    this._swapView(view);
  },

  index: function(){
    this._feeds = new NewsReader.Collections.Feeds();
    this._feeds.fetch();
    var view = new NewsReader.Views.FeedsIndex({ collection: this._feeds});

    this._swapView(view);

  },

  _swapView: function( view ){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
