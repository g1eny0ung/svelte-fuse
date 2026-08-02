export type Contact = {
	id: number;
	name: string;
	email: string;
	phone: string;
	address: string;
	birthday: string;
};

export const contacts: Contact[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'johndoe@example.com',
		phone: '123-456-7890',
		address: '123 Main Street, Anytown, CA 12345',
		birthday: '1980-01-01'
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'janedoe@example.com',
		phone: '456-789-0123',
		address: '456 Elm Street, Anytown, CA 12345',
		birthday: '1981-02-02'
	},
	{
		id: 3,
		name: 'Mary Smith',
		email: 'marysmith@example.com',
		phone: '789-012-3456',
		address: '789 Oak Street, Anytown, CA 12345',
		birthday: '1982-03-03'
	},
	{
		id: 4,
		name: 'Peter Jones',
		email: 'peterjones@example.com',
		phone: '012-345-6789',
		address: '012 Pine Street, Anytown, CA 12345',
		birthday: '1983-04-04'
	},
	{
		id: 5,
		name: 'Susan Brown',
		email: 'susanbrown@example.com',
		phone: '567-890-1234',
		address: '567 Maple Street, Anytown, CA 12345',
		birthday: '1984-05-05'
	},
	{
		id: 6,
		name: 'Michael Green',
		email: 'michaelgreen@example.com',
		phone: '901-234-5678',
		address: '901 Elm Street, Anytown, CA 12345',
		birthday: '1985-06-06'
	},
	{
		id: 7,
		name: 'Sarah White',
		email: 'sarahwhite@example.com',
		phone: '234-567-9012',
		address: '234 Pine Street, Anytown, CA 12345',
		birthday: '1986-07-07'
	},
	{
		id: 8,
		name: 'David Blue',
		email: 'davidblue@example.com',
		phone: '678-901-2345',
		address: '678 Maple Street, Anytown, CA 12345',
		birthday: '1987-08-08'
	},
	{
		id: 9,
		name: 'Elizabeth Red',
		email: 'elizabethred@example.com',
		phone: '345-678-9012',
		address: '345 Elm Street, Anytown, CA 12345',
		birthday: '1988-09-09'
	},
	{
		id: 10,
		name: 'Charles Black',
		email: 'charlesblack@example.com',
		phone: '890-123-4567',
		address: '890 Pine Street, Anytown, CA 12345',
		birthday: '1989-10-10'
	}
];
