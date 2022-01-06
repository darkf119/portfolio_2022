// import React, { useEffect } from 'react';

// const useFetchData = url => {
//     useEffect(() => {
//         var projectsData = [];
//         var myInit = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             mode: 'cors',
//             cache: 'default'
//             //dataType: 'json',
//             //processData: false
//         };
//         let projectsDataRequest = new Request(url, myInit);
//         fetch(projectsDataRequest)
//             .then(function (resp) {
//                 //console.log(resp.text());
//                 return resp.json();
//             })
//             .then(function (data) {
//                 projectsData = data;
//                 console.log('projectsdata is ', projectsData);
//                 return projectsData;
//             });
//         // .catch(err => {
//         //     console.log('error is ', err);
//         // });

//     }, [url]);
// };

// export default useFetchData;