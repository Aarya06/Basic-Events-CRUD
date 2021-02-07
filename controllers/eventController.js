const event = require('../modals/event');

module.exports.getAllEvents = (req, res) => {
    event.find().then((events) => {
        if (events.length < 1) {
            res.status(200).json({ message: 'NO EVENT HAS BEEN POSTED' });
        }
        res.status(200).json(events);
    }).catch((e) => {
        console.log(e);
        res.status(404).json({ message: 'EVENT NOT FOUND' });
    })
}

module.exports.getEvent = (req, res) => {
    event.findById(req.params.id).then((event) => {
        res.status(200).json(event)
    }).catch((e) => {
        console.log(e);
        res.status(404).json({ message: 'EVENT NOT FOUND' });
    })
}

module.exports.createEvent = (req, res) => {
    event.create(req.body).then((event) => {
        res.status(201).json({
            message: 'EVENT CREATED',
            data: event
        });
    }).catch((e) => {
        console.log(e);
        res.status(400).json({ message: 'SOMETHING WENT WRONG' });
    })
}

module.exports.updateEvent = (req, res) => {
    event.findByIdAndUpdate(req.params.id, req.body).then((event) => {
        res.status(200).json({
            message: 'EVENT UPDATED',
            data: event
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).json({ message: 'SOMETHING WENT WRONG' });
    })
}

module.exports.deleteEvent = (req, res) => {
    event.findByIdAndDelete(req.params.id).then((event) => {
        res.status(200).json({ message: 'EVENT DELETED' });
    }).catch((e) => {
        console.log(e);
        res.status(404).json({ message: 'EVENT NOT FOUND' });
    })
}