var express = require('express');
var router = express.Router();

/* �T���v��API�@ 
 * http://localhost:3000/samples ��GET���\�b�h�̃��N�G�X�g�𓊂���ƁA
 * JSON�`���ŕ������Ԃ��B
 */
router.get('/', function(req, res, next) {
  var param = {"�l":"����̓T���v��API�ł�"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* �T���v��API�A 
 * http://localhost:3000/samples/hello ��GET���\�b�h�̃��N�G�X�g�𓊂���ƁA
 * JSON�`���ŕ������Ԃ��B
 */
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;