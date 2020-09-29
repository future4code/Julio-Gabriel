export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
export interface User {
    name: string
    age: number
    nacionality: NACIONALITY
}
  
export interface Casino {
    name: string
    location: LOCATION
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = []
    const unallowed: User[] = []
  
    users.forEach((user: User) => {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
              allowed.push(user)
            } else {
              unallowed.push(user)
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
              allowed.push(user)
            } else {
              unallowed.push(user)
            }
        }
    })
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    }
}

const CasinoBRASIL: Casino = {
    name: "Brasil",
    location: LOCATION.BRAZIL
}

const CasinoEua: Casino = {
    name: "EUA",
    location: LOCATION.EUA
}

const joao: User = {
    name: "João",
    age: 21,
    nacionality: NACIONALITY.BRAZILIAN
}

const maria: User = {
    name: "Maria",
    age: 17,
    nacionality: NACIONALITY.BRAZILIAN
}

const joaoTurista: User = {
    name: "João Turista",
    age: 20,
    nacionality: NACIONALITY.BRAZILIAN
}

const mariaTurista: User = {
    name: "Maria Turista",
    age: 22,
    nacionality: NACIONALITY.BRAZILIAN
}

const john: User = {
    name: "John",
    age: 22,
    nacionality: NACIONALITY.AMERICAN
}

const marie: User = {
    name: "Marie",
    age: 20,
    nacionality: NACIONALITY.AMERICAN
}

const johnTourist: User = {
    name: "John Tourist",
    age: 19,
    nacionality: NACIONALITY.AMERICAN
}

const marieTourist: User = {
    name: "Marie",
    age: 17,
    nacionality: NACIONALITY.AMERICAN
}

const usersBrasil: User[] = [joao, maria, johnTourist, marieTourist]
const usersEUA: User[] = [john, marie, joaoTurista, mariaTurista]