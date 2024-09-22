function getData(dataId, getNextData) {
    setTimeout(function () {
        console.log('data', dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}


//CallBack Hell --> It is a nested call back and it very diffcult to understand
getData(1, function () {
    console.log("getting data 2...")
    getData(2, function () {
        console.log("getting data 3...")
        getData(3, function () {
            console.log("getting data 4...")
            getData(4, () => {
                console.log("getting data 5...")
                getData(5)
            })
        })
    })
})

/*
to solve this problem we use the cocept called promises;
*/