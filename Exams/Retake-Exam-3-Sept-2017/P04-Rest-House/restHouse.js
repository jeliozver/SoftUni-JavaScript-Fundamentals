function restHouse(rooms, guestsData) {
    for (let room of rooms) {
        room['guests'] = [];
        if (room.type === 'triple') {
            room['emptyBeds'] = 3;
        } else {
            room['emptyBeds'] = 2;
        }
    }

    let teaHouseGuests = 0;

    for (let couple of guestsData) {
        let firstGender = couple.first.gender;
        let secondGender = couple.second.gender;
        if (firstGender !== secondGender) {
            teaHouseGuests += searchDouble(rooms, couple);
        } else {
            teaHouseGuests += searchTriple(rooms, couple);
        }
    }

    let roomsSorted = [...rooms]
        .sort((a, b) => a.number.localeCompare(b.number));

    for (let room of roomsSorted) {
        console.log(`Room number: ${room.number}`);

        let guestsSorted = sortNames(room.guests);
        for (let guest of guestsSorted) {
            console.log(`--Guest Name: ${guest.name}`);
            console.log(`--Guest Age: ${guest.age}`);
        }
        console.log(`Empty beds in the room: ${room.emptyBeds}`);
    }

    console.log(`Guests moved to the tea house: ${teaHouseGuests}`);

    function sortNames(arr) {
        arr.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });

        return arr;
    }

    function searchDouble(rooms, couple) {
        let isAccommodated = false;

        for (let room of rooms) {
            if (room.type === 'double-bedded' && room.emptyBeds > 0) {
                room.guests.push(couple.first);
                room.guests.push(couple.second);
                room.emptyBeds = 0;
                isAccommodated = true;
                break;
            }
        }

        if (!isAccommodated) {
            return 2;
        }

        return 0;
    }

    function searchTriple(rooms, couple) {
        let isAccommodatedFirst = false;
        let isAccommodatedSecond = false;
        let gender = couple.first.gender;

        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].type === 'triple' && rooms[i].emptyBeds > 0) {
                if (rooms[i].emptyBeds === 1) {
                    if (rooms[i].guests[0].gender === gender) {
                        rooms[i].guests.push(couple.first);
                        rooms[i].emptyBeds = 0;
                        isAccommodatedFirst = true;
                        isAccommodatedSecond = isPlaceForSecond(rooms, couple.second, gender);
                        break;
                    }
                } else if (rooms[i].emptyBeds === 2) {
                    if (rooms[i].guests[0].gender === gender) {
                        rooms[i].guests.push(couple.first);
                        rooms[i].guests.push(couple.second);
                        rooms[i].emptyBeds = 0;
                        isAccommodatedFirst = true;
                        isAccommodatedSecond = true;
                        break;
                    }
                } else {
                    rooms[i].guests.push(couple.first);
                    rooms[i].guests.push(couple.second);
                    rooms[i].emptyBeds = 1;
                    isAccommodatedFirst = true;
                    isAccommodatedSecond = true;
                    break;
                }
            }
        }

        if (isAccommodatedFirst && isAccommodatedSecond) {
            return 0;
        } else if (isAccommodatedFirst && !isAccommodatedSecond) {
            return 1;
        }

        return 2;
    }

    function isPlaceForSecond(rooms, second, gender) {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].type === 'triple' && rooms[i].emptyBeds > 0) {
                if (rooms[i].emptyBeds < 3) {
                    if (rooms[i].guests[0].gender === gender) {
                        rooms[i].guests.push(second);
                        rooms[i].emptyBeds -= 1;
                        return true;
                    }
                } else {
                    rooms[i].guests.push(second);
                    rooms[i].emptyBeds = 2;
                    return true;
                }
            }
        }

        return false;
    }
}

// restHouse(
//     [
//         {number: '206', type: 'double-bedded'},
//         {number: '311', type: 'triple'}
//     ],
//
//     [
//         {
//             first: {name: 'Tanya Popova', gender: 'female', age: 24},
//             second: {name: 'Miglena Yovcheva', gender: 'female', age: 23}
//         },
//         {
//             first: {name: 'Katerina Stefanova', gender: 'female', age: 23},
//             second: {name: 'Angel Nachev', gender: 'male', age: 22}
//         },
//         {
//             first: {name: 'Tatyana Germanova', gender: 'female', age: 23},
//             second: {name: 'Boryana Baeva', gender: 'female', age: 22}
//         }
//     ]
// );