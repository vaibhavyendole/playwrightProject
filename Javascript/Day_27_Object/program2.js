// Nested object
let userApiResponse = {
    status: 200,
    message: "Success",
    data:{
        user: {
            id: 101,
            profile: {
                firstName: "Rohit",
                LastName: "Sharma",
                email: "Rohit@gmail.com"
                    },
        permission: {
            canRead: true,
            canWrite: true,
            canDelete: false
                    },
        orders: [{    
                    orderId: "ORDER01",
                    amount: 500}, 
                {
                    orderId: "ORDER02",
                    amount: 700
                }]
                }
        }
}
// =========================================
// ACCESSING NESTED OBJECT PROPERTIES
// =========================================
// Access email from nested profile object
console.log(userApiResponse.data.user.profile.email);
// Access second order IDRanjeet Sir
console.log(userApiResponse.data.user.orders[1].orderId);
// Access second order amount
console.log(userApiResponse.data.user.orders[1].amount);
// Access complete second order object
console.log(userApiResponse.data.user.orders[1]);