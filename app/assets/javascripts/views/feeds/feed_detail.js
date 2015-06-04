NewsReader.Views.FeedDetail = Backbone.CompositeView.extend({
  template: JST['feeds/show'],

  initialize: function(){
    this.listenTo(this.model.entries(), 'add', this.addEntryView);
  },

  render: function(){
    var content = this.template({feed: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addEntryView: function (entry) {
    var entryShow = new NewsReader.Views.EntryDetail({model: entry});
    this.addSubview('ul', entryShow);
  }
});
