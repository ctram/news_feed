NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({

  template: JST['feeds/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addFeedView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addFeedView: function(feed){
    var feedItem = new NewsReader.Views.FeedItem({feed: feed});
    this.addSubview('ul', feedItem);
  }




});
