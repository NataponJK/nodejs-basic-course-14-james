export function logmiddlewares () {
    return (req, res, next) =>{
        const date = new Date
        console.log(date, req.method, req.originalUrl);
        next();
}}