const notifications = [
    {
        source: 'sms',
        text: 'Please confirm your order #33123',
        date: 'today'
    },
    {
        source: 'sms',
        text: 'Please confirm your order #45123',
        date: 'tomorrow'
    },
    {
        source: 'email',
        text: 'Forgot your password',
        date: 'today'
    },
    {
        source: 'viber',
        text: 'Forgot your password',
        date: 'today'
    },
]

const myNotifiations = {}

notifications.forEach((notification) => {
  if (!myNotifiations[notification.source]) {
       myNotifiations[notification.source] = []
    }

    myNotifiations[notification.source].push(notification)
});

console.log(myNotifiations);
