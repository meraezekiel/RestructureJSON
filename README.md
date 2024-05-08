npm install 

npx react-native start <br> 
npx react-native run-android <br>

node version  v18.0.0 <br>
react-native version 0.72.6 <br> <br>

ANSWER : <br>
       const sampleData = [
        {
          id: 1,
          name: "John Doe",
          status: 1
        },
        {
          id: 2,
          name: "Jane Doe",
          status: 2
        },
        {
          id: 3,
          name: "Adam Rocket",
          status: 2
        },
        {
          id: 4,
          name: "Luis Rocket",
          status: 1
        }
    ]
    <br>
    <br>

    const restructureJson = (data) =>{
        return data && data.reduce((acc, item) => {
            const key = `status-${item?.status}`
            if(!acc[key]){
                acc[key] = []
            }

            acc[key].push(item)
            return acc
        },{})
    }
    
   <br>
    <br>
    
    const resData = restructureJson(sampleData)

      console.log("restructure data ---------",resData)<br>

      {<br>
         "status-1":[<br>
            &nbsp;&nbsp;{<br>
            &nbsp;&nbsp; "id":1,<br>
            &nbsp;&nbsp; "name":"John Doe",<br>
            &nbsp;&nbsp; "status":1<br>
            &nbsp;},<br>
            &nbsp;{<br>
               &nbsp;&nbsp; "id":4,<br>
               &nbsp;&nbsp; "name":"Luis Rocket",<br>
               &nbsp;&nbsp; "status":1<br>
            &nbsp;&nbsp;}<br>
         ],<br>
         "status-2":[<br>
            &nbsp;{<br>
               &nbsp;&nbsp;"id":2,<br>
               &nbsp;&nbsp;"name":"Jane Doe",<br>
               &nbsp;&nbsp;"status":2<br>
            &nbsp;},<br>
            &nbsp;{<br>
               &nbsp;&nbsp;"id":3,<br>
               &nbsp;&nbsp;"name":"Adam Rocket",<br>
               &nbsp;&nbsp;"status":2<br>
            &nbsp;}<br>
         &nbsp;]<br>
      }