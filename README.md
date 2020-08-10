# NodeTemplate
My personal template for my apirest in node

## Setup

- Execute in your terminal `yarn` or `npm i`
- Finally execute `yarn start` or `npm start`

## Usage 

You can add actions editing the file `action.js` with this syntax: 
```javascript
{
  id: 'user',//The url for your endpoint example localhost:3000/api/user
  type: 'post',//The http method you have post, get, put & delete
  callback: (req, res) => {
    //TODO: The callback for request & response
  }
}
```
