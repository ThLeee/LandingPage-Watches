let notificationMessenger = [
    {
        avatar: "",
        username: "Hoang Con 97",
        mess: "Đồng hồ đẹp lắm nhé "
    },
    {
        avatar: "",
        username: "Thụy Lê ",
        mess: "Đồng hồ đẹp lắm nhé "
    },
    {
        avatar: "",
        username: "Đức L",
        mess: "Đồng hồ đẹp lắm nhé "
    },
    {
        avatar: "",
        username: "Tiến R",
        mess: "Đồng hồ đẹp lắm nhé "
    },
    {
        avatar: "",
        username: "Hoang Con 98",
        mess: "Đồng hồ đẹp lắm nhé "
    },
    {
        avatar: "",
        username: "Hoang Con 99",
        mess: "Đồng hồ đẹp lắm nhé "
    }
];

function notifiMessenger(notificationArray) {
    let lengthNotificationArray = notificationArray.length - 1;
    let messageRandomIndex = Math.floor(Math.random() * lengthNotificationArray) + 1;
    return notificationArray[messageRandomIndex];
}

$(document).ready(function () {
    setInterval(function () {
        console.log(notifiMessenger(notificationMessenger));
    }, 5000);
});