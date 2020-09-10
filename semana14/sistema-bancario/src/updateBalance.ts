import { readDatabase, userCount, writeToDatabase, transaction } from './index'
import moment from 'moment'

const allAccounts: userCount[] = readDatabase()

const updateBalance = () : void => {
    const today: moment.Moment = moment()

    allAccounts.forEach((account) => {
        account.balance = 0
        account.extract.forEach((transaction) => {
            const transacrionDate: moment.Moment = moment.unix(transaction.date)
            
            const diffInDays: number = today.diff(transacrionDate, "days")

            if (transaction.value < 0 && diffInDays > 1) {
                account.balance = account.balance + transaction.value
            } else if (transaction.value > 0) {
                account.balance = account.balance + transaction.value
            }
        })
    })

    writeToDatabase(allAccounts)
}

updateBalance()