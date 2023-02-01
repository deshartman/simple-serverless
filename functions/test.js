exports.handler = async (context, event, callback) => {

    console.log(`Hello from Functions`);
    const restClient = context.getTwilioClient();
    return callback(null, { hello: 'world' });
};