let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

console.log(passportWithAddress.address.city)

let passportWithAddress2 = {...passportWithAddress,address:{...passportWithAddress.address}}
passportWithAddress2.address.city = 'Bobruisk';

console.log(passportWithAddress2.address.city)

