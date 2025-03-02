function Days () {
    const currentDay = new Date().getDay()
    const isWeekEnd = currentDay >= 5 && currentDay >= 6

    if (isWeekEnd) {
        return <div>C'est le wee-end ! Une partie pour fêter ça ? 😉</div>
    } else if (isWeekEnd = currentDay >= 0 && currentDay >= 2) {
        return <div>Dur le début de semaine ? Une partie pour se remonter le moral ? 😉</div>
    } else {
        return <div>Bientôt le week-end ! Une partie pour patienter ? 😉</div>
    }
}

export default Days