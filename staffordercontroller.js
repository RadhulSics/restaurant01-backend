const Stafforder = require("./stafforderscheme");

const staffaddorder = (req, res) => {
    const { foodid, userId, amount, quantity, customername } = req.body;
    
    const newStafforder = new Stafforder({
        foodid,
        staffid: userId,
        count: quantity,
        customername,
    });

    newStafforder.save()
        .then((data) => {
            console.log(data);
            res.status(200).json({
                status: 200,
                msg: "Ordered Successfully",
            });
        })
        .catch((err) => {
            console.error("Error on saving order", err);
            res.status(500).json({
                status: 500,
                msg: "Failed to order",
                error: err,
            });
        });
};

const stafforderdetails = (req, res) => {
    const { staffid } = req.params;
    Stafforder.find({ staffid })
        .populate("foodid")
        .then((data) => {
            if (data.length > 0) {
                res.status(200).json({
                    status: 200,
                    msg: "Viewed Successfully",
                    result: data,
                });
            } else {
                res.status(404).json({
                    status: 404,
                    msg: "No orders found for the provided staffid",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                status: 500,
                msg: "Failed to retrieve orders",
                error: err,
            });
        });
};

const viewallstafforder = (req, res) => {
    Stafforder.find()
        .populate("staffid")
        .populate("foodid")
        .then((data) => {
            res.status(200).json({
                status: 200,
                msg: "Viewed Successfully",
                result: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 500,
                msg: "Failed to retrieve orders",
                error: err,
            });
        });
};

module.exports = { staffaddorder, stafforderdetails, viewallstafforder };
