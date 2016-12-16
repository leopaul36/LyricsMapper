var assert = require('assert');
var hbase = require('hbase');

hbase({ host: 'ns3024382.ip-149-202-81.eu', port: 8080 })
.table('music' )
.create('songs', function(err, success){
  this
  .row('artist')
  .put('songs:song', 'lyrics', function(err, success){
    this.get('songs', function(err, cells){
      this.exists(function(err, exists){
        assert.ok(exists);
      });
    });
  });
});
