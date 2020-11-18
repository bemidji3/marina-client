export const boatSlips = [...Array(20).keys()].map((key, index) => {
        return {
            slip_number : index,
            occupied: false,
            boat_name: "Boat Name",
            boat_color: "red",
            boat_length: 99,
        }
    })


export const COLUMN_HEADERS = [
    {
        value: "slip_number",
        title: "SLIP NUMBER",
    },
    {
        value: "boat_name",
        title: "BOAT NAME",
    },
    {
        value: "boat_color",
        title: "BOAT COLOR",
    },
    {
        value: "boat_length",
        title: "BOAT LENGTH",
    },
    {
        value: "actions",
        title: "ACTIONS",
    }
]