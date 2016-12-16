
    var hive = require('thrift-hive');

    // Client connection
    var client = hive.createClient({
      version: '0.7.1-cdh3u2',
      server: 'ns3024382.ip-149-202-81.eu',
      port: 10000,
      timeout: 1000
    });

    var query = 'INSERT INTO TABLE lyrics_table VALUES (\'Daft Punk\', \'Revolution 909\',\
                  2, \'1997-01-17\', \'stop the music and go home\');'

    client.execute(query, function(err) {
      if (err) {
        console.log(err.message);
      }
      return client.end();
    });
