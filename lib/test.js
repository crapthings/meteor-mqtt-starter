Test = new Mongo.Collection('test')

Test.fetchData = (selector = {}) => Test.find(selector, { sort: { createdAt: -1 } })
