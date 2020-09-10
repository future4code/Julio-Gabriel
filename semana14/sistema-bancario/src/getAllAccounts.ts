import fs from 'fs'
import moment from 'moment'
import { readDatabase, userCount, transaction } from './index'

const getAllAccounts = () : void => {
    console.log(readDatabase())
}

getAllAccounts()