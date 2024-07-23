import bcrypt from 'bcryptjs';

const users = [
    {
        name: "admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: "Ebrar Kadir Çetin",
        email: "ekc@gmail.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin: false,
    },
    {
        name: "Berkay Yılmaz",
        email: "berkay@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    }
]

export default users;