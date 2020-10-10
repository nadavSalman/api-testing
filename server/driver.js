const gaxios = require('gaxios');



//this example use "gaxios": "^3.2.0"
// (async()=>{


//     // await gaxios.request(
//     //     {
//     //         url: 'http://localhost:3000/api/movie',
        
//     //         method: 'POST',
//     //         data: {
//     //             "name": "Avengers: Endgame",
//     //             "time": ["14:15", "16:00", "21:30", "23:00"],
//     //             "rating": 8.8
//     //         }
//     //       }
//     // ).catch((err)=>{
//     //     console.log(err);
//     // })
//     // .then((res) => {
//     //     console.log('request send ...');
//     //     console.log(res);
//     // });


//     // id =  '5f79a02eff92b420951110e9'
//     // await gaxios.request(
//     //     {
//     //         url: 'http://localhost:3000/api/movie',
        
//     //         method: 'PUT',
//     //         data: {
//     //             "name": "Avengers: Endgame",
//     //             "time": ["12:00", "14:15", "16:00", "21:30", "23:00"],
//     //             "rating": 8.8
//     //         },
//     //         // The querystring parameters that will be encoded using `qs` and
//     //         // appended to the url
//     //         params: {
//     //             id: '5f79a02eff92b420951110e9'
//     //         },

//     //       }
//     // ).catch((err)=>{
//     //     console.log(err);
//     // })
//     // .then((res) => {
//     //     console.log('request send ...');
//     //     console.log(res);
//     // });
    



// })();








// // let request_options = {
// //     // The url to which the request should be sent.  Required.
// //     url: string,
  
// //     // The HTTP method to use for the request.  Defaults to `GET`.
// //     method: 'GET',
  
// //     // The base Url to use for the request. Prepended to the `url` property above.
// //     baseURL: 'https://example.com';
  
// //     // The HTTP methods to be sent with the request.
// //     headers: { 'some': 'header' },
  
// //     // The data to send in the body of the request. Data objects will be
// //     // serialized as JSON.
// //     //
// //     // Note: if you would like to provide a Content-Type header other than
// //     // application/json you you must provide a string or readable stream, rather
// //     // than an object:
// //     // data: JSON.stringify({some: 'data'})
// //     // data: fs.readFile('./some-data.jpeg')
// //     data: {
// //       some: 'data'
// //     },
  
// //     // The max size of the http response content in bytes allowed.
// //     // Defaults to `0`, which is the same as unset.
// //     maxContentLength: 2000,
  
// //     // The max number of HTTP redirects to follow.
// //     // Defaults to 100.
// //     maxRedirects: 100,
  
// //     // The querystring parameters that will be encoded using `qs` and
// //     // appended to the url
// //     params: {
// //       querystring: 'parameters'
// //     },
  
// //     // By default, we use the `querystring` package in node core to serialize
// //     // querystring parameters.  You can override that and provide your
// //     // own implementation.
// //     paramsSerializer: (params) => {
// //       return qs.stringify(params);
// //     },
  
// //     // The timeout for the HTTP request. Defaults to 0.
// //     timeout: 1000,
  
// //     // Optional method to override making the actual HTTP request. Useful
// //     // for writing tests and instrumentation
// //     adapter?: async (options, defaultAdapter) => {
// //       const res = await defaultAdapter(options);
// //       res.data = {
// //         ...res.data,
// //         extraProperty: 'your extra property',
// //       };
// //       return res;
// //     };
  
// //     // The expected return type of the request.  Options are:
// //     // json | stream | blob | arraybuffer | text
// //     // Defaults to `json`.
// //     responseType: 'json',
  
// //     // The node.js http agent to use for the request.
// //     agent: someHttpsAgent,
  
// //     // Custom function to determine if the response is valid based on the
// //     // status code.  Defaults to (>= 200 && < 300)
// //     validateStatus: (status: number) => true,
  
// //     // Configuration for retrying of requests.
// //     retryConfig: {
// //       // The number of times to retry the request.  Defaults to 3.
// //       retry?: number;
  
// //       // The number of retries already attempted.
// //       currentRetryAttempt?: number;
  
// //       // The HTTP Methods that will be automatically retried.
// //       // Defaults to ['GET','PUT','HEAD','OPTIONS','DELETE']
// //       httpMethodsToRetry?: string[];
  
// //       // The HTTP response status codes that will automatically be retried.
// //       // Defaults to: [[100, 199], [429, 429], [500, 599]]
// //       statusCodesToRetry?: number[][];
  
// //       // Function to invoke when a retry attempt is made.
// //       onRetryAttempt?: (err: GaxiosError) => Promise<void> | void;
  
// //       // Function to invoke which determines if you should retry
// //       shouldRetry?: (err: GaxiosError) => Promise<boolean> | boolean;
  
// //       // When there is no response, the number of retries to attempt. Defaults to 2.
// //       noResponseRetries?: number;
  
// //       // The amount of time to initially delay the retry, in ms.  Defaults to 100ms.
// //       retryDelay?: number;
// //     },
  
// //     // Enables default configuration for retries.
// //     retry: boolean,
  
// //     // Cancelling a request requires the `abort-controller` library.
// //     // See https://github.com/bitinn/node-fetch#request-cancellation-with-abortsignal
// //     signal?: AbortSignal
// //   }