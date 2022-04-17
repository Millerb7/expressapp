const loggerMiddleware = async (req, res, next) => {
    console.log('New Log:');
    console.log('Verb:\t' + req.method);
    console.log('URL:\t' + req.originalUrl);
    console.log('Time:\t' + new Date);
    console.log('User:');
    console.log(req.user);
    console.log('Parameters:');
    console.log(req.params);
    console.log('Payload:');
    console.log(req.body);
    console.log('Queries:');
    console.log(req.query);

    next();
}

module.exports = {
    loggerMiddleware
}