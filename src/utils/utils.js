export function formatTime (date)  {
        if (date.slice(0,2) >= 12) {
            return(+date.slice(0,2)-12 + date.slice(2) + ' PM')
        } else {
            return(date + 'AM');
        }
}
