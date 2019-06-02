<<<<<<< HEAD
## unicorn rentals

running server
`node src/app.js`

available endpoints

http://localhost:3000/unicorns/rentals - to rent a unicorn

http://localhost:3000/unicorns/returns - to return a unicorn

http://localhost:3000/healthz - to check the service is working

example calls

` to rent a unicorn you must send the name of the unicorn`
fetch('http://localhost:3000/unicorns/rentals', {
  method: 'POST',
  body: JSON.stringify({unicornName: "Pinky Pie"}),
  headers:{
    'Content-Type': 'application/json'
  }
})

` same to return `

fetch('http://localhost:3000/unicorns/renturns', {
  method: 'POST',
  body: JSON.stringify({unicornName: "Pinky Pie"}),
  headers:{
    'Content-Type': 'application/json'
  }
})
=======
# unicorn-rentals
>>>>>>> da76f169ec48bf37e853f27c19266fdb12e594c7
