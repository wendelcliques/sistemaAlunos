const StudentSchema = {
name: 'Student',
primaryKey: 'id',
properties: {
    id: 'string',
    entryAt: 'date',
    name: 'string',
    address: 'string?',
    class: 'string?',
    phone1: 'number?',
    phone2: 'number?',
    phone3: 'number?',
    phone4: 'number?',
    photo: 'string?',
    user: 'string?',
    responsible: 'Responsible[]?',

},
};

export default StudentSchema;