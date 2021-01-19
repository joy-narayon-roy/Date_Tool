class DateTool {
    constructor (data) {
        let obj
        if (data == undefined) {
            obj = new Date()
        } else {
            obj = new Date(data)

        }

        this.dateObj = {
            dd: obj.getDate(),
            mm: obj.getMonth()+1,
            yy: obj.getFullYear()}

    }
    isEqual(d1) {
        try {
            if (typeof d1 == 'string') {
                d1 = new Date(d1)
                d1 = {
                    dd: d1.getDate(),
                    mm: d1.getMonth()+1,
                    yy: d1.getFullYear()}
            }

            let d2
            d2 = this.dateObj
            if (d1.toString() != "[object Object]" || d2.toString() != "[object Object]") {
                throw  'NaN Value'
            }
            if (d1.yy == d2.yy && d1.mm == d2.mm && d1.dd == d2.dd) {
                return true
            } else {
                return false
            }
        } catch (e) {
            return e
            console.error(e)}
    }
}

module.exports = DateTool
