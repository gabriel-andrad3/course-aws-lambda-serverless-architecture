const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//   TableName: 'td_notes',
//   Item: {
//     user_id: 'bb',
//     timestamp: 2,
//     title: 'my title changed',
//     content: 'my content'
//   }
// }, (err, data) => {
//   if (err) {
//     console.log(err);    
//   } else {
//     console.log(data);
//   }
// });

// docClient.update({
//   TableName: 'td_notes',
//   Key: {
//     user_id: 'bb',
//     timestamp: 1
//   },
//   UpdateExpression: 'set #t = :t',
//   ExpressionAttributeNames: {
//     '#t': 'title'
//   },
//   ExpressionAttributeValues: {
//     ':t': 'Updated title'
//   }
// }, (err, data) => {
//   if (err) {
//     console.log(err);    
//   } else {
//     console.log(data);
//   }
// });

docClient.delete({
  TableName: 'td_notes',
  Key: {
    user_id: 'bb',
    timestamp: 1
  }
}, (err, data) => {
  if (err) {
    console.log(err);    
  } else {
    console.log(data);
  }
});