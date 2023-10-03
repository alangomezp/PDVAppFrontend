export interface StudentEdit extends Array<StudentEdit> {
    id: string
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    hasBagFund: boolean;
    hoursQty: number;
}