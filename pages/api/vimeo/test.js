let Vimeo = require('vimeo').Vimeo;

const clientId = "b60a4020ce29219884d81be8b146229e6e3b5a96",
    client_secret = "5gi7RwGawiOT//yq0ckbsrjNqYkDQmCpO6WhvLE7SnYPRGlJYj7rKUZGpcUZjyMu3gvq74wFMBDQOw2MSf6alPXFHNqpVQ/APuDyqUBjXttkO4Yn3ybc1neDaBUaMvAI",
    access_token = "3dd7a5f39b2ea84bbfb5b742fad1dba2";

let client = new Vimeo(clientId, client_secret, access_token);

export default function handler(req, res) {
    client.request({
        method: 'GET',
        path: '/tutorial'
    }, function (error, body, status_code, headers) {
        if (error) {
            console.log(error);
            res.status(401).json({ error })
        }

        console.log(body);
        res.status(200).json({ body })
    })
}