import bugModel from '../Model/bugModel'

export function retreiveBugs() {
  let data = [];
  data.push(new bugModel({
    _id: 124123123,
    name: 'Crush on Load',
    details: 'Crushes after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    assigned: 'Oleg',
    creator: 'Gigi',
    priority: 1,
    time: "23.38",

  }))
    data.push(new bugModel({
    _id: 12413,
    name: 'Wont Load',
    details: 'Crushes after 3 seconds',
    steps: 'Open application and it will crash',
    version: 'V2.0',
    assigned: 'Oleg',
    creator: 'Gigi',
    priority: 3,
    time: "23.38",
    
    }))
  let sorted = data.sort((a, b) => { return a.priority - b.priority })
  return sorted;
}