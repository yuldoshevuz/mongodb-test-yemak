module.exports = (errorMsg, res) => {
    console.log(errorMsg)

    if (res) {
        res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}