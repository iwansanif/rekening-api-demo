exports.health = (req, res) => {

    return res.status(200).json({
        success: true,
        message: "API is running",
        version: "1.0.0",
        timestamp: new Date().toISOString()
    });

};