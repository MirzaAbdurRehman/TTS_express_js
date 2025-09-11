

const requestFilter = (req, res, next) => {
    const salary = req.query.salary;
    if(!salary) {
        res.send('Salary parameter is required');
    }else if(salary < 100000){
        res.send('You are not eligible to apply');
    }
    else {
        next();
    }
}

module.exports = requestFilter;