const dateFormatter = Intl.DateTimeFormat("pt-BR",{
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    hour12:false,
    timeZone:"UTC",
    weekday:"long",
})

export function DateFormatter(timeString:string):string{
    const date = new Date(timeString);
    const formattedDate = dateFormatter.format(date);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}