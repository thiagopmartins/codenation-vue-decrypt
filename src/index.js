const RequestController = require('./app/controller/RequestController');
const token = '649dd6f8dbeec19fda95e684b8fcdae7c08ea6b2';

await RequestController.get(token);
await RequestController.post();