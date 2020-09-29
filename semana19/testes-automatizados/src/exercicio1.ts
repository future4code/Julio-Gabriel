export interface User {
	name: string
	balance: number
}

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	} else {
        return undefined
    }
}

const joao: User = {
    name: "João",
    balance: 200
}