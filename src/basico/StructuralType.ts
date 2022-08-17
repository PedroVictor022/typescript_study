// Create function type
type VerifyUserFn = (user: User, sentValue: User) => boolean;

// Create user type
type User = {
   username: string, 
   password: string
};

// Create function
const verifyUser: VerifyUserFn = (user, sentValue) => {
   return user.username === sentValue.username && user.password === sentValue.password;
};

// const user_1 = {
//    username: "Pedro",
//    password: "1234"
// }
// const bd_user_1 = {
//    username: "Pedro",
//    password: "1234"
// }

// const logVerify = verifyUser(user_1, bd_user_1);
// console.log(logVerify)