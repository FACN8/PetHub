const setItems = (itemsObject) => {
    for(const item in itemsObject) {
        let current = itemsObject[item];
        if( typeof current === 'object'){
            current = JSON.stringify(current);
        }
    localStorage.setItem(item,current);
    }

}


export default setItems;