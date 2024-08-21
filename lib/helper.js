export function formatDateToDDMMMYYYYTIME(inputdate) {
    if (!inputdate)
        return "";
    const inputDate=new Date(inputdate);
    const months=[
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const day=String(inputDate.getDate()).padStart(2, '0');
    const month=months[inputDate.getMonth()];
    const year=inputDate.getFullYear();
    // let hours=inputDate.getHours();
    // const ampm=hours>=12? 'PM':'AM';

    // if (hours>12) {
    //     hours-=12;
    // }

    // const minutes=String(inputDate.getMinutes()).padStart(2, '0');

    return `${month} ${day}, ${year}`;
}