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

myNotifiations[Symbol.iterator] = function () {
    const flatArray = Object.values(this).flat();
    let index = 0;
    return {
        next() {
            if (index < flatArray.length) {
                return { 
                    value: flatArray[index++], 
                    done: false };
            } else {
                return { done: true };
            }
        }
    };
};

for (const notification of myNotifiations) {
    console.log(notification);
}
