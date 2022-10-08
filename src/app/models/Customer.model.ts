export class Customer {
    constructor(
        public id: string,
        public contact_date: string,
        public start_date: string,
        public business_name: string,
        public payment_type: string,
        public contact_name: string,
        public phone_number: string,
        public email: string,
        public reverse_amount: string,
        public reverse_balance: string,
        public balance_due: string,
        public status: string,
        public profile: string,
    ) {
        
    }
}