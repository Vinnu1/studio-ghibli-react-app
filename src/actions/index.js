const $ = require('jquery');
export const DATA_RECIEVED = 'DATA_RECIEVED'
export const ADD = 'ADD'

export const searchPressed = (filters, type) => {
    return dispatch => {
        if (type == "films") {
            dispatch(getFilms(filters))
        }
        else if (type == "people") {
            dispatch(getPeople(filters))
        }
        else {
            dispatch(getSpecies(filters))
        }
    }
}

// const getFilms = (filters) => {
//     return dispatch => {
//         $.get('https://ghibliapi.herokuapp.com/films', function (res) {
//             console.log("res from getResults:", res)
//             //filtering
//             dispatch(setResults())
//         });
//     }
// }

export const addToFavourites = (data) => {
    return {
        type: ADD,
        favourites: data
    }
}

const getFilms = (filters) => {
    filters = filters.filter((e) => {
        return e
    })
    console.log('selectedFilter', filters)
    return dispatch => {
        $.get('https://ghibliapi.herokuapp.com/films', function (res) {
            console.log("res from getResults:", res)
            let filteredResults = res.filter((e) => {
                let result = false
                filters.forEach(f => {
                    console.log('in loop')
                    if (parseInt(e.rt_score) <= f) {
                        console.log('inside filter')
                        result = true
                        return result
                    }
                })
                return result

            })
            console.log('filteredResults', filteredResults)
            //filtering
            dispatch(setResults(filteredResults))
        });
    }
}

const getPeople = (filters) => {
    filters = filters.filter((e) => {
        return e
    })
    console.log('selectedFilter', filters)
    return dispatch => {
        $.get('https://ghibliapi.herokuapp.com/people', function (res) {
            console.log("res from getResults:", res)
            let filteredResults = res.filter((e) => {
                return (filters.indexOf(e.gender) > -1)

            })
            console.log('filteredResults', filteredResults)
            //filtering
            dispatch(setResults(filteredResults))
        });
    }
}

const getSpecies = (filters) => {
    filters = filters.filter((e) => {
        return e
    })
    console.log('selectedFilter', filters)
    return dispatch => {
        $.get('https://ghibliapi.herokuapp.com/species', function (res) {
            console.log("res from getResults:", res)
            let filteredResults = res.filter((e) => {
                return (filters.indexOf(e.classification) > -1)

            })
            console.log('filteredResults', filteredResults)
            //filtering
            dispatch(setResults(filteredResults))
        });
    }
}

const setResults = (details) => {
    return {
        type: DATA_RECIEVED,
        details
    }
}
