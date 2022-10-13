class InstitutoController {
    static async index(req, res) {
        res.status(200).json({
            mssg: 'mensaje institutos'
        })
    }
}

module.exports = InstitutoController