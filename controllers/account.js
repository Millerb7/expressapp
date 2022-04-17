const createNewUser = async (req,res,next) => {
    try {
        const user = await req.models.user.createNewUser( req.body.email, req.body.password );
        res.status(201).json('created user: '+ user);
    } catch (err) {
        console.error('Failed create user:', err);
        res.status(401).json({ message: err.toString() });
    }
    next();
};

module.exports = {
    createNewUser
};