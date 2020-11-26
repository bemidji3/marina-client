import {isEmpty, range, forOwn, entries} from "lodash";
const dropdownPlaceHolderItems = range(20).map(value => {
    return {
        text: `Slip #${value + 1}`,
        value: value + 1,
    }
});

export const createDropdownItems = (data) => {
    return isEmpty(data) ? dropdownPlaceHolderItems : data && entries(data).map(item => {
        return (
            {
                text: `Slip #${parseInt(item[0]) + 1}`,
                value: item[1].id,
                key: item[0],
            }
        )
    });
};